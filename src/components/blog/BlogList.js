import BlogCard from "./BlogCard";

const BlogList = ({ posts }) => {
    return (
        <div className="flex gap-2 flex-wrap container-xl">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;
