import { useState, useEffect } from "react";
export const useScreen = () => {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    const handleResize = () => {
        setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        });
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return screen;
}