import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";

describe('bla',function(){
    test('something',function(){
        let component = shallow(<App/>);
        console.log(component.debug());
        expect(1).toBe(1);
    })
})

