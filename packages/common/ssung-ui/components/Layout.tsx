import styled from '@emotion/styled'
import {
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from 'styled-system'

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  overflow-x: hidden;
  overflow: scroll;
  height: 100vh;
`

const ComponentContainer = styled.div`
  margin: 0 1rem;
`

const Spacer = styled.div(({ height }: { height?: string }) => [
  `height: ${height}; width: 100%;`,
])

type FlexProps = ColorProps & TypographyProps & FlexboxProps & { gap?: string }
const Flex = styled.div<FlexProps>`
  ${flexbox};
  ${color};
  ${typography};
  gap: ${({ gap }) => gap || '0'};
  display: flex;
  cursor: pointer;
`

export { BodyContainer, ComponentContainer, Spacer, Flex }
