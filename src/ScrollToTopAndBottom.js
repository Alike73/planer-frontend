

import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import "./index.css";

const ScrollToTopAndBottom = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <FaAngleDown
                        className="icon-position2 icon-style"
                        onClick={scrollToBottom}
                    />
                )}{" "}
            </div>

            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <FaAngleUp
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}{" "}
            </div>
        </div>
    );
};
export default ScrollToTopAndBottom;