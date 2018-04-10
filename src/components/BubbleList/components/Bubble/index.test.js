import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';
import Bubble from './index';

describe('<Bubble />', () => {
    it('renders Bubble properly form other user', () => {
        const msg = { text: 'hello', isMine: false, isThink: false };
        const wrapper = shallow(<Bubble msg={msg} />);
        expect(wrapper.find('.Bubble__container')).to.have.length(1);
    });

    it('renders properly the text', () => {
        const msg = { text: 'hello', isMine: false, isThink: false };
        const wrapper = shallow(<Bubble msg={msg} />);
        expect(wrapper.find('.Bubble__container').text()).to.equal('hello');
    });

    it('renders Bubble properly when is mine', () => {
        const msg = { text: 'hello', isMine: true, isThink: false };
        const wrapper = shallow(<Bubble msg={msg} />);
        expect(wrapper.find('.Bubble__container.mine')).to.have.length(1);
    });

    it('renders Bubble properly when is /think', () => {
        const msg = { text: 'hello', isMine: false, isThink: true };
        const wrapper = shallow(<Bubble msg={msg} />);
        expect(wrapper.find('.Bubble__container.think')).to.have.length(1);
    });

    it('renders Bubble properly when is mine and /think', () => {
        const msg = { text: 'hello', isMine: true, isThink: true };
        const wrapper = shallow(<Bubble msg={msg} />);
        expect(wrapper.find('.Bubble__container.mine.think')).to.have.length(1);
    });
 });
