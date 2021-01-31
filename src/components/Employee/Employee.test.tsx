import React from "react";
import Employee from "./Employee";
import {RealReal} from "./RealReal";
import store from "../../store/store";
import {shallow} from "enzyme";
jest.mock("./Real");

describe('Testing Employee Component',() =>{
    test('Testing mocking',() =>{
        expect(RealReal()).toBe('This is mock not real');
    });

    test('Testing Redux Connection',() =>{
        let wrapper = shallow(<Employee store={store}/>).childAt(0).dive();
        let temp = wrapper.find('.employeeWrapper');
        expect(temp.length).toBe(1);
    })
})

