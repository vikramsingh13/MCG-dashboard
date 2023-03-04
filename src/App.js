import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route} from "react-router-dom";
import Navbar from './scenes/global/Navbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";

const App = () => {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className='content'>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                        </Routes>
                    </main>

                </div>

            </ThemeProvider>
        </ColorModeContext.Provider>
        
    );
}

export default App;
