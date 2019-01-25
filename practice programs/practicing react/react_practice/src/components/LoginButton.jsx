import React from "react";
export default function LoginButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>Login</button>
    </div>
  );
}
