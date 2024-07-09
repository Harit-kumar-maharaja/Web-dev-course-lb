import { createContext, useState } from "react";
import {baseurl} from "../Baseurl"

export const AppContext1 = createContext()

export function AppContextProvider({children}){
    const [loading, setloading] = useState(false)
    const [posts , setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpages, settotalpages] = useState(null);

    //data filling
    async function fetchblogposts(page=1){
        setloading(true);

        let url = `${baseurl}?page=${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setpage(data.page)
            setposts(data.posts)
            settotalpages(data.totalPages);
        } catch (err) {
            console.log("error in fetching data");
            setpage(1);
            setposts([]);
            settotalpages(null);
        }
        setloading(false);
    }

    function handlepagechange(page){
        setpage(page);
        fetchblogposts(page);
    }

    const value= {
        posts,setposts,
        loading, setloading ,
        page , setpage,
        totalpages , settotalpages,
        fetchblogposts , handlepagechange,
    };

    return <AppContext1.Provider value={value}>
        {children}
    </AppContext1.Provider>

}