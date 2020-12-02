import React, { Component } from 'react'
import {shallow} from 'enzyme'
import Photos from './photos';

import {findByTestAtrr} from '../utils';

const setUp = (props={}) => {
    const component = shallow(<Photos {...props }/>);
    return component;
}

describe("Have props", () => {
    let wrapper
    beforeEach(() => {
        wrapper=setUp();
    });

    it("Should render the props",() =>{
        const component = findByTestAtrr(wrapper,"loaded_photo");
        expect(component.length).toBe(1); 
    })
})