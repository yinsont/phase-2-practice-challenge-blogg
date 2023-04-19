import {React, useState} from "react";

function BlogPost({ post }) {

  const [isRead, setIsRead] = useState(post.isRead)

  const readStatus = () => {
    setIsRead(!isRead)
    fetch(`http://localhost:3000/blogs/${post.id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        isRead: !isRead
      })
    })
    // setIsRead(!isRead)
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{post.title}</h3>
          <button onClick = {readStatus} 
          className="read-button">{isRead ? 'Read' : 'Unread'}</button>
          {/* Conditionally change the button text on click from Read to Unread and vice-versa */}
        </div>
        <p>{post.author}</p>
      </div>

      <p>
        {post.article}
      </p>
    </div>
  );
}

export default BlogPost;
