import styled from '@emotion/styled'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

type TextProps = ColorProps &
  TypographyProps & { gray?: boolean; size?: 'md' | 'xl' | 'sm' }

const FONT_SIZE = { md: '1rem', xl: '1.25rem', sm: '0.75rem' }

const Text = styled.span<TextProps>`
  color: ${({ gray }) => (gray ? 'var(--form-text)' : 'var(--main-text)')};
  font-size: ${({ size = 'md' }) => FONT_SIZE[size]};
  ${color};
  ${typography};
`

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
