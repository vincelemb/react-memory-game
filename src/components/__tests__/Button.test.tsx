import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '..';

describe('Button', () => {
    const mockFunction = jest.fn();
    const btn = shallow(<Button theme="light" onClick={mockFunction} />);
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });
    it('should render correctly', () => {
        expect(btn).toMatchSnapshot();
    });
    it('should call mock function when button is clicked', () => {
        btn.simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    });
});
