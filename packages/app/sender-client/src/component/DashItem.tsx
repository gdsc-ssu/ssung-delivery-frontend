import React, { memo , useState} from "react";
import styled from "@emotion/styled";
import { ComponentContainer, Title, Text } from "@common/ssung-ui";

interface DashItemProps {
    title: React.ReactNode
    text: React.ReactNode
    icon: string
}

const DashItem = ({...props}: DashItemProps) => {
    return (
        <ComponentContainer>
            <GridBox>
                <GridTitle>{props.title}</GridTitle>
                <GridText>{props.text}</GridText>
                <GridIcon src={props.icon} alt="dash icon" />
            </GridBox>
        </ComponentContainer>
    );
}

const GridBox = styled.div`
    display: grid;
    width: 25rem;
    height: 3rem;
    grid-templates-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        "gridIcon gridTitle"
        "gridIcon gridText";
    grid-gap: 0.5rem;
    margin: 3rem auto;
`;

const GridIcon = styled.img`
    grid-area: gridIcon;
    width: 3rem;
    align-items: center;
    justify-self: center;
`;

const GridTitle = styled.div`
    grid-area: gridTitle;
    width: 15rem;
    font-size: 1.5rem;
    font-weight: 600;
`;

const GridText = styled.div`
    grid-area: gridText;
    width: 20rem;
    font-size: 1rem;
`;

export default DashItem;