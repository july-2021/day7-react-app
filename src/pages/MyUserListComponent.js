import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";

export function MyUserListComponent() {
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
