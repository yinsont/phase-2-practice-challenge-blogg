import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  function addNewPost(newPost) {
    setPosts([...posts, newPost])
  }

  function handleSearch (e) {
    console.log(e)
    setSearch(e)
  }

  const filterPosts = posts.filter((post) => {
    return post.author.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <Header search = {search} handleSearch = {handleSearch}></Header>

      <button  onClick = {() => setShowForm(!showForm)} className="show-form">{showForm ? 'Hide Form' : 'Show Form'}</button>
      {/* Condionally hide/unhide form on button click */}
      {showForm ? <NewPostForm addNewPost = {addNewPost}></NewPostForm> : null}

      <BlogPostContainer posts = {filterPosts}></BlogPostContainer>
    </div>
  );
}

export default App;
