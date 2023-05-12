import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import RealisationCard from "@/components/realisations/RealisationCard";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import SplitText from "@/components/SplitText";

const queryRealisations = groq`
*[_type=='realisation'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

const queryTexteRealisations = groq`
*[_type=='textBlock' && slug.current == "nos-realisations"][0] {
    ...,
}
`;

export default async function BlogPage() {
    const realisations = await client.fetch(queryRealisations);
    const texteRealisations = await client.fetch(queryTexteRealisations);

    return (
        <section className="container-xl">
            <h2 className="competences-title text-herosubtext gradient-text">
                <SplitText text="Nos réalisations"></SplitText>
            </h2>
            <div className="py-10">
                <PortableText
                    value={texteRealisations.body}
                    components={RichTextComponents}
                />
            </div>
            {realisations.map((rea) => (
                <RealisationCard key={rea.slug.current} realisation={rea} />
            ))}
        </section>
    );
}
