import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../RichTextComponents";

const BlogSingle = ({ post }) => {
    return (
        <article className="container-xl">
            <h1 className="text-4xl text-white">{post.title}</h1>
            <Image
                className="aspect-[1.3/1] object-cover"
                src={urlForImage(post.mainImage).url()}
                alt={post.title}
                width="800"
                height="800"
                priority={true}
            />
            <PortableText value={post.body} components={RichTextComponents} />
        </article>
    );
};

export default BlogSingle;
