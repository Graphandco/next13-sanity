"use client";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import { FaSmile, FaCode, FaSadCry } from 'react-icons/fa';
// import { GiSwordsPower } from 'react-icons/gi';

const Chiffres = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".numbers span");

        gsap.from(items, {
            textContent: 0,
            duration: 4,
            ease: "power1.in",
            snap: { textContent: 1 },
            stagger: {
                each: 0.5,
                onUpdate: function () {
                    this.targets()[0].innerHTML = numberWithCommas(
                        Math.ceil(this.targets()[0].textContent)
                    );
                },
            },
            scrollTrigger: {
                start: "top bottom-=100",
                trigger: ".numbers",
                //toggleActions: 'play none none reverse',
            },
        });

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }, []);

    return (
        <section className="numbers bg-image-yellow py-32">
            <div className="numbers-wrapper container">
                <div className="numbers-item">
                    {/* <FaSmile /> */}
                    <div className="numbers-number">
                        <span>97</span>%
                    </div>
                    <div className="numbers-title">Fidélisation client</div>
                </div>
                <div className="numbers-item">
                    {/* <GiSwordsPower /> */}
                    <div className="numbers-number">
                        <span>15</span>
                    </div>
                    <div className="numbers-title">Ans d'expérience</div>
                </div>
                <div className="numbers-item">
                    {/* <FaCode /> */}
                    <div className="numbers-number">
                        <span>295123</span>
                    </div>
                    <div className="numbers-title">Lignes de code</div>
                </div>
                <div className="numbers-item">
                    {/* <FaSadCry /> */}
                    <div className="numbers-number">
                        <span>12</span>
                    </div>
                    <div className="numbers-title">
                        Demandes de réparation d'imprimante
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chiffres;
