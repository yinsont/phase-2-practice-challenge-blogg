import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <button className="show-form">Show Form</button>
      {/* Condionally hide/unhide form on button click */}
      <NewPostForm></NewPostForm>

      <BlogPostContainer></BlogPostContainer>
    </div>
  );
}

export default App;
