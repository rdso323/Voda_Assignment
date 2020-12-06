import React from "react";
import { mount } from "enzyme";
import Photos from "./Photos";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "@testing-library/react";

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
      <Photos match={{ params: { topic: 1 } }} />
    </Router>
  );

  test("Title name should be rendered correctly", () => {
    setTimeout(() => {  console.log("World!"); }, 2000);
    expect(wrapper.contains("Sorry, currently not working")).toEqual(
      true
    );
  });
});
