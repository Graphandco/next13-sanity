"useClient";
import { useEffect, useRef } from "react";
import Cursor from "./Cursor";

const CursorWrapper = () => {
    const circleRefs = useRef([]);

    // reset on re-renders
    circleRefs.current = [];

    useEffect(() => {
        const { innerWidth, innerHeight } = window;
        circleRefs.current.forEach((ref) =>
            ref.moveTo(innerWidth / 2, innerHeight / 2)
        );

        const onMove = ({ clientX, clientY }) => {
            circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
        };

        window.addEventListener("pointermove", onMove);

        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    const addCircleRef = (ref) => {
        if (ref) {
            circleRefs.current.push(ref);
        }
    };

    return (
        <div className="cursors hidden md:flex">
            <Cursor size="sm" ref={addCircleRef} delay={0} />
            <Cursor size="md" ref={addCircleRef} delay={0.1} />
            <Cursor size="lg" ref={addCircleRef} delay={0.2} />
        </div>
    );
};

export default CursorWrapper;
