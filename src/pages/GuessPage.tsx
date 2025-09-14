import { useEffect, useState } from "react";
import type { NasaImage } from "../data/types";
import { Box, Button, Typography } from "@mui/material";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import BtnNext from "../components/BtnNext";
import { fetchImages } from "../data/api";

export default function GuessPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [images, setImages] = useState<NasaImage[] | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [guessedNumber, setGuessedNumber] = useState<number | null>(null);

    const fetchNextGame = async () => {
        setLoading(true);

        let photosData: NasaImage[] | null = await fetchImages(3);
        let randomIndex: number = Math.floor(Math.random() * 3);

        if (!photosData) {
            setLoading(false);
            return;
        }

        const img = new Image();
        img.src = photosData[randomIndex].hdurl ?? photosData[randomIndex].url;

        img.onload = () => {
            setImages(photosData);
            setSelectedImageIndex(randomIndex);
            setGuessedNumber(null);
            setLoading(false);
        };
        img.onerror = () => {
            console.error("Failed to load image");
            setLoading(false);
        };
    };

    const guess = (idx: number) => {
        setGuessedNumber(idx);
    };

    useEffect(() => {
        fetchNextGame();
    }, []);

    if (loading || !images) return <LoadingPlaceholder />;
  
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
            }}
        >
            {/* Game controls panel */}
            <Box
                sx={{
                    p: 2,
                    pt: { xs: 2, md: 10 },
                    minWidth: { md: 350 },
                    maxWidth: { md: "40vw" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    order: { xs: 2, md: 1 },
                    overflowY: "auto",
                    maxHeight: { xs: "50vh", md: "100vh" },
                }}
            >
                {images.map((image, index) => {
                    const isCorrect =
                        index === selectedImageIndex && guessedNumber !== null;

                    return (
                        <Button
                            key={index}
                            onClick={() => guess(index)}
                            disabled={guessedNumber !== null}
                            sx={{
                                justifyContent: "flex-start",
                                "&:hover": { backgroundColor: "#303030" },
                                backgroundColor: isCorrect ? "green" : "transparent",
                                display: "block",
                                textAlign: "left",
                                whiteSpace: "normal",
                                py: 2,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ 
                                    color: "whitesmoke", 
                                    textAlign: "start",
                                    overflow: "visible",
                                    whiteSpace: "normal",
                                    lineHeight: 1.2,
                                }}
                            >
                                {image.title}
                            </Typography>
                        </Button>
                    );
                })}

                {guessedNumber !== null && (
                    <>
                        <Typography variant="body1" sx={{ color: "lightgray", mt: 2 }}>
                            {images[selectedImageIndex].explanation}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <BtnNext onClick={fetchNextGame} />
                    </>
                )}
            </Box>

            {/* Image display container */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "black",
                    overflow: "hidden",
                    maxHeight: { xs: "50vh", md: "100%" },
                    order: { xs: 1, md: 2 },
                    width: { md: "60vw" },
                }}
            >
                <Box
                    component="img"
                    src={images[selectedImageIndex].url}
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