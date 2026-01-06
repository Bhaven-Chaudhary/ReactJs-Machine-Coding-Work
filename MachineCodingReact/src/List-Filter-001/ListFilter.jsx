const users = [
  { id: 1, name: "Alice", age: 25, role: "admin" },
  { id: 2, name: "Bob", age: 19, role: "user" },
  { id: 3, name: "Charlie", age: 32, role: "manager" },
  { id: 4, name: "David", age: 17, role: "user" },
  { id: 5, name: "Eva", age: 28, role: "admin" },
];

import { useEffect, useState } from "react";
import styles from "./ListFilter.module.css";
export default function ListFilter() {
  const [searchParam, setSearchParam] = useState("");
  const [filteredList, setFilteredList] = useState(users);
  const [role, setRole] = useState("all");
  const [age, setAge] = useState(false);

  //Handel Filter by name, role and age
  useEffect(() => {
    let tempUsers;

    //filer by name
    tempUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchParam.toLowerCase())
    );

    // filter by role
    if (role !== "all") {
      tempUsers = tempUsers.filter((user) => user.role === role);
    }

    //filter by age above 18
    if (age) {
      tempUsers = tempUsers.filter((user) => user.age >= 18);
    }

    setFilteredList(tempUsers);
  }, [searchParam, role, age]);

  return (
    <>
      <div className={styles.controls}>
        <label htmlFor="search">Search by Name: </label>
        <input
          id="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Filter By Name"
        ></input>

        <label htmlFor="role">Select Role: </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="manager">Manager</option>
        </select>

        <label>Show only age 18 and above</label>
        <input
          type="checkbox"
          checked={age}
          onChange={(e) => setAge(e.target.checked)}
        />
      </div>

      <div className={styles.listContainer}>
        {filteredList.length > 0 && (
          <>
            <div>Showing {filteredList.length} users</div>
            <ul>
              {filteredList.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </>
        )}
        {filteredList.length === 0 && <div>No users found</div>}
      </div>
    </>
  );
}
