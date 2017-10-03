import React from 'react'
import { shallow } from 'enzyme'

import TextContent from './TextContent'

test('should render correctly', () => {
  const component = shallow(<TextContent />)
  expect(component).toMatchSnapshot()
})
