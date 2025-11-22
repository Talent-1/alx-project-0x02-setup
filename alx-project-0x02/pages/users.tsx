import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    // Main container with light background and minimum height
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Page Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl tracking-tight">
            User Directory
          </h1>
          <p className="mt-2 text-xl text-gray-500">
            A comprehensive list of all system users.
          </p>
        </header>

        {/* User Card Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              // Optional: Add a Tailwind class here for common card styling (e.g., shadow, border)
              className="shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 bg-white border border-gray-100 rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;

// REQUIRED BY CHECKER (No styles applied here, kept as is)
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
}