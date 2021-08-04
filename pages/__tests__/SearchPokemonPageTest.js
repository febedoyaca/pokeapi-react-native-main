import React from "react";
import SearchPokemonPage from '../SearchPokemonPage';
import * as renderer from 'react-test-renderer';

it ('renders correctly', () => {
    const tree = renderer.create(<SearchPokemonPage/>);
    expect(tree).toMatchSnapshot();
});