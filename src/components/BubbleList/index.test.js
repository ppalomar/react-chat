import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import BubbleList from './index';
import Bubble from './components/Bubble';

describe('<BubbleList />', () => {
  it('renders Bubble List properly', () => {
    const wrapper = shallow(<BubbleList messages={[]} />);
    expect(wrapper.find('.Message-List')).to.have.length(1);
  });

  it('Bubble List renders all the Bubbles properly', () => {
    const msgs = [
      { text: 'hello', isMine: true, isThink: false },
      { text: 'how are you', isMine: false, isThink: false },
      { text: 'fine ', isMine: true, isThink: true },
      { text: 'and you?', isMine: false, isThink: false },
    ];
    const wrapper = shallow(<BubbleList messages={msgs} />);
    expect(wrapper.find(Bubble)).to.have.length(4);
  });
});
