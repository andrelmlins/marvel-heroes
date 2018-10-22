import React from 'react';
import { shallow } from 'enzyme';

import HeroesList from './HeroesList';

describe('HeroesList Component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<HeroesList />);
    });

    it('Should render the component', () => {
        expect(component).toHaveLength(1);
    });

});