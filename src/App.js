import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
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

  const makeAjaxBackendApiCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios.get(url);

    // console.log(result.data);
    const newlist = [...result.data, ...list];
    setList(newlist);
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-4">Lets connect with backend</h1>
      <input
        type="button"
        className="btn btn-primary w-100 mb-1"
        value="MAKE AJAX/BACKEND CALL"
        onClick={makeAjaxBackendApiCall}
      />

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
