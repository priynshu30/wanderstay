const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.P9CYidAEIWIXlu3STWcYAwHaE8?pid=Api&P=0&h=180"
        alt="Blog"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {blog.body.slice(0, 80)}...
        </p>
        <button className="text-blue-600 font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
