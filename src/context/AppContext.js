import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../BaseUrl";
import { useNavigate } from "react-router-dom";

//context creating
export const AppContext = createContext();

function AppContextProvider({children}) {

    const [darkMode, setDarkMode] = useState(false);

    const [loading, setLoading ] = useState(false);
    const [posts, setPosts] = useState ([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // data filling
    async function fetchBlogPosts(page=1, tag=null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const output = await result.json();
            setPage(output.page);
            setPosts(output.posts);
            setTotalPages(output.totalPages)


        }
        catch(error) {
            console.log("Error in fetching data");
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        navigate({search:`?page=${page}`});
        setPage(page);
    }

    // all transfered data
    const data = {
        darkMode,
        setDarkMode,
        loading,
        setLoading,
        posts, 
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    // context provideing
    return <AppContext.Provider value={data} >
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;