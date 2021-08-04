import React from "react";
import HomePage from '../HomePage';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
    const tree = renderer.create(<HomePage/>);
    expect(tree).toMatchSnapshot();
});