import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { withDesign } from 'storybook-addon-designs'
import { Button } from '@storybook/react/demo'
/* eslint-enable import/no-extraneous-dependencies */

export default {
  title: 'Storybook Designs',
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello Button</Button>

myStory.story = {
  name: 'Button',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=1%3A2',
    },
  },
}
