import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogSlice";

const BlogSection = () => {
  const dispatch = useDispatch();
  const { list: blogs, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center mt-10">Loading blogs...</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Travel Blogs
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
