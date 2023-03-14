import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

interface ButtonProps {
    children: React.ReactNode
    color: string
    bgcolor: string
}

const Button = (props: ButtonProps) => {
    return (
        <ButtonStyled style={{
            "color": `${props.color}`,
            "backgroundColor":`${props.bgcolor}`}}
        >
            {props.children}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    width: 80px;
    height: 30px;
    padding: 5px 10px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 15px;
    border-radius: 5px;
    border: none;
    box-shadow: 3px 10px 10px lightgray;
`;

export default Button;