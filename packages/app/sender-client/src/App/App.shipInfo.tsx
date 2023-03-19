import { read as xRead, utils as xUtils } from "xlsx";
import { useState, memo } from 'react';
import { Card, ComponentContainer, Flex, SubTitle, PrintLabelCard } from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import { PRINT_LABEL_MOCK_DATA } from "../Model/printlabel.mock"
import { PrintLabelData } from "../Model/printlabel"
import Modal from "../component/Modal/Modal";
import ExcelUploadComponent from "../component/Modal/ExcelUpload";
import ShippingInfoForm from "../component/Modal/ShippingInfoForm";
import useModal from "@common/ssung-ui/components/Modal";

const ShipInfo = () => {
    /** 운송 정보 업로드 모달 */
    const { Modal: InfoModal, onModalOpen: onInfoOpen} = useModal();
    /** 운송 정보 엑셀 업로드 모달 */
    const { Modal: XlsxModal, onModalOpen: onXlsxOpen} = useModal();

    return (
        <ComponentContainer>
            <Flex justifyContent={'space-between'}>
                {PRINT_LABEL_MOCK_DATA.map((info) => (
                    <PrintLabelCard labelInfo={info} key={info.id} />
                ))}
                <Flex style={{"marginRight":"2.5rem", "marginTop":"2.5rem"}}>
                    <BorderButton onClick={onInfoOpen}>운송정보 업로드</BorderButton>
                    <InfoModal>
                        <ShippingInfoForm />
                    </InfoModal>

                    <BorderButton onClick={onXlsxOpen}>운송정보 엑셀 업로드</BorderButton>
                        <XlsxModal>
                            <ExcelUploadComponent />
                        </XlsxModal>
                    <BorderButton onClick={() => alert("Label paper is ready to print.")}>라벨지 출력</BorderButton>
                </Flex>
            </Flex>
        </ComponentContainer>
    )
}

const BorderButton = styled.button`
    height: 2.5rem;
    padding: 0 10px;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 1rem 0.25rem;
    background-color: #ffffff;
    color: #07D39F;
    border-radius: 5px;
    border: 1px solid #07D39F;
    box-shadow: 1px 1px 5px lightgray;

    &:hover {
        box-shadow: 3px 3px 5px lightgray;
    }
`;

export default ShipInfo;