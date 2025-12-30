import { useEffect, useState } from "react";
import BlogSection from "../Components/blog/BlogSection";

const images = [
  "https://tse1.mm.bing.net/th/id/OIP.zkP36OBXHCHnYriSSq2HTQHaEP?pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th/id/OIP.fsvgDhP-Jd28VHZifdX8QgHaEo?pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th/id/OIP.ETQpUS3wKll91XlggYSEJQHaE8?pid=Api&P=0&h=180",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000); // change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      {/* Banner */}
      <section
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out",
        }}
        className="h-[70vh] relative flex items-center justify-center text-white"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 p-6 rounded text-center">
          <h1 className="text-4xl font-bold mb-4">
            Explore the World with WanderStay
          </h1>
          <p className="text-lg">
            Discover hotels, blogs, and unforgettable journeys
          </p>
        </div>
      </section>

      {/* Blogs */}
      <BlogSection />
    </div>
  );
};

export default Home;
