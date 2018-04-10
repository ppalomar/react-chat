import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders main layout properly', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('header')).to.have.length(0);
      expect(wrapper.find('main')).to.have.length(1);
      expect(wrapper.find('footer')).to.have.length(1);
  });
});

