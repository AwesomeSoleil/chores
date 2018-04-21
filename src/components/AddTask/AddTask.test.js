import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTask from './AddTask';

configure({ adapter: new Adapter() });

describe(
    'AddTask', () => {
        it(
            'AddTask', () => {
                const wrapper = mount(<AddTask />);
                wrapper.setProps({ title: 'test' });
                expect(wrapper.find('input[type="text"]'));
            }
        );
    }
);