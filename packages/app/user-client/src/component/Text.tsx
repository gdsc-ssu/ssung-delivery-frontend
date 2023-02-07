import styled from '@emotion/styled'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

type TextProps = ColorProps & TypographyProps

const Text = styled.span<TextProps>(color, typography)

const Title = styled(Text)``
const SubTitle = styled(Text)``

export { Text, Title, SubTitle }
