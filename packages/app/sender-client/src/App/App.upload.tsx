import { useState, memo } from 'react';
import { BorderButton, Button, Card, ComponentContainer, Flex, SubTitle, PrintLabelCard, Modal} from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import { PRINT_LABEL_MOCK_DATA } from "../Model/printlabel.mock"
import { PrintLabelData } from "../Model/printlabel"

const Upload = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        console.log("open modal button")
    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <ComponentContainer>
            <Flex justifyContent={'space-between'}>
                {PRINT_LABEL_MOCK_DATA.map((info) => (
                    <PrintLabelCard labelInfo={info} key={info.id} />
                ))}
                <Flex style={{"marginRight":"2.5rem", "marginTop":"2.5rem"}}>
                    <BorderButton>운송정보 업로드</BorderButton>
                    <BorderButton>운송정보 엑셀 업로드</BorderButton>
                    <BorderButton onClick={openModal}>라벨지 출력</BorderButton>
                    <Modal showModal={showModal} closeModal={closeModal} />
                </Flex>
            </Flex>
        </ComponentContainer>
    )
}

export default memo(Upload)