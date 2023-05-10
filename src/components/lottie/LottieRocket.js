"use client";
import { useLottie } from "lottie-react";
import rocket from "./rocket2.json";

function LottieRocket() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rocket,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { View } = useLottie(defaultOptions);

    return <>{View}</>;
}

export default LottieRocket;
