import React from "react";
export default function ProfilePhoto(props) {
  return (
    <div>
      <img className="img-div" alt="profilepicture" src={props.src} />
    </div>
  );
}
