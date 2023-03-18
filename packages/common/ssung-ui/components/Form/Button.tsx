import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type ButtonType = 'primary' | 'gray'

type ButtonPropsType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren & {
    btnType?: ButtonType
  }

const Button = (props: ButtonPropsType) => {
  const { btnType, children, ...rest } = props

  return (
    <StyledButton btnType={btnType} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button(
  ({ btnType = 'primary' }: { btnType?: ButtonType }) => `
    height: 2.5rem;
    background-color: var(--primary);
    border: none;
    border-radius: 0.5rem;
    ${
      btnType === 'gray' &&
      'background-color: white; border: 2.5px solid var(--bg-gray);'
    };
  `
)
