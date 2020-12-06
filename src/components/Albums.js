import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Albums(props) {
  if(props.data_albums.length=1 && props.data_users.length != 0  && props.isLoaded){
    return(
      <div
      data-test="loaded"
      style={{
        width: "30%",
        outline: "1px solid black",
        textAlign: "left",
        float: "left",
      }}
    >
      <h3>User: {props.data_users.name} </h3>
      <h4  className="Title">
        Title: <Link to={"/pics/" + props.data_albums.userId}>{props.data_albums.title}</Link>
      </h4>
      <p>UserId: {props.data_albums.userId}</p>
      <p>Id: {props.data_users.id}</p>
    </div>
    )
  }
  if (props.data_albums != null && props.data_users != null  && props.isLoaded) {
    return props.data_albums.map((albums) => {
      return props.data_users.map((users) => {
        if (users.id === albums.userId)
          return (
            <div
              data-test="loaded"
              style={{
                width: "30%",
                outline: "1px solid black",
                textAlign: "left",
                float: "left",
              }}
            >
              <h3>User: {users.name} </h3>
              <h4  className="Title">
                Title: <Link to={"/pics/" + albums.userId}>{albums.title}</Link>
              </h4>
              <p>UserId: {albums.userId}</p>
              <p>Id: {albums.id}</p>
            </div>
          );
      });
    });
  } else {
    return <p>Click Search To Begin</p>;
  }
}

export default Albums;
