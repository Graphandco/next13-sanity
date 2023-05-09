"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const MobileNav = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const MenuRef = useRef();

    const handleMenu = () => {
        if (isOpen === false) {
            gsap.to([MenuRef.current], {
                // x: "0px",
                clipPath: "circle(150% at 100% 0)",
                duration: 1,
                // ease: "Expo.easeOut",
            });
            gsap.to(".menu-link", {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 0.5,
                delay: 0.5,
                stagger: 0.2,
            });
            setIsOpen(true);
        } else {
            gsap.to([MenuRef.current], {
                // x: "100%",
                clipPath: "circle(0% at 100% 0)",
                duration: 1,
                ease: "Expo.easeOut",
                delay: 0.5,
            });
            gsap.to(".menu-link", {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                opacity: 0,
                duration: 0.2,
                delay: 0,
                stagger: 0.2,
            });
            setIsOpen(false);
        }
    };

    return (
        <div>
            <div className="fixed z-20 top-2 right-2 justify-center items-center md:hidden">
                <button
                    className={`${
                        isOpen ? "hamburger-btn open" : "hamburger-btn"
                    }`}
                    aria-controls="primary-navigation"
                    onClick={handleMenu}
                >
                    <svg
                        stroke="var(--primary)"
                        fill="none"
                        className="hamburger"
                        viewBox="-10 -10 120 120"
                        width="50"
                    >
                        <path
                            className="line"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                ref={MenuRef}
                className="fixed z-10 top-0 right-0 h-full w-full bg-slate-800 "
            >
                <Image
                    src="/logo.png"
                    className="absolute z-0 opacity-5 top-1/2 -translate-y-1/2 w-[200%] -left-1/2"
                    width={2000}
                    height={2000}
                    alt="Site Logo"
                />
                <ul className="h-full flex flex-col justify-center items-center gap-3 relative z-10">
                    <li>
                        <div className="logo mb-5">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    width={100}
                                    height={100}
                                    alt="Site Logo"
                                />
                            </Link>
                        </div>
                    </li>
                    {links.map((link, index) => (
                        <li key={index} onClick={handleMenu}>
                            <Link
                                href={link.path}
                                className="menu-link inline-block text-semibold text-2xl uppercase"
                            >
                                {link.label}{" "}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
