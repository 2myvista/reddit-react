import React from "react";
import { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";

describe('Drodown', ()=> {
	test('should render', () => {
		const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>)
		expect(wrapper).toBeDefined();
		console.log(wrapper.find('div.container').debug());
		
		expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
	  
	})
	
	test('should render (snapshort)', ()=> {
		const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>)

		expect(wrapper).toMatchSnapshot()
	})
})