import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const ImageSlider = ({ images, autoSlideInterval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigate to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Navigate to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto-slide using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex, autoSlideInterval]);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                // maxWidth: 600,
                height: 500,
                margin: "auto",
                overflow: "hidden",
                // borderRadius: "10px",
            }}
        >
            {/* Image */}
            <Box
                component="img"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease-in-out",
                }}
            />

            {/* Previous Button */}
            <Button
                onClick={prevSlide}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    zIndex: 10,
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                }}
            >
                Prev
            </Button>

            {/* Next Button */}
            <Button
                onClick={nextSlide}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    zIndex: 10,
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                }}
            >
                Next
            </Button>

            {/* Image Indicator */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "5px",
                }}
            >
                {images.map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: index === currentIndex ? "white" : "gray",
                            transition: "background-color 0.3s ease",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ImageSlider;
