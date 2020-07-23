import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'Hoge',
  setup: (props) => {
    const state = reactive({
      text: 'changeme',
    })

    const handleClick = () => {
      alert('hoge')
    }

    return () => (
      <div>
        <input v-model={state.text} />
        <div> HogeComponent </div>
        <h2 onClick={handleClick}> {state.text} </h2>
      </div>
    )
  },
})
