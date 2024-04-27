import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersDetails from "./companents/UsersDetails";
import UsersMoreDetails from "./companents/UsersMoreDetails";
import TaskNav from "./companents/TaskNav";
import Edit from "./companents/Edit";
import UserCreat from "./companents/UserCreat";
import "./styles/TaskStyle.css";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div>
          <TaskNav />
        </div>
        <Routes>
          <Route path="/" element={<UsersDetails />} />
          <Route
            path="/usersdetails"
            element={<UsersMoreDetails setId={setId} />}
          />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/userscreat" element={<UserCreat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
