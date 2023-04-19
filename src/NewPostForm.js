import {React, useState} from "react";

function NewPostForm({addNewPost}) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [article, setArticle] = useState('')

  const handleSubmmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        author: author,
        title: title,
        article: article
      })
    })
    .then(res => res.json())
    .then(data => addNewPost(data))
  }

  return (
    <div className="form">
      <form onSubmit = {handleSubmmit}>
        <input value = {title} onChange = {(e) => {setTitle(e.target.value)}} type="text" placeholder="Title"></input>
        <input value = {author} onChange = {(e) => {setAuthor(e.target.value)}} type="text" placeholder="Author"></input>
        <textarea value = {article} onChange = {(e) => {setArticle(e.target.value)}} ows="10" cols="60" placeholder="Write your post"></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
