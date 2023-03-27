import React, {useState, memo} from "react";
import styled from "@emotion/styled";
import { ComponentContainer, Spacer, Flex, SignIn, SignUp} from "@common/ssung-ui";
import Header from "./App.header";
import { Title, Text } from "../component/Text";
import Button from "@common/ssung-ui/components/Form/Button";
import { useModal } from '@common/ssung-ui'
import DashItem from "../component/DashItem";

const SideNav = () => {
    return (
        <ComponentContainer>
            <NavContainer>
                <NavButton>DashBoard</NavButton>
                <NavButton>Delivery</NavButton>
            </NavContainer>
        </ComponentContainer>
    );
}

const NavContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 10rem;
    left: 0rem;
    width: 15rem;
    height: 8.5rem;
    justify-content: space-between;
`;

const NavButton = styled.button`
    width: 14rem;
    height: 4rem;
    padding: 0 2rem;
    color: white;
    background-color: var(--primary);
    border-radius: 0 3rem 3rem 0;
    text-align: left;
    font-size: 1.2rem;
    border: none;
    outline: none;
    box-shadow: 3px 3px 5px lightgray;

    &:hover {
        box-shadow: 5px 5px 5px lightgray;
    }
`;

export default SideNav;