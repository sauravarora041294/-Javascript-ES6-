import React from "react";

export default function LogoutButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
}
