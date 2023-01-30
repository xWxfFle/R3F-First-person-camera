import { useState } from "react";
import { Input } from "./Input";

export const UserList = () => {
  const [users, setUsers] = useState([
    { name: "andrey", age: 23 },
    { name: "sahsa", age: 22 },
    { name: "dima", age: 63 },
  ]);
  const addUser = (addname: string, addage: number) => {
    setUsers((prev) => [...prev, { name: addname, age: addage }]);
    console.log(users);
  };

  return (
    <div className="bg-slate-700">
      <Input addNewUser={addUser} />
      {users.map((element) => {
        return (
          <div key={element.name} className="bg-slate-100 m-4 p-1 text-lg">
            <h1>Name: {element.name}</h1>
            <h1>Age: {element.age}</h1>
          </div>
        );
      })}
    </div>
  );
};
