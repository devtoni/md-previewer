import React from 'react'
import { shallow } from 'enzyme'

import Title from './Title'

test('should render correctly', () => {
  const component = shallow(<Title title='Title' />)
  expect(component).toMatchSnapshot()
})
