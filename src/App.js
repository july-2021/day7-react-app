import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const clickHandler = (e) => {
    console.log(e);
    alert("Somethign Somethign!!", e);
  };

  return (
    <div>
      <h1>Hello World</h1>

      <input type="button" value="CLICK ME" onClick={clickHandler} />
    </div>
  );
}
