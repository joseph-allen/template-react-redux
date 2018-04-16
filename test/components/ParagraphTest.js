import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from 'components/Paragraph/Paragraph.js';

describe('<Paragraph />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Paragraph />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "paragraph-component"', function () {
      expect(component.hasClass('paragraph-component')).to.equal(true);
    });
  });
});
