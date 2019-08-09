import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
// import 'jest-dom/extend-expect';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "At Bat Has Ended', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getByLabelText(/At Bat Has Ended/i));
  });