import React from "react";
import { shallow, mount } from "enzyme";
import Albums from "./Albums";
import albumsMock from "./albumsMock.json";
import usersMock from "./usersMock.json";
import { BrowserRouter as Router, Route, MemoryRouter, Switch } from "react-router-dom";

import { findByTestAtrr } from "../utils";

const setUp = (props = {}) => {
  const component = shallow(
    <Albums data_albums={albumsMock} data_users={usersMock} isLoaded={true} />
  );
  return component;
};

describe("Have props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render the props", () => {
    const component = findByTestAtrr(wrapper, "loaded");
    expect(component.length).not.toBe(0);
  });
});

describe("Sample props passed to component", () => {
  let wrapper = mount(
    <Router>
      <Albums data_albums={albumsMock} data_users={usersMock} isLoaded={true} />
    </Router>
  );
  test("Check if a title appears correctly", () => {
    expect(wrapper.contains("quidem molestiae enim")).toEqual(true);
  });
});


// Click one of albums, the page should be redirected to the photo page
describe("Click the album, check the behaviour of the page", () => {
  const MockComp = () => <div className="target">Target</div>;
  const MockDenied = () => <div className="denied"> Denied</div>;

  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <div>
        <Albums data_albums={albumsMock[0]} data_users={usersMock[0]} isLoaded={true} />
        <Switch>
          <Route exact path="/" component={MockDenied} />
          <Route exact path="/photo/:id" component={MockComp} />
        </Switch>
      </div>
    </MemoryRouter>
  );
  test("Click the album, it should redirect to photo page", () => {
    wrapper.find(".Title").simulate("click");
    expect(wrapper.find(".target")).toHaveLength(1);
    //expect(wrapper.find('.Title').length).toBe(!0);
  });
});
