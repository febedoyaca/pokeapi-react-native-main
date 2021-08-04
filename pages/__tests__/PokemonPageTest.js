import React from "react";
import PokemonPage from '../PokemonPage';
import * as renderer  from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme'


it ('renders correctly', () => {
    const tree = renderer.create(<PokemonPage/>);
    expect(tree).toMatchSnapshot();
});

