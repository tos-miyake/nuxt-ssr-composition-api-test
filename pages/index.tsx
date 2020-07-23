import { defineComponent, reactive } from '@vue/composition-api'
import Hoge from '@/components/hoge.tsx'

export default defineComponent({
  setup: () => {
    return () => (
      <div>
        <Hoge />
      </div>
    )
  },
})
