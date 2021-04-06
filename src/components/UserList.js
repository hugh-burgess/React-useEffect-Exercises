import { useEffect, useState } from "react";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(10);
  const [filter, setFilter] = useState("");

const button = document.querySelector("button")





  useEffect(() => {


    const baseUrl = "https://randomuser.me/api/?inc=email,gender,name,picture";
    let url = baseUrl;
    if (results) {
      url = `${baseUrl}&results=${results}`;
    } else {
      url = `${baseUrl}&results=10`;
    } 

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setUsers(data.results);
      });
  }, [results]);



  function handleChangeEvent(event) {
    setResults(event.target.value);
  }

  function renderPosts() {
    const userComponents = filteredType.map((user) => (
      <User
        key={user.email}
        gender={user.gender}
        photoUrl={user.picture.medium}
        title={user.name.title}
        first={user.name.first}
        last={user.name.last}
      />
    ));
    return userComponents;
  }

  let filteredType;
  if (filter === "female") {
      filteredType = users.filter((user) => user.gender === "female")
  } else if (filter === "male") {
      filteredType = users.filter((user) => user.gender === "male")
  } else {
    filteredType = users;

  }
  

function handleClickAll() {
    setFilter("")
}
function handleClickMale() {
    setFilter("male")
}
function handleClickFemale() {
    setFilter("female")
}

  return (
    <div>
      <p>Number of results: {users.length}</p>
      
      <div className="wrapper">
       <input
        onChange={handleChangeEvent}
        type="text"
        placeholder="filter a list"
      />
 
      
      <button onClick={handleClickAll} className="headerButton" type="button" >All</button>
      <button onClick={handleClickMale} className="headerButton" type="button" >Male</button>
      <button onClick={handleClickFemale} className="headerButton" type="button" >Female</button>
      </div>
     
      <div className="userSection">{renderPosts()}</div>
    </div>
  );
}

export default UserList;
