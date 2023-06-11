import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setNewBlogs] = useState([
        {title : 'My new website', body : 'lorem Ipsum...', author : 'mario', id : 1},
        {title : 'Welcome party!!', body : 'lorem Ipsum...', author : 'yoshi', id : 2},
        {title : 'Web dev top tips', body : 'lorem Ipsum...', author : 'mario', id : 3}
    ]);
    
    return (

        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs!"/>
            <BlogList blogs = {blogs.filter((blog) => {
                if(blog.author === "mario"){
                    return true;
                }
                else{
                    return false;
                }
            })} title = "Mario Blogs"/>
        </div>
    );
}
 
export default Home;