"use client";
import Blog from "@/components/Blog/Blog";
import getList from "@/lib/get/getList";
import React, { useState, useEffect } from "react";

// Blogs Page
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => setBlogs(await getList("Blogs")))();
  }, []);
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <Blog {...blog} key={blog.id} />
      ))}
    </div>
  );
}
