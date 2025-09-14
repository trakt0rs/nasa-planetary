import { Box, Typography, IconButton, Link } from "@mui/material";
import XIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "black",
                color: "white",
                py: 3,
                px: 2,
                mt: "auto",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="body2" sx={{ mb: { xs: 1, sm: 0 } }}>
                © {new Date().getFullYear()} NASA Planetary By Roberts Sprogis
            </Typography>

            <Box>
                <IconButton
                    component={Link}
                    href="https://x.com/NASA"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "white" }}
                >
                    <XIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://www.facebook.com/NASA/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "white" }}
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://www.instagram.com/nasa/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "white" }}
                >
                    <InstagramIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
