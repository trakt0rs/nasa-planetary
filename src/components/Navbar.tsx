import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from "@mui/material";

export default function Navbar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="fixed" sx={{ top: 0, left: 0, bgcolor: "rgba(0, 0, 0, 0.6)", boxShadow: 3, zIndex: 100 }}>
            <Toolbar sx={{ 
                display: "flex", 
                justifyContent: "space-between",
                minHeight: { xs: 48, sm: 64 } // Adjust toolbar height for different screens
            }}>
                {/* Logo / Title */}
                <Typography 
                    variant={isSmallScreen ? "subtitle1" : "h6"} 
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                >
                    NASA PLANETARY
                </Typography>

                {/* Nav Links */}
                <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}>
                    <Button 
                        component={RouterLink} 
                        to="/" 
                        color="inherit" 
                        sx={{ 
                            fontWeight: "bold",
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            minWidth: { xs: 'auto', sm: 64 },
                            px: { xs: 1, sm: 2 }
                        }}
                    >
                        {isSmallScreen ? 'Home' : 'Planetary'}
                    </Button>

                    <Typography variant="body1" sx={{ opacity: 0.6, display: { xs: 'none', sm: 'block' } }}>
                        |
                    </Typography>

                    <Button 
                        component={RouterLink} 
                        to="/guess" 
                        color="inherit" 
                        sx={{ 
                            fontWeight: "bold",
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            minWidth: { xs: 'auto', sm: 64 },
                            px: { xs: 1, sm: 2 }
                        }}
                    >
                        {isSmallScreen ? 'Guess' : 'Guess the Title'}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}