import {DemoButton} from "./DemoButton";
import {shallow, ShallowWrapper} from "enzyme";

describe('Testing DemoButton Component',function(){
    let component: ShallowWrapper;
    let demoFunction:any;
    beforeEach(function(){
        demoFunction = jest.fn();
        component = shallow(<DemoButton demoFunction={demoFunction}/>);
    });

    test('DemoButton exists',function(){
        let wrapper = component.find(`[data-testid='demoButton']`);
        expect(wrapper.length).toBe(1);
    });

    test('DemoButton Works',function(){
        component.simulate('click');
        let callback = demoFunction.mock.calls.length;
        expect(callback).toBe(1);
    })
})