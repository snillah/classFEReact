import React, { useState } from "react";
import UserInfo from "./UserInfo";

const usersData = [
  { id: 1, name: "Saravanan", role: "FullStack Developer" },
  { id: 2, name: "Daniel", role: "FullStack Developer" },
  { id: 3, name: "soni", role: "Front Developer" },
];
export default function UserData() {
  const [userData, setUserData] = useState(usersData);
  console.log(userData);
  return (
    <>
      <h2>User Details Mentioned</h2>
      <div>
        {userData.map((obj) => {
          return (
          <UserInfo key={obj.id} user={obj} />
          )
        })}
      </div>
    </>
  );
}
