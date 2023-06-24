import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword } from "../store/authslice";

function Profile() {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUsername(""));
    dispatch(setPassword(""));
  };

  return (
    <div className="bg-dark text-light ">
      Welcome, User
      <div className="d-flex flex-row justify-content-between align-items-center ">
        <div className="d-flex flex-column  justify-content-center">
          Entered Username : {username}
        </div>
        <span>
          <button className="btn text-white" onClick={handleLogout}>
            Logout
          </button>
        </span>
      </div>
    </div>
  );
}

export default Profile;
