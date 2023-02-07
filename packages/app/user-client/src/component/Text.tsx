import styled from '@emotion/styled'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

type TextProps = ColorProps & TypographyProps

const Text = styled.span<TextProps>(color, typography)

const Title = styled(Text)`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
`
const SubTitle = styled(Text)`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.25rem;
`

export { Text, Title, SubTitle }
