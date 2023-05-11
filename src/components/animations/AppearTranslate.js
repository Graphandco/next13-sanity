"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AppearTranslate = ({
    children,
    from,

    className,
}) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });

    useLayoutEffect(() => {
        gsap.set(".transform-bottom", {
            opacity: 0,
            y: 100,
        });

        ScrollTrigger.batch(
            ".transform-left, .transform-right, .transform-top, .transform-bottom, .transform-opacity, .transform-rotate-x, .transform-path",
            {
                once: true,
                interval: 0,
                onEnter: (elements) => {
                    gsap.to(elements, {
                        // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        opacity: 1,
                        rotate: 0,
                        x: 0,
                        y: 0,
                        stagger: 0.25,
                        duration: 1,
                        ease: "Expo.easeOut",
                        //ease: Elastic.easeOut,
                        //ease: Bounce.easeOut,
                    });
                },
                markers: true,
                start: "top 90%",
            }
        );
    }, []);
    return <div className={className || ""}>{children}</div>;
};

export default AppearTranslate;
