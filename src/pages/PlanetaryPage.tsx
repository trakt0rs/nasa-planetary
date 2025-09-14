import { useEffect, useState } from "react";
import type { NasaImage } from "../data/types";
import { Box, Typography } from "@mui/material";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import BtnNext from "../components/BtnNext";
import { fetchImages } from "../data/api";

export default function PlanetaryPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [image, setImage] = useState<NasaImage | null>(null);

    const fetchNextImage = async () => {
        setLoading(true);

        let photoData: NasaImage | null = null;
        const images = await fetchImages(1);
        if (images && images.length > 0) {
            photoData = images[0];
        }

        if (!photoData) {
            alert("Failed to fetch new APOD");
            setLoading(false);
            return;
        }

        const img = new Image();
        img.src = photoData.hdurl ?? photoData.url;

        img.onload = () => {
            setImage(photoData);
            setLoading(false);
        };
        img.onerror = () => {
            alert("Failed to load image");
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchNextImage();
    }, []);

    if (loading || !image) return <LoadingPlaceholder />;

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                flexDirection: {
                    xs: "column",
                    md: "column",
                    lg: "row",
                },
            }}
        >
            {/* Title + Description + Next Button */}
            <Box
                sx={{
                    p: 2,
                    pt: { xs: 2, md: 10 },
                    minWidth: { md: 450 },
                    maxWidth: { lg: "40vw" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    order: { xs: 2, md: 2, lg: 1 },
                    overflowY: "auto",
                    maxHeight: { xs: "50vh", lg: "100vh" },
                }}
            >
                <Typography variant="h5">{image.title}</Typography>
                <Typography variant="body1" sx={{ color: "lightgray" }}>
                    {image.explanation}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <BtnNext onClick={fetchNextImage} />
            </Box>

            {/* APOD Image */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "black",
                    overflow: "hidden",
                    maxHeight: { xs: "50vh", md: "100%" },
                    order: { xs: 1, md: 1, lg: 2 },
                    width: { lg: "60vw" },
                }}
            >
                <Box
                    component="img"
                    src={image.url}
                    alt="NASA Astronomy Picture of the Day"
                    sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>
        </Box>
    );
}