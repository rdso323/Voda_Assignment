import React from 'react'
import {shallow,mount} from 'enzyme'
import Albums from './Albums';
import albumsMock from './albumsMock.json'
import usersMock from './usersMock.json'
import { BrowserRouter as Router} from "react-router-dom";



import {findByTestAtrr} from '../utils';

const setUp = (props={}) => {
    const component = shallow(<Albums data_albums={albumsMock}  data_users={usersMock}/>);
    return component;
}

describe("Have props", () => {
    let wrapper
    beforeEach(() => {
        wrapper=setUp();
    });

    it("Should render the props",() =>{
        const component = findByTestAtrr(wrapper,"loaded");
        expect(component.length).not.toBe(0) 
    })
})

describe("Sample props passed to component", () => {
    let wrapper = mount(
      <Router>
        <Albums data_albums={albumsMock}  data_users={usersMock} />
      </Router>
    );
    test("Check if a title appears correctly", () => {
      expect(wrapper.contains("quidem molestiae enim")).toEqual(true);
    });
  });