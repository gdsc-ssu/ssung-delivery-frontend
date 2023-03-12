import styled from "@emotion/styled";
import { ComponentContainer, Flex, Spacer } from "./Layout";
import { Text } from './Text';
import React, { memo, useState } from 'react';

interface Props {
    showModal: boolean,
    closeModal: () => void,
}

const Modal = ({showModal, closeModal}: Props) => {
    return (
        <>
        {showModal ?
            <Background onClick={closeModal}>
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <div>모달창</div>
                    <CloseBtn onClick={closeModal}>X</CloseBtn>
                </ModalContainer>
            </Background> : null}
        </>
    );
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35rem;
    height: 20rem;
    max-height: 20rem;
    padding: 0.3rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 5px 5px 5px gray;
    z-index: 20;
`;

const CloseBtn = styled.button`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: #000000;
    z-index: 21;
`;

export default memo(Modal);