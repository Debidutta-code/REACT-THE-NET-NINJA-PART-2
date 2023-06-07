const BlogList = ( {blogs, title} ) => {
    // const blogs = props.p;
    // const title = props.title;
    
    return ( 
        <div className="blog-list">
            <h1> {title} </h1>
            {
            blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <h1> {blogs.title} </h1>
                    <p>By : {blogs.author} </p>
                </div>
            ))
        }
        </div>
    );
}
 
export default BlogList;