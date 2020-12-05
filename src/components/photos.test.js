import React from "react";
import { mount } from "enzyme";
import Photos from "./Photos";
import { BrowserRouter as Router } from "react-router-dom";

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
