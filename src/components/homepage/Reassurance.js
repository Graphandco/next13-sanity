"use client";
import React from "react";
import AppearTranslate from "../animations/AppearTranslate";

const Reassurance = () => {
    const items = [
        {
            title: "Interface Utilisateur",
            description:
                "Un site internet unique, au design innovant et moderne",
            svg: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
        },
        {
            title: "Expérience utilisateur",
            description:
                "Un site fonctionnel et accessible, une navigation claire",
            svg: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        },
        {
            title: "Sécurité",
            description: "Votre site est protégé, les données sont sécurisées",
            svg: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
        },
        {
            title: "Accessibilité",
            description:
                "Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
            svg: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
        },
    ];

    return (
        <section>
            <div className="container-xl bg-white py-20 md:py-10 grid grid-cols-2 md:grid-cols-4 ">
                {items.map((item, index) => (
                    <AppearTranslate
                        key={index}
                        className="transform-bottom flex flex-col gap-2 text-center p-5 "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-10 h-10 mx-auto"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={item.svg}
                            />
                        </svg>
                        <div className="font-fat reassurance-title">
                            {item.title}
                        </div>
                        <p className="opacity-60 leading-5">
                            {item.description}
                        </p>
                    </AppearTranslate>
                ))}
            </div>
        </section>
    );
};

export default Reassurance;
