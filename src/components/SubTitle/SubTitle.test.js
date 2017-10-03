import React from 'react'
import { shallow } from 'enzyme'

import SubTitle from './SubTitle'

test('should render correctly', () => {
  const component = shallow(<SubTitle title='Title' />)
  expect(component).toMatchSnapshot()
})
