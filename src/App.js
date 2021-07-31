import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";

import { MyAppNav } from "./pages/MyAppNav";
import { MyRegisterComponent } from "./pages/MyRegisterComponent";
import { MyUserListComponent } from "./pages/MyUserListComponent";

export default function App() {
  return (
    <BrowserRouter>
      <MyAppNav />

      <Route exact path="/register" component={MyRegisterComponent} />
      <Route exact path="/list" component={MyUserListComponent} />
      <Route exact path="/" component={MyRegisterComponent} />
    </BrowserRouter>
  );
}
