import { storiesOf } from '@storybook/vue'
import Hoge from '../components/hoge'

storiesOf('hoge', module).add('sample', () => ({
  components: { Hoge },
  template: '<Hoge/>',
}))
