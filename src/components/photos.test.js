import React from "react";
import { mount } from "enzyme";
import Photos from "./Photos";
import { BrowserRouter as Router } from "react-router-dom";
import photosMock from "./photosMock.json";
import PhotosDisplay from "./PhotosDisplay";

describe("Sample props passed to component", () => {
  let wrapper = mount(
    <Router>
      <Photos match={{ params: { topic: 1 } }} />
    </Router>
  );
  test("Check if props passed and used successfully by the function", () => {
    expect(wrapper.length).toBe(1);
  });
});

describe("Sample props passed to component", () => {
  let wrapper = mount(
    <Router>
      <PhotosDisplay data_photos={photosMock} />
    </Router>
  );

  test("Titles should be rendered correctly", () => {
    expect(
      wrapper.contains("accusamus beatae ad facilis cum similique qui sunt")
    ).toEqual(true);
  });
});

describe("Sample props passed to component", () => {
  let wrapper = mount(
    <Router>
      <PhotosDisplay data_photos={photosMock} />
    </Router>
  );

  test("Photos should be clickable and should redirect you", () => {
    wrapper.find(".photoLink").first().simulate("click", { button: 0 });
    expect(wrapper.find("photoLink")).toHaveLength(0);
  });
});
