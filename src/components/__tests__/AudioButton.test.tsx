import React from 'react';
import { shallow } from 'enzyme';
import { AudioButton } from '..';

describe('<AudioButton />', () => {
    const mockCallBack = jest.fn();
    const props = { id: 'music', audioFile: 'audio-file-test.mp3', isPlaying: true, toggleMusic: mockCallBack };
    const wrapper = shallow(<AudioButton {...props} />);
    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Test click event', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper).toMatchSnapshot();
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('Test audiofile extension', () => {
        let parameter = props.audioFile;
        let extension = '.mp3';
        expect(parameter.endsWith(extension)).toBe(true);
    });
    it('Test id of button ', () => {
        let parameter = props.id;
        let extension = ['music', 'audio'];
        expect(parameter === extension[0] || parameter === extension[1]).toBe(true);
    });
});
