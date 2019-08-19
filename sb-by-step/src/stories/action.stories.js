import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


storiesOf('ActionDemo', module).add('default view', () => (
  <button onClick={action('button-click')}>Hello World!</button>
));