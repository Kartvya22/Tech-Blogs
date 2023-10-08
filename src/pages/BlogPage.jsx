import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";
import Pagination from "../components/Pagination";

function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const { darkMode, loading, setLoading } = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("something went wrong");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div
      className={`w-full mx-auto min-h-screen flex flex-col gap-4 ${
        darkMode ? "bg-black text-white" : " bg-white  text-black"
      }  `}
    >
      <Header />
      <div className="w-11/12 mx-auto flex flex-col justify-center gap-2 items-center">
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : blog ? (
          <div className="flex flex-col gap-2">
            <BlogDetails post={blog} />
            <h2 className="font-semibold text-4xl text-slate-700 my-2 pl-4">
              Related Blogs :{" "}
            </h2>
            <div className=" w-full h-[1px] bg-black "></div>
            {relatedblogs.map((post, index) => (
              <div key={index} className="">
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
      <div
        className={`fixed bottom-0 left-0 w-screen mx-auto mt-32 border-slate-400 ${
          darkMode ? "bg-black border-t-2" : " bg-white border-t-[1px]"
        }`}
      >
        <button
          onClick={() => navigation(-1)}
          className={` flex justify-center items-end text-end mx-auto font-semibold border-2 border-slate-700 rounded-md py-1 px-4 my-2  transition-all duration-200 shadow-sm  ${
            darkMode
              ? "hover:bg-white hover:text-black shadow-white"
              : "hover:bg-black hover:text-white shadow-black"
          }`}
        >
          {" "}
          Back{" "}
        </button>
      </div>
    </div>
  );
}

export default BlogPage;
