import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Albums(props) {
  if (props.data_albums != null && props.data_users != null && props.isLoaded) {
    return props.data_albums.map((albums) => {
      return props.data_users.map((users) => {
        if (users.id === albums.userId)
          return (
            <div
              key={albums.id}
              data-test="loaded"
              style={{
                width: "30%",
                outline: "1px solid black",
                textAlign: "left",
                float: "left",
              }}
            >
              <h3>User: {users.name} </h3>
              <h4>
                Title:{" "}
                <Link className="albumTitle" to={"/pics/" + albums.id}>
                  {albums.title}
                </Link>
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
