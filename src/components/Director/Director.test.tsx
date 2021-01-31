import store from "../../store/store";
import React from 'react';
import {shallow} from 'enzyme';
import Director from "./Director";

describe('Testing Director component',function(){
    test('Testing Redux connection',function(){
        const wrapper = shallow(<Director store={store}/>).childAt(0).dive();
        console.log(wrapper.debug());
        let temp = wrapper.find(".directorWrapper");
        expect(temp.length).toBe(1);
    });
})