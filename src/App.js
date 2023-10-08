
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from "./pages/BlogPage";
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const {fetchBlogPosts,darkMode} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  // useEffect(()=>{
  //   fetchBlogPosts();
  // },[])

  

  useEffect(() => {
    const page = searchParams.get("page") ?? 1 ;

    if(location.pathname.includes("tags")) {
      // iska matlab he tag wala page show karna he
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search])

  return (
    <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
      <Route path='/tags/:tag' element={<TagPage/>}></Route>
      <Route path='/categories/:category' element={<CategoryPage/>}></Route>
    </Routes>
  )
}

export default App;
