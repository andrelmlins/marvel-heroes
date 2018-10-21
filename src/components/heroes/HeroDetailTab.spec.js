import React from 'react';
import { shallow } from 'enzyme';

import HeroDetailTab from './HeroDetailTab';

describe('HeroDetailTab Component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<HeroDetailTab />);
    });

    it('Should render the component', () => {
        expect(component).toHaveLength(1);
    });

});