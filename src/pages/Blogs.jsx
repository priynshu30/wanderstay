import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogSlice";

const Blogs = () => {
  const dispatch = useDispatch();
  const { list: blogs, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  if (loading) {
    return <p className="text-center mt-24">Loading blogs...</p>;
  }

  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Travel Blogs
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* ✅ IMAGE (THIS WAS MISSING BEFORE) */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover"
              loading="lazy"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
