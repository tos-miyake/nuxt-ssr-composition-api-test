import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withInfo } from 'storybook-addon-vue-info'
import centered from '@storybook/addon-centered/vue'

import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// automatically import all files ending in *.stories.ts
const req = require.context('../stories', true, /.stories.tsx?$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
addDecorator(centered)
addDecorator(withInfo)
addDecorator(withKnobs)
