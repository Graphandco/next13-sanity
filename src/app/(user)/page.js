import Competences from "@/components/homepage/Competences";
import Hero from "@/components/homepage/Hero";
import LottieRocket from "@/components/lottie/LottieRocket";
import CurvedText from "@/components/MagneticButton";
import MagneticButton from "@/components/MagneticButton";
// import ReactCurvedText from "react-curved-text";

export default async function Home() {
    // console.log(CurvyRef.current);

    // const CurvyRef = useRef();

    return (
        <>
            <Hero />
            <Competences />
        </>
    );
}
