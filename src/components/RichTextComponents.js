import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

export const RichTextComponents = {
    types: {
        image: ({ value }) => (
            <div className="relative w-full">
                <Image
                    className="object-contain"
                    src={urlForImage(value).url()}
                    alt="Blog cover"
                    width="300"
                    height="300"
                />
            </div>
        ),
        callToAction: ({ value, isInline }) =>
            isInline ? (
                <a href={value.url}>{value.text}</a>
            ) : (
                <div className="callToAction">{value.text}</div>
            ),
    },

    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-7">{children}</ul>
        ),
        number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    block: {
        h1: ({ children }) => (
            <h1 className="text-5xl text-white">{children}</h1>
        ),
    },
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,

    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
            return (
                <Link href={value.href} rel={rel}>
                    {children}
                </Link>
            );
        },
    },
};
