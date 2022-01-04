import "./App.css";
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import profilePic from "./Component/Profile/profilePhoto.jpg";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
// import { Link } from "react-comp-checkpoint";

function App() {
  return (
    <div className="App">
      <ProfilePhoto src={profilePic} />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
