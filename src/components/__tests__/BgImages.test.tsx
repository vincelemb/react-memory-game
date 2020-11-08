import React from 'react';
import { shallow } from 'enzyme';
import { BgImage } from '..';

describe('<BgImage />', () => {
    const props = { imageUrl: 'hero.jpg' };
    const wrapper = shallow(<BgImage {...props} />);
    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Test id of button ', () => {
        let parameter = props.imageUrl;
        let extension = ['.jpg', '.jpeg'];
        expect(parameter.endsWith(extension[0]) || parameter.endsWith(extension[1])).toBe(true);
    });
});
