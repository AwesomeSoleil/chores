import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import CompletedTaskList from '../CompletedTaskList/CompletedTaskList';

configure({ adapter: new Adapter() });

describe(
    'App container', () => {
        it(
            'CompletedTaskList has children nodes', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find(CompletedTaskList).children().exists());
            }
        );
    }
);