import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  const [list, setList] = useState([]);

  // React.
  // useEffect();
  // useEffect(() => {}, []);
  useEffect(() => {
    console.log("I am special. like your constructor.");
    makeAjaxBackendApiCall();
  }, []);

  const makeAjaxBackendApiCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios.get(url);

    // console.log(result.data);
    setList(result.data);
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-4">Lets connect with backend</h1>

      {list.map((item) => {
        return (
          <div className="alert alert-primary text-capitalize">
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
