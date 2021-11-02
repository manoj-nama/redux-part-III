import React from "react";

export default function User(props) {
  console.log(props);
  const { name, email } = props.user;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}