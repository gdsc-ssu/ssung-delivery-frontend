import { memo } from "react";
import { ComponentContainer, Flex } from "./Layout";
import { SubTitle } from "./Text";
import styled from "@emotion/styled";

interface UserProps {
    icon: string
    children : React.ReactNode
    margin: string
}

const Error = (props: UserProps) => {
    return (
        <ComponentContainer>
            <Flex flexDirection={'column'} justifyContent={'center'}>
                <IconImg src={props.icon} alt="icon" style={{"margin":`${props.margin}`}}/>
                <SubTitle style={{
                    "textAlign":"center", 
                    "color":"#727272", 
                    "marginBottom":"10rem", 
                    "lineHeight":"2rem"
                    }}>{props.children}</SubTitle>
            </Flex>
        </ComponentContainer>
    );
}

const IconImg = styled.img`
    width: 150px;
    height: 150px;
    align-items: center;
`;

export default memo(Error);
