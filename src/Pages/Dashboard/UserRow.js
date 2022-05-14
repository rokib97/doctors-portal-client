import React from "react";

const UserRow = ({ user }) => {
  const { email } = user;
  return (
    <tr>
      <th>2</th>
      <td>{email}</td>
      <td>Desktop Support Technician</td>
      <td>Purple</td>
    </tr>
  );
};

export default UserRow;
