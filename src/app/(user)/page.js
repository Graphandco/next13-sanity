import LottieRocket from "@/components/lottie/LottieRocket";

export default async function Home() {
    // console.log(CurvyRef.current);

    // const CurvyRef = useRef();

    return (
        <main className="header-content container-xl">
            <div className="border-b-2 border-black py-5">
                <div className="text-herotext text-black ">
                    Création de sites web sur-mesure.
                </div>
            </div>
            <div className="flex py-5 items-center">
                <div className="lottie-rocketgrid place-items-center mx-auto flex-grow">
                    <LottieRocket />
                </div>
                <div className="hero-text px-10">
                    Nous sommes spécialisés dans la réalisation de sites web.
                    Moderne et intuitif, votre site sera un puissant levier pour
                    accroitre la vitalité de votre entreprise.
                </div>
                <div className="text-herosubtext">
                    Un métier,
                    <br />
                    une passion
                </div>
                <div className="to-curve">Nos prestations</div>
            </div>
        </main>
    );
}
