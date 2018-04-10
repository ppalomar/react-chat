import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import Sender from './index';

describe('<Sender />', () => {
    it('renders Sender properly', () => {
        const wrapper = shallow(<Sender userId={1} />);
        expect(wrapper.find('.Sender__container')).to.have.length(1);
        expect(wrapper.find('.Sender__container .input-message')).to.have.length(1);
        expect(wrapper.find('.Sender__container .send-button')).to.have.length(1);
    });
 });