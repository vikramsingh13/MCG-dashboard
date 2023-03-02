import { createTheme } from '@mui/material/styles';
import { createContext, useState, useMemo } from 'react';

//color values for dark or light mode
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: "#e6f3f0",
            200: "#cde7e1",
            300: "#b4dad3",
            400: "#9bcec4",
            500: "#82c2b5",
            600: "#689b91",
            700: "#4e746d",
            800: "#344e48",
            900: "#1a2724"
        },
        yellowAccent: {
            100: "#fdefde",
            200: "#fce0bd",
            300: "#fad09d",
            400: "#f9c17c",
            500: "#f7b15b",
            600: "#c68e49",
            700: "#946a37",
            800: "#634724",
            900: "#312312"
        },
        blueAccent: {
            100: "#ecf5f8",
            200: "#daeaf1",
            300: "#c7e0eb",
            400: "#b5d5e4",
            500: "#a2cbdd",
            600: "#82a2b1",
            700: "#617a85",
            800: "#415158",
            900: "#20292c"
        },
        } : 
        {
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#f2f0f0",
                500: "#141b2d",
                600: "#434957",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#1a2724",
                200: "#344e48",
                300: "#4e746d",
                400: "#689b91",
                500: "#82c2b5",
                600: "#9bcec4",
                700: "#b4dad3",
                800: "#cde7e1",
                900: "#e6f3f0",
            },
            yellowAccent: {
                100: "#312312",
                200: "#634724",
                300: "#946a37",
                400: "#c68e49",
                500: "#f7b15b",
                600: "#f9c17c",
                700: "#fad09d",
                800: "#fce0bd",
                900: "#fdefde",
            },
            blueAccent: {
                100: "#20292c",
                200: "#415158",
                300: "#617a85",
                400: "#82a2b1",
                500: "#a2cbdd",
                600: "#b5d5e4",
                700: "#c7e0eb",
                800: "#daeaf1",
                900: "#ecf5f8",
            },

        }
    ) 
}); //ends tokens

//mui theme settings 
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500],
                }

            } : {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: "#fcfcfc",
                }

            }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        }, 
    };
}; //ends themeSettings


//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    //uses memoization for toggling dark or light mode
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    );

    //uses memoization for creating mui theme
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}