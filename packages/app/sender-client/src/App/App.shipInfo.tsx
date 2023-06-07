import { read as xRead, utils as xUtils } from "xlsx";
import { useState, memo } from 'react';
import { Card, ComponentContainer, Flex, SubTitle, PrintLabelCard, Spacer } from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import { PRINT_LABEL_MOCK_DATA } from "../Model/printlabel.mock"
import ExcelUploadComponent from "../component/Modal/ExcelUpload";
import ShippingInfoForm from "../component/Modal/ShippingInfoForm";
import useModal from "@common/ssung-ui/components/Modal";
import QrCarousel from "../component/Modal/QRIndex";
import MuiTable from "../component/MuiTable";
import { SHIP_TABLE_MOCK_DATA } from "../Model/shiptable.mock";
import { ShipTableData } from "../Model/shiptable";
import CustomForm from "../component/CustomForm";
import { atom, useAtom } from 'jotai';

export const searchClickAtom = atom(false);

const ShipInfo = () => {
    /** 운송 정보 업로드 모달 */
    const { Modal: InfoModal, onModalOpen: onInfoOpen} = useModal();
    /** 운송 정보 엑셀 업로드 모달 */
    const { Modal: XlsxModal, onModalOpen: onXlsxOpen} = useModal();
    /** 라벨지 출력 업로드 모달 */
    const { Modal: LabelPrintMidal, onModalOpen:onLabelPrintOpen } = useModal();
    const [shipTableData, setShipTableData] = useState<ShipTableData[]>(SHIP_TABLE_MOCK_DATA);
    const [searchClick, setSearchClick] = useAtom(searchClickAtom);

    const handleFormSubmit = (formData: ShipTableData) => {
        setShipTableData((prevData) => [formData, ...prevData]);
    }

    const handleSubmit = () => {
        setSearchClick(true);
    }

    const filteredData: ShipTableData[] = [
        {
        id: '1',
        product: '애플 펜슬 2',
        name: '고광서',
        phone: '010-5555-4444',
        label: '불세출 앙골라 참고인',
        registerdate: '2023.02.20 22:52',
        currstate: '배송 완료',
        history: [
          {
            state: 'Ordered',
            date: '2020-01-01',
            done: true,
          },
          {
            state: 'Shipping',
            date: '2020-01-02',
            done: true,
          },
          {
            state: 'Out For Delivery',
            date: '2020-01-02',
            done: true,
          },
          {
            state: 'Shipped',
            date: '2020-01-03',
            done: true,
          },
        ],
        }
    ];

    return (
        <ComponentContainer style={{ overflowY: "scroll" }}>
            <CustomForm onSubmit={handleSubmit} />
            <Spacer height="2rem" />
            <Flex justifyContent={'space-between'}>
                {PRINT_LABEL_MOCK_DATA.map((info) => (
                    <PrintLabelCard labelInfo={info} key={info.id} />
                ))}
                <Flex style={{"marginRight":"2.5rem", "marginTop":"2.5rem"}}>
                    <BorderButton onClick={onInfoOpen}>운송정보 업로드</BorderButton>
                    <InfoModal>
                        <ShippingInfoForm onFormSubmit={handleFormSubmit} />
                    </InfoModal>

                    <BorderButton onClick={onXlsxOpen}>운송정보 엑셀 업로드</BorderButton>
                        <XlsxModal>
                            <ExcelUploadComponent />
                        </XlsxModal>
                    <BorderButton onClick={onLabelPrintOpen}>라벨지 출력</BorderButton>
                        <LabelPrintMidal>
                            <QrCarousel images={["../qr-label-print1.png", "../qr-label-print2.png", "../qr-label-print3.png"]} />
                        </LabelPrintMidal>
                </Flex>
            </Flex>
            <Spacer height="5rem" />
            <MuiTable mockdata={searchClick ? filteredData : shipTableData} />
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