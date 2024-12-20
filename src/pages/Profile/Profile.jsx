import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import ROUTES from "../../Rountes";

import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const userID = localStorage.getItem("userID");

  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.LOGIN);
    }
  }, [token, navigate]);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/users?id=${userID}`);
      if (data.length > 0) {
        setUserData(data[0]);
      } else {
        setMessage("User not found.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setMessage("An error occurred while fetching user data.");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="profile_div">
        {message && <p>{message}</p>}
        {userData && (
          <div className="user">
            <h1>Hello {userData.firstname}</h1>
            <h2>Name: {userData.firstname} {userData.lastname}</h2>
            <h3>Email: {userData.email}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
