# Practice code challenge The Blogg

## Setup the server

```
json-server --watch db.json
```

### Endpoints for the deliverables

GET / POST / PATCH / DELETE

```
http://localhost:3000/blogs/blogs
http://localhost:3000/blogs/blogs/:id
```

## Setup the react-app

Run

```
npm install
npm start
```

## Deliverables

- See list of blog posts on the page, using the `BlogPost` component. The
  `BlogPost` component should display the title, author, and the article.
- Click on the `Read` button and change the text of the button to `Unread` every time you click. The data does not need to persisted.
- Click on the `Show form` button and conditionally hide/unhide the form. Use the form to make a post request to the api and render the new blog post at the bottom of the page. The data needs to be persisted in the database.

### Optional deliverables

- Using the search box in the `Header` component, user should be able to search through the blog posts searching for the title `or` the author.
- When the `read` button is clicked make a `PATCH` request to the api `isRead: true` and using the return value change the text of the `Read` button to `Unread / Read`
