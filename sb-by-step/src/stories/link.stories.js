import React from 'react';
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

storiesOf('Link', module)
  .add('First', () => (
    <button onClick={linkTo('Link', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Link', 'First')}>Go to "First"</button>
  ));