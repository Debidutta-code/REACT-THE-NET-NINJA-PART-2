import './App.css';


function App() {
  const place = " paradise";
  const yourMom = 23;
  const googleLink = "www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>Welcome To {place} and your age is {yourMom}</h1>
        <p>{ 10 }</p>
        <h2>{ "This is dev" }</h2>
        <p> {[1, 2, 3, 4, 5]} </p>
        <h1>Your random number after refresh is : {parseInt(Math.random() * 10)}</h1>
        <a href={googleLink}>Google.com</a>
      </div>
    </div>
  );
}

export default App;
