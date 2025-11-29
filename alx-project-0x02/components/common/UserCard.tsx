import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({name, username, email, phone, website, address }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">

      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm">📧 {email}</p>
      <p className="text-sm">📞 {phone}</p>
      <p>
        {address.street}, {address.suite}<br />
        {address.city}, {address.zipcode}
      </p>
      <a
        href={`https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-sm"
      >
        🌐 {website}
      </a>
    </div>
  );
};

export default UserCard;
