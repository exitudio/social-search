import React from 'react'
import {shallow} from 'enzyme'
import {Display} from './Display'

describe('Display component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <Display></Display>
        )
        expect(wrapper).toMatchSnapshot()
        console.log(wrapper.find('Content').dive().find('div').at(0).html())
    })

})