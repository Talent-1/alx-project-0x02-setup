import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city}
      </p>
      <hr />
    </div>
  );
};

export default UserCard;
