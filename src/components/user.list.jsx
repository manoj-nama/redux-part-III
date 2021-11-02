import React from "react";
import { connect } from "react-redux";
import { FetchUsers } from "../actions"

import User from "./user";

function UserList(props) {
  console.log("userList", props);
  const { list, loading } = props.users;
  return (
    <div>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          list.map(user => (
            <User user={user} key={user.email} />
          ))
        )
      }
      <button type="button" onClick={props.getAllUsers}>Fetch Users from API!!</button>
    </div>
  )
}

const mapStateToProps = function (state) {
  return state;
}

// const mapDispatchToProps = function (dispatch) {
//   return {
//     incr: () => dispatch(increment())
//   }
// }

const mapDispatchToProps = {
  getAllUsers: FetchUsers
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListContainer;


