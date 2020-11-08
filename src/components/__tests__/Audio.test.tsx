import React from 'react';
import { shallow } from 'enzyme';
import { Audio } from '..'

describe('<Audio />', () => {
    const props = { audioFile: 'audio-file-test.mp3', id: 'audio-test' }
    it('should render', () => {
        const wrapper = shallow(<Audio {...props} />);

        expect(wrapper).toMatchSnapshot();
    })
})