import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const BorderButton = (props: ButtonProps) => {
  return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  height: 2.5rem;
  padding: 0 10px;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 1rem 0.25rem;
  background-color: #ffffff;
  color: #07d39f;
  border-radius: 5px;
  border: 1px solid #07d39f;
  box-shadow: 1px 1px 5px lightgray;

  &:hover {
    box-shadow: 3px 3px 5px lightgray;
  }
`

export default BorderButton
