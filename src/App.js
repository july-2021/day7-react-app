import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark mb-1 p-3">
        <Link
          to="/register"
          className="btn btn-sm btn-link text-dark btn-light w-50 "
        >
          Register
        </Link>
        <Link
          to="/list"
          className="btn btn-sm text-dark btn-link btn-light w-50"
        >
          User List
        </Link>
      </div>

      <Route exact path="/register" component={MyRegisterComponent} />
      <Route exact path="/list" component={MyUserListComponent} />
      <Route exact path="/" component={MyRegisterComponent} />
    </BrowserRouter>
  );
}

function MyRegisterComponent() {
  const history = useHistory();
  let [userList, setUserList] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const usernameChangeHandler = (e) => setUsername(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const mobileChangeHandler = (e) => setMobile(e.target.value);

  const addNewUser = async () => {
    const newuser = {
      id: userList.length + 1,
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };

    const newUserList = [newuser, ...userList];
    setUserList(newUserList);

    // MAKE THE API CALL
    let url = "http://localhost:4000/user-create";
    await axios.post(url, { ...newuser, id: null });

    history.push("/list");

    // After Success
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div>
      <h6 className="bg-dark text-light p-2 ">User Registeation </h6>

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
    </div>
  );
}

function MyUserListComponent() {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    readAllUser();
  }, []);

  const readAllUser = async () => {
    // GET API
    let url = "http://localhost:4000/user-list";
    const response = await axios.get(url);
    setUserList(response.data.reverse());
  };

  return (
    <div>
      <h6 className="bg-dark text-light p-2 ">User List </h6>

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
                <td>{item.username}</td>
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
