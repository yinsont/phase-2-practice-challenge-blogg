import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({posts}) {
  const postsToRender = posts.map((post) => {
    return <BlogPost post = {post} key = {post.title}></BlogPost>
  })
  return (
    <div className="blog-container">
      {postsToRender}
    </div>
  );
}

export default BlogPostContainer;
