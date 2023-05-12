"use client";
import {
    useEffect,
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from "react";
import { gsap } from "gsap";

const Cursor = forwardRef(({ size, delay }, ref) => {
    const el = useRef();

    useImperativeHandle(
        ref,
        () => {
            // return our API
            return {
                moveTo(x, y) {
                    gsap.to(el.current, { x, y, delay });
                },
            };
        },
        [delay]
    );

    return <div className={`circle ${size}`} ref={el}></div>;
});

export default Cursor;
