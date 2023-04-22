import React, { useState } from "react";
import axios from "axios";
import "./Gitaxios.css"

const Gitaxios = ()=>{

    let[username,setUsername] = useState("");
    let[userinfo,setUserinfo] = useState("");

    const searchUser=()=>{
        axios.get(`https://api.github.com/users/${username}`)
        .then((response)=> { console.log(response.data)
            setUserinfo(response.data)})
        .catch(()=>{console.log("Error")})
    }

    const clearData = ()=>{
         setUsername("");
        setUserinfo({});
       
    }


    return (
      <div className="form">
        <div className="user-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            } } value={username}
          ></input>
          <button onClick={searchUser}>Search</button>
        </div>
        <div className="user-details">
          {userinfo.name && (
            <div>
              <img src={userinfo.avatar_url} style={{ width: "240px" }} />
              <h1>{userinfo.name}</h1>
              <p>{userinfo.followers}</p>
              <p>{userinfo.following}</p>
              <p>{userinfo.public_repos}</p>
              <a href={userinfo.html_url} target="_blank">
                Link to Profile
              </a>
            </div>
          )}
        </div>
        <button onClick={clearData}>Clear</button>
      </div>
    );
}
export default Gitaxios;