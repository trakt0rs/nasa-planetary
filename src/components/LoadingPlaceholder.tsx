import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingPlaceholder() {
    return (
        <Box sx={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "black", color: "white"}}>
            <CircularProgress color="inherit" />
            <Typography sx={{ ml: 2 }}>Loading NASA photo...</Typography>
        </Box>
    );
}