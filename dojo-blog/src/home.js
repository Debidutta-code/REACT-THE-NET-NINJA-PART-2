const Home = () => {
    let name = "mario";

    const handleClick = () => {
        name = "dev";
    }
    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;