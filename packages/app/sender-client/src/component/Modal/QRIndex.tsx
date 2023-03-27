import React, { useState } from "react";
import styled from "@emotion/styled";
import { ComponentContainer, Flex, Spacer } from "@common/ssung-ui";

interface Props {
images: string[];
}

const QrCarousel: React.FC<Props> = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const handleNextClick = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    const handleLabelPrint = () => {
        window.print()
    };

    return (
        <ComponentContainer>
            <Flex justifyContent={'center'}>
                <CarouselBtn onClick={handlePrevClick}>{"<"}</CarouselBtn>
                <QrImg src={images[index]} alt="carousel image" />
                <CarouselBtn onClick={handleNextClick}>{">"}</CarouselBtn>
            </Flex>
            <Spacer height="1rem" />
            <BorderButton onClick={handleLabelPrint}>라벨지 출력</BorderButton>
        </ComponentContainer>
    );
};

const QrImg = styled.img`
    width: 10rem;
`;

const CarouselBtn = styled.button`
    border: none;
    outline: none;
    background: none;
    color: var(--primary);
    font-size: 2rem;
`;

const BorderButton = styled.button`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 1rem 5rem;
    background-color: var(--primary);
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #07D39F;
    box-shadow: 1px 1px 5px lightgray;

    &:hover {
        box-shadow: 3px 3px 5px lightgray;
    }
`;

export default QrCarousel;