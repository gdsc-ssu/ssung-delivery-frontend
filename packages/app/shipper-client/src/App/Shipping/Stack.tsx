import styled from '@emotion/styled'

interface StackProps {
  Top: () => JSX.Element
  Ground: () => JSX.Element
}

const Stack = ({ Top, Ground }: StackProps) => {
  return (
    <Container>
      <StackTop>
        <Top />
      </StackTop>
      <StackGround>
        <Ground />
      </StackGround>
    </Container>
  )
}

export default Stack

const Container = styled.div`
  position: relative;
`

const StackTop = styled.div`
  position: absolute;
  width: 100%;
  height: 140px;
`
const StackGround = styled.div`
  /* position: absolute; */
  z-index: -2;
  width: 100%;
  height: 140px;
`
