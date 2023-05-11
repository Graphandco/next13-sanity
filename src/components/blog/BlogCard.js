"use client";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import ClientSideRoute from "../ClientSideRoute";

const BlogCard = ({ post }) => {
    // console.log(urlForImage(post.mainImage).url);
    // console.log(post);
    return (
        <div className=" bg-slate-800 rounded-box mx-2 flex w-96 max-w-full flex-shrink-0 flex-col justify-center gap-4 p-4 shadow-xl">
            <figure className="relative">
                <Image
                    className="aspect-[1.3/1] object-cover"
                    src={urlForImage(post.mainImage).url()}
                    alt={post.title}
                    width="800"
                    height="800"
                    priority={true}
                />
                <div className="flex items-center justify-between absolute bottom-0 left-0 p-2 w-full">
                    {post.categories?.map((cat) => (
                        <div key={cat._id} className="badge badge-primary">
                            {cat.title}
                        </div>
                    ))}
                    <div className="badge badge-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 mr-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>

                        {new Date(post._createdAt).toLocaleDateString("fr-fr", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </div>
                </div>
            </figure>
            <div className="card-body relative p-5">
                <h2 className="card-title text-white">{post.title}</h2>
                <p>{post.excerpt}</p>

                <div className="card-actions justify-end">
                    <ClientSideRoute route={`/blog/${post.slug.current}`}>
                        <button className="btn btn-primary">
                            Voir la suite
                        </button>
                    </ClientSideRoute>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
