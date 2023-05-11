"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { RichTextComponents } from "../RichTextComponents";

const Competences = ({ unBonSiteWeb, competences }) => {
    // console.log(competences);
    return (
        <section className="bg-white">
            <div className="container-xl pt-10 grid grid-cols-1 md:grid-cols-[3fr_2fr]">
                <div>
                    <h1 className="text-herosubtext">
                        Nos compétences
                        <br />à votre service
                    </h1>
                    <div className="pt-10">
                        <PortableText
                            value={competences[0].body}
                            components={RichTextComponents}
                        />
                    </div>
                </div>
                <div className="blob-woman mx-auto mt-20 md:mt-0 relative isolate  max-w-xs md:max-w-2xl">
                    <div className="blob blob-competences bg-image-black bg-cover "></div>
                    <Image
                        className="-translate-y-14"
                        src="/atouts-woman.svg"
                        width={400}
                        height={400}
                        alt="Site Logo"
                    />
                </div>
            </div>
            <div className="container-xl mt-5">
                <h3 className="font-fat text-h3 mb-5">
                    {unBonSiteWeb[0].title}
                </h3>
                <PortableText
                    value={unBonSiteWeb[0].body}
                    components={RichTextComponents}
                />
            </div>
        </section>
    );
};

export default Competences;
