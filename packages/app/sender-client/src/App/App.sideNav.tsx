import React, {useState, memo} from "react";
import styled from "@emotion/styled";
import { ComponentContainer, Spacer, Flex, SignIn, SignUp} from "@common/ssung-ui";
import Header from "./App.header";
import { Title, Text } from "../component/Text";
import Button from "@common/ssung-ui/components/Form/Button";
import { useModal } from '@common/ssung-ui'
import DashItem from "../component/DashItem";

interface SideNavProps {
    logined: boolean;
}

const SideNav = ({ logined }: SideNavProps) => {
    return (
        <ComponentContainer>
            <NavContainer>
                <NavButton logined={false}>DashBoard</NavButton>
                <NavButton logined={true}>Delivery</NavButton>
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

interface NavButtonProps {
    logined: boolean;
}

const NavButton = styled.button<NavButtonProps>`
    width: 14rem;
    height: 4rem;
    padding: 0 2rem;
    color: ${props => props.logined ? "white" : "var(--primary)"};
    background-color: ${props => props.logined ? "var(--primary)" : "white"};
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
