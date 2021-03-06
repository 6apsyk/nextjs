import Link from "next/link";
import React, { useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer>
      <h1>Список Пользователей</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {/* динамическая марш-ия */}
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
