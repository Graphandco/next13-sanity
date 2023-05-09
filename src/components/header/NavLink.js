"use client";
import Link from "next/link";
import gsap from "gsap";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef } from "react";

export default function NavLink({ label, path, targetSegment }) {
    const activeSegment = useSelectedLayoutSegment();

    const LinkRef = useRef();
    // let targets = gsap.utils.toArray(LinkRef);
    // console.log(targets);

    // targets.forEach((dot) => {
    //     gsap.to(".dot", {
    //         y: "0px",
    //         // clipPath: "circle(150% at 100% 0)",
    //         duration: 1,
    //         ease: "Bounce.easeOut",
    //     });
    // });

    const dotEnter = () => {
        gsap.to([LinkRef.current], {
            // x: "0px",
            // clipPath: "circle(150% at 100% 0)",
            y: 0,
            duration: 0.75,
            ease: "Bounce.easeOut",
        });
    };
    const dotExit = () => {
        gsap.to([LinkRef.current], {
            // x: "0px",
            // clipPath: "circle(150% at 100% 0)",
            y: -50,
            duration: 0.3,
            ease: "Bounce.easeOut",
        });
    };
    return (
        <Link
            onMouseEnter={dotEnter}
            onMouseLeave={dotExit}
            href={path}
            className={`${
                activeSegment === targetSegment ? "navlink active" : "navlink"
            }`}
        >
            <span ref={LinkRef} className="dot"></span>
            {label}
        </Link>
    );
}
