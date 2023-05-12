import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import MagneticButton from "../MagneticButton";

const query = groq`
*[_type=='realisation'] {
    ...,
    author->,
    categories[]->
}[0...2] | order(_createdAt desc)
`;

export default async function LastRealisations() {
    const posts = await client.fetch(query);

    return (
        <section className="bg-black text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,64L0,256L180,256L180,64L360,64L360,160L540,160L540,128L720,128L720,32L900,32L900,160L1080,160L1080,64L1260,64L1260,0L1440,0L1440,0L1260,0L1260,0L1080,0L1080,0L900,0L900,0L720,0L720,0L540,0L540,0L360,0L360,0L180,0L180,0L0,0L0,0Z"
                ></path>
            </svg>
            <div className="container-xl">
                <div>
                    {posts.map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))}
                </div>
                <Link href="/realisations">
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
                </Link>
            </div>
        </section>
    );
}
