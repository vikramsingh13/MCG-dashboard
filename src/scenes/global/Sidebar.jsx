import React, { useState } from "react";
import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    useProSidebar,
    sidebarClasses,
    menuClasses,
} from "react-pro-sidebar";
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { hover } from "@testing-library/user-event/dist/hover";

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    const { collapseSidebar } = useProSidebar();
    return (
        <ProSidebar
            collapsed={isCollapsed}
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: `${colors.primary[400]}`,
                },
                [`.${menuClasses.container}:hover`]: {
                    backgroundColor: `${colors.primary[400]}`,
                },
            }}
        >
            <Menu
                iconShape="square"
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        if (level === 0) {
                            return {
                                color: "#8AC5BC",
                                backgroundColor: active ? "#8AC5BC" : undefined,
                                "&:hover": {
                                    backgroundColor: `${colors.primary[400]}`,
                                    pointer: "auto",
                                },
                                "&:active": {
                                    backgroundColor: `${colors.primary[400]}`,
                                },
                            };
                        }
                    },
                }}
            >
                {/* logo and menu icon */}
                <MenuItem
                    icon={
                        isCollapsed ? (
                            <MenuOutlinedIcon
                                onClick={() => collapseSidebar()}
                            />
                        ) : undefined
                    }
                    style={{
                        margin: "10px 0 20px 0",
                        color: "colors.grey[100]",
                    }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <IconButton>
                                <MenuOutlinedIcon
                                    onClick={() => collapseSidebar()}
                                />
                            </IconButton>
                            <Typography>Admins</Typography>
                        </Box>
                    )}
                </MenuItem>
            </Menu>
        </ProSidebar>
    );
};

export default Sidebar;
