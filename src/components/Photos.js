import React, { useState, useEffect } from "react";

function Photos(props) {
  const [data_photos, setPhotos] = useState([]);

  useEffect(() => {
      console.log("wowowowow");
      console.log(props.match.params.topic);
    fetch(
      "https://jsonplaceholder.typicode.com/albums/" +
        props.match.params.topic +
        "/photos"
    )
      .then((response) => {
        console.log("helooooooooooooooooooooooooooooooooo");
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setPhotos(myJson);

        console.log("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay");
      });
      console.log("byyyyyyyyyyyeeeeeeeeeeeeeeeeeeeeeeeee");
  });

  return (
    <div>
      {data_photos != null && data_photos.length !== 0 ? (
        data_photos.map((pictures) => {
          return (
            <div
              data-test="loaded_photo"
              style={{
                outline: "1px solid black",
                padding: "2px",
                width: "33%",
                float: "left",
              }}
            >
              <a href={pictures.url}>
                <img src={pictures.thumbnailUrl} alt="pic" />
              </a>
              <p>{pictures.title} </p>
            </div>
          );
        })
      ) : (
        <h2>Sorry, currently not working</h2>
      )}
    </div>
  );
}

export default Photos;
