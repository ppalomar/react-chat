import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
    it('renders Header properly', () => {
        const wrapper = shallow(<Header nick='Pablo Palomar' />);
        expect(wrapper.find('.Header__container')).to.have.length(1);
        expect(wrapper.find('.Header__container').text()).to.equal('Conversation with Pablo Palomar');
    });
 });