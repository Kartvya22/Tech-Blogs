import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
// import Card from "./Card";

function Blogs() {
  // consuming context using useContext
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="h-full min-h-[90vh] w-11/12 mx-auto flex flex-col justify-center gap-8  pb-24">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className=" flex  justify-center items-center text-center m-auto ">
          <p className="flex justify-center items-center font-semibold text-xl mx-auto my-auto text-center ">No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          
          <BlogDetails post={post} />
          
          // <div 
          //   key={post.id}
          //   className="flex flex-col justify-center gap-2 items-start"
          // >
          //   <p className="font-bold text-xl">{post.title}</p>
          //   <div>
          //     <p>
          //       By <span className="italic">{post.author}</span> On{" "}
          //       <span className="font-semibold border-b-2 border-black border-dashed">
          //         {post.category}
          //       </span>
          //     </p>
          //     <p>Posted On {post.date} </p>
          //   </div>
          //   <p className=" font-normal text-lg">{post.content} </p>
          //   <div className="flex gap-2 text-blue-600 font-semibold">
          //     {post.tags.map((tag, index) => {
          //       return (
          //         <span key={index} className="underline">{`#${tag}`}</span>
          //       );
          //     })}
          //   </div>
          // </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
