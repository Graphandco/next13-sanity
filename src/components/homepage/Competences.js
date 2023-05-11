"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
// import { useEffect, useRef } from "react";
import { RichTextComponents } from "../RichTextComponents";
import SplitText from "../SplitText";

const Competences = ({ unBonSiteWeb, competences }) => {
    // console.log(competences);

    return (
        <section className="">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className=""
            >
                <path
                    fill="#000"
                    fillOpacity="1"
                    d="M0,288L0,192L144,192L144,64L288,64L288,288L432,288L432,128L576,128L576,64L720,64L720,192L864,192L864,128L1008,128L1008,96L1152,96L1152,64L1296,64L1296,128L1440,128L1440,320L1296,320L1296,320L1152,320L1152,320L1008,320L1008,320L864,320L864,320L720,320L720,320L576,320L576,320L432,320L432,320L288,320L288,320L144,320L144,320L0,320L0,320Z"
                ></path>
            </svg>
            <div className="bg-black text-white">
                <div className="container-xl pt-20 grid grid-cols-1 md:grid-cols-[3fr_2fr]">
                    <div>
                        <h1 className="text-herosubtext gradient-text">
                            <SplitText text="Nos compétences à votre service"></SplitText>
                        </h1>
                        <div className="pt-10">
                            <PortableText
                                value={competences[0].body}
                                components={RichTextComponents}
                            />
                        </div>
                    </div>
                    <div className="blob-woman mx-auto mt-20 md:mt-0 relative isolate  max-w-xs md:max-w-2xl">
                        <div className="blob blob-competences bg-image-yellow bg-cover "></div>
                        <Image
                            className="-translate-y-14"
                            src="/atouts-woman.svg"
                            width={400}
                            height={400}
                            alt="Site Logo"
                        />
                    </div>
                </div>
                <div className="container-xl mt-5 pb-20">
                    <h3 className="font-fat text-h3 mb-5">
                        {unBonSiteWeb[0].title}
                    </h3>
                    <PortableText
                        value={unBonSiteWeb[0].body}
                        components={RichTextComponents}
                    />
                </div>
            </div>
            <div className="bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fill-opacity="1"
                        d="M0,160L0,32L180,32L180,160L360,160L360,256L540,256L540,128L720,128L720,224L900,224L900,320L1080,320L1080,128L1260,128L1260,96L1440,96L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Competences;
