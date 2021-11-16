import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import CreateNewBlog from './containers/blogs/CreateNewBlog'
import ViewBlog from './containers/blogs/ViewBlog';
import ListBlogs from './containers/blogs/ListBlogs'
import SignUpForm from './containers/users/signUpForm';
import SignInForm from './containers/users/signInForm'
function App() {
  return <>

    <BrowserRouter>
      <Link to='/blogs/list'> View all Blogs </Link>
         |
      <Link to='/signup'> signUp </Link>
      <Link to='/signin'> signIn </Link>
      <Switch>
        <Route path='/blogs/new' exact>
          <CreateNewBlog />
        </Route>


        <Route path='/blog/:id'>
          <ViewBlog />
        </Route>

        <Route path='/blogs/list'>
          <ListBlogs />
        </Route>


        <Route path='/signup'>
          <SignUpForm />
        </Route>

        <Route path='/signin'>
          <SignInForm />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
}

export default App;
