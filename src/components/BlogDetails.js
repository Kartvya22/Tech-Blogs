import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center gap-2 items-start ">
        
        <NavLink to={`/blog/${post.id}`} className="font-bold text-xl hover:underline transition-all duration-200" >
            <span>{post.title}</span>
        </NavLink>
        <p>
            By 
            <span className="italic font-semibold"> {post.author} </span>
            On {" "}
                {
                    // console.log(post.category)
                }
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="font-bold text-lg  hover:underline transition-all duration-150">
                <span>{post.category} </span>
            </NavLink>
        </p>
        <p>Posted On {post.date} </p>
        <p className=" font-normal text-base">{post.content} </p>
        <div className="flex flex-wrap gap-x-4 text-blue-600 font-semibold ">
            {post.tags.map((tag,index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className=" hover:text-blue-800 hover:underline transition-all duration-200">{`#${tag}`} </span>
                </NavLink>
            ))} 
        </div>
        <div className='my-2 w-full h-[2px] bg-black'></div>
    </div>
  )
}

export default BlogDetails