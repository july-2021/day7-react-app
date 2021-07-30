import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  let [userList, setUserList] = useState([
    { id: 1, name: "rahul", email: "rahul@gmail.com", mobile: "212121" },
    { id: 2, name: "sachin", email: "sachin@gmail.com", mobile: "212121" },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const usernameChangeHandler = (e) => setUsername(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const mobileChangeHandler = (e) => setMobile(e.target.value);

  const addNewUser = () => {
    const newuser = {
      id: userList.length + 1,
      name: username,
      password: password,
      email: "sample@gmail.com",
      mobile: "1212",
    };

    const newUserList = [newuser, ...userList];
    setUserList(newUserList);

    // After Success
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-3 ">User Registeation </h1>

      {/** FORM COMPONENT */}
      <form className="m-2">
        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter username"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Passwword"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>

        <div>
          <input
            type="email"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>

        <div>
          <input
            type="mobile"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={mobileChangeHandler}
          />
        </div>

        <div>
          <input
            type="button"
            value="Register"
            onClick={addNewUser}
            className="btn btn-lg btn-secondary w-100"
          />
        </div>
      </form>

      {/** List BOX HERE */}
      <table className="table table-dark table-striped m-2">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">EMAIL</th>
            <th scope="col">MOBILE</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>*****</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
