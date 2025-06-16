import React, { useState, useEffect } from "react";

type Slide = {
    image: string;
    title: string;
    description: string;

};


type SlideshowProps = {
  slides: Slide[];
  width?: number;
  height?: number;
  interval: number;
  showArrows: boolean;
  showIndicators: boolean;
};

const Slideshow: React.FC<SlideshowProps> = ({
    slides,
    width = "100%",
    height = 500,
    interval,
    showArrows,
    showIndicators,
}) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!interval) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, interval);
        return () => clearInterval(timer);
    }, [interval, slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    if (slides.length === 0) return <div>No slides available.</div>;

    return (
        <div
            style={{
                width,
                height,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <img
                src={slides[current].image}
                alt={slides[current].title}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    color: "#fff",
                    background: "rgba(0,0,0,0.4)",
                    padding: "16px 24px",
                    borderRadius: 8,
                    maxWidth: "80%",
                }}
            >
                <h2 style={{ margin: 0 }}>{slides[current].title}</h2>
                <p style={{ margin: 0 }}>{slides[current].description}</p>
            </div>
            {showArrows && (
                <>
                    <button
                        onClick={prevSlide}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: 10,
                            transform: "translateY(-50%)",
                            background: "rgba(0,0,0,0.5)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: 32,
                            height: 32,
                            cursor: "pointer",
                        }}
                        aria-label="Previous Slide"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextSlide}
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: 10,
                            transform: "translateY(-50%)",
                            background: "rgba(0,0,0,0.5)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: 32,
                            height: 32,
                            cursor: "pointer",
                        }}
                        aria-label="Next Slide"
                    >
                        &#8594;
                    </button>
                </>
            )}
            {showIndicators && (
                <div
                    style={{
                        position: "absolute",
                        bottom: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 8,
                    }}
                >
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: idx === current ? "#fff" : "rgba(255,255,255,0.5)",
                                display: "inline-block",
                                cursor: "pointer",
                            }}
                            onClick={() => setCurrent(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slideshow;