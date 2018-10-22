import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

describe('Page Component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Page />);
    });

    it('Should render the component', () => {
        expect(component).toHaveLength(1);
    });

});