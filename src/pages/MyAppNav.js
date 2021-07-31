import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";

export function MyAppNav() {
  return (
    <div className="bg-dark mb-1 p-3">
      <Link
        to="/register"
        className="btn btn-sm btn-link text-dark btn-light w-50 "
      >
        Register
      </Link>
      <Link to="/list" className="btn btn-sm text-dark btn-link btn-light w-50">
        User List
      </Link>
    </div>
  );
}
