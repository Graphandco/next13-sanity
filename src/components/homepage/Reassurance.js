"use client";
import React from "react";
import AppearTranslate from "../animations/AppearTranslate";
import SplitText from "../SplitText";
import Image from "next/image";

const Reassurance = () => {
    const items = [
        {
            title: "Interface Utilisateur",
            description:
                "Un site internet unique, au design innovant et moderne",
            image: "/woman-ui.svg",
            width: 100,
            height: 150,
            svg: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
        },
        {
            title: "Expérience utilisateur",
            description:
                "Un site fonctionnel et accessible, une navigation claire",
            image: "/woman-ux.svg",
            width: 70,
            height: 150,
            svg: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        },
        {
            title: "Sécurité",
            description: "Votre site est protégé, les données sont sécurisées",
            image: "/woman-lock.svg",
            width: 110,
            height: 150,
            svg: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
        },
        {
            title: "Accessibilité",
            description:
                "Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
            image: "/woman-phone.svg",
            width: 60,
            height: 100,
            svg: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
        },
    ];

    return (
        <section>
            <div className="container-xl bg-white py-20 md:py-10 overflow-hidden">
                <h2 className="competences-title text-herosubtext gradient-text">
                    <SplitText text="Les atouts de votre site" color="black" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-12">
                    {items.map((item, index) => (
                        <AppearTranslate
                            key={index}
                            className="rassurance-item transform-bottom shadow-xl"
                        >
                            <Image
                                src={item.image}
                                width={item.width}
                                height={item.height}
                                alt={item.title}
                                className="justify-self-center"
                            />
                            <div className="flex flex-col gap-4 border-l-2 border-accent py-5 pl-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="var(--accent)"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={item.svg}
                                    />
                                </svg>
                                <div className="font-title font-semibold text-2xl leading-5">
                                    {item.title}
                                </div>
                                <p className="leading-5 opacity-70">
                                    {item.description}
                                </p>
                            </div>
                        </AppearTranslate>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reassurance;
