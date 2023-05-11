"use client";
import { useEffect, useRef } from "react";
import LottieRocket from "../lottie/LottieRocket";
import MagneticButton from "@/components/MagneticButton";

const Hero = () => {
    const heroRef = useRef();

    useEffect(() => {
        const setHeroHeight = () => {
            const headerHeight =
                document.querySelector("#site-header").offsetHeight;
            //   const hero = document.querySelector("#hero > .elementor-container");
            heroRef.current.style.minHeight = `calc(100vh - ${headerHeight}px)`;
        };
        setHeroHeight();
        window.addEventListener("resize", setHeroHeight);
    }, []);

    return (
        <section
            ref={heroRef}
            // className="container-xl bg-image-yellow rounded-b-[50px] relative z-10"
            className="container-xl relative z-10"
        >
            <div className="border-b-2 border-black py-5 md:py-10">
                <div className="text-herotext">
                    Création de sites web sur-mesure.
                </div>
            </div>
            <div className="flex flex-col md:flex-row py-5 gap-5">
                <div className="lottie-rocketgrid place-items-center mx-auto max-w-[200px] md:max-w-xs">
                    <LottieRocket />
                </div>
                <div className="hero-text my-5">
                    <p className=" max-w-lg">
                        Nous sommes spécialisés dans la réalisation de sites
                        web. Moderne et intuitif, votre site sera un puissant
                        levier pour accroitre la vitalité de votre entreprise.
                    </p>

                    <MagneticButton
                        className="mt-5"
                        // scale={4}
                        // tollerance={3}
                        // speed={0.5}
                        // borderRadius="50%"
                    >
                        Nos prestations
                    </MagneticButton>
                    {/* <CurvedText text="Nos prestations" /> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
