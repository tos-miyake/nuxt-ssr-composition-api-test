import { defineComponent, reactive } from '@vue/composition-api'
import styled from 'vue-styled-components'

const StyledDiv = styled.div`
  background-color: gray;
  color: red;
`

export default defineComponent({
  name: 'SampleComponent',
  setup: (props) => {
    const state = reactive({
      text: 'change me',
    })

    const handleClick = () => {
      alert('sample alert')
    }

    return () => (
      <StyledDiv>
        <input v-model={state.text} />
        <div> Sample Component </div>
        <h2 onClick={handleClick}> {state.text} </h2>
      </StyledDiv>
    )
  },
})
