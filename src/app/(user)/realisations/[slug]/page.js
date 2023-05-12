import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
// import BlogSingle from "@/components/blog/BlogSingle";

const Realisation = async ({ params: { slug } }) => {
    const query = groq`
    *[_type=='realisation' && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
    `;
    const realisation = await client.fetch(query, { slug });
    return (
        <section>
            <div className="container-xl">
                <h1 className="font-fat">{realisation.title}</h1>
            </div>
        </section>
    );
};

export default Realisation;
