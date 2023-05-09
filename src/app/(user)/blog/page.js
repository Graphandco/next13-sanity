import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import BlogList from "@/components/blog/BlogList";

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

export default async function BlogPage() {
    const posts = await client.fetch(query);

    return (
        <main>
            <BlogList posts={posts} />
        </main>
    );
}
