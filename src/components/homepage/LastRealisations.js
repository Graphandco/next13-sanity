import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

const query = groq`
*[_type=='realisation'] {
    ...,
    author->,
    categories[]->
}[0...4] | order(_createdAt desc)
`;

export default async function LastRealisations() {
    const realisations = await client.fetch(query);

    return (
        <section className="bg-black text-white relative overflow-hidden">
            <svg
                className="absolute z-10"
                xmlns="http://www.w3.org/2000/svg"
                width="1440"
                height="180.659"
                viewBox="0 0 1440 180.659"
            >
                <path
                    id="wave"
                    d="M0,152.439V132.366H144v20.073H288v20.073H432V92.22H576V52.073H720V32H864V152.439h144v20.073h144V52.073h144V172.513h144v40.146H0Z"
                    transform="translate(1440 212.659) rotate(180)"
                    fill="#fff"
                />
            </svg>

            <div className="last-reas-wrapper grid grid-cols-1 md:grid-cols-2 gap-2 relative z-0">
                {realisations.map((realisation) => (
                    <div
                        className="bg-primary p-20 min-h-[70dvh] md:min-h-[50dvh] relative"
                        key={realisation.slug.current}
                    >
                        <Image
                            className="aspect-[1.3/1] object-cover"
                            src={urlForImage(realisation.mainImage).url()}
                            alt={realisation.title}
                            // width="800"
                            // height="800"
                            fill
                            priority={true}
                        />
                        {realisation.title}
                    </div>
                ))}
            </div>

            <svg
                className="absolute z-10 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 180.659"
            >
                <path
                    id="wave"
                    d="M0,152.439V132.366H144v20.073H288v20.073H432V92.22H576V52.073H720V32H864V152.439h144v20.073h144V52.073h144V172.513h144v40.146H0Z"
                    transform="translate(0 -32)"
                />
            </svg>

            {/* <Link href="/realisations">
                    <MagneticButton
                        className="mt-5"
                        background="var(--accent)"
                        color="black"
                        // tollerance={3}
                        // speed={0.5}
                        // borderRadius="50%"
                    >
                        Voir nos réalisations
                    </MagneticButton>
                </Link> */}
        </section>
    );
}
