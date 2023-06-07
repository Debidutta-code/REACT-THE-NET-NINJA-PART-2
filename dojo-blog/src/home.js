import { useState } from 'react';

const Home = () => {
    let prevName = "sinny"
    let prevAge = 19;
    const [name, setNewName] = useState(prevName);
    const [age, setAge] = useState(prevAge);

    const handleClick = () => {
        setNewName('dev');
        setAge(20);
    }
    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{ name }</p>
            <p>{ age }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;