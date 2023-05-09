import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import BlogSingle from "@/components/blog/BlogSingle";

const Post = async ({ params: { slug } }) => {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
    `;
    const post = await client.fetch(query, { slug });
    return <BlogSingle post={post} />;
};

export default Post;
