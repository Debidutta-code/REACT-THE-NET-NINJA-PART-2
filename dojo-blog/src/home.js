import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blog, setNewBlogs] = useState([
        {title : 'My new website', body : 'lorem Ipsum...', author : 'mario', id : 1},
        {title : 'Welcome party!!', body : 'lorem Ipsum...', author : 'yoshi', id : 2},
        {title : 'Web dev top tips', body : 'lorem Ipsum...', author : 'mario', id : 3}
    ]);
    
    return (

        <div className="home">
            <BlogList blogs = {blog} title = "All Blogs!"/>
        </div>
    );
}
 
export default Home;