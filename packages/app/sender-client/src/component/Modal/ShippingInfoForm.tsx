import React, { useEffect, useRef, useState, memo } from 'react';
import styled from '@emotion/styled';
import { ComponentContainer, Flex, Spacer, Title } from '@common/ssung-ui';
import Button from '@common/ssung-ui/components/Form/Button';
import { Text } from '../Text';
import { ShipTableData } from '../../Model/shiptable';
import { SHIP_TABLE_MOCK_DATA } from '../../Model/shiptable.mock';

interface ShippingInfoFormProps {
    onFormSubmit: (formData: ShipTableData) => void;
}

interface ShippingInfo {
    shippingName: string, 
    name: string, 
    tel: string, 
    abstAddr: string, 
    detailAddr: string
}

const initialFormData: ShippingInfo = {
    shippingName: "",
    name: "",
    tel: "",
    abstAddr: "",
    detailAddr: "",
}

const ShippingInfoForm = ({ onFormSubmit}: ShippingInfoFormProps) => {
    /** form data state */
    const [formData, setFormData] = useState<ShippingInfo>(initialFormData);
    const [shipTableData, setShipTableData] = useState<ShipTableData[]>(SHIP_TABLE_MOCK_DATA);


    const handleChange = (event: any) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    /** form data state reset button function */
    const resetFormData = () => {
        setFormData(initialFormData);
    }

    /** data format function */
    const getCurrentDateTime = (): string => {
        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
        const day = String(currentDateTime.getDate()).padStart(2, '0');
        const hours = String(currentDateTime.getHours()).padStart(2, '0');
        const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
        
        return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    };

    /** random label keywords selector */
    const randomLabelSelector = () => {
        const words = [
            "기분이", "숭실실", "고등어", "앙고라", "참고인", "비타민",
            "짜장면", "바나나", "삼겹살", "강아지", "고양이", "코끼리",
            "알사탕", "텀블러", "탕수육", "사인펜", "검찰청", "연필심",
            "불세출", "황홀한", "행복한", "모호한", "미나리", "리모컨"
        ];

        const selectedWords: string[] = [];
        while (selectedWords.length < 3) {
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex];
            if (!selectedWords.includes(randomWord)) {
                selectedWords.push(randomWord);
            }
        }
        
        return selectedWords.join(" ");
    }

    /** button dispacher */
    const handleButtonClick = () => {
        const lastId = parseInt(SHIP_TABLE_MOCK_DATA[SHIP_TABLE_MOCK_DATA.length - 1].id);
        const newId = (lastId + 1).toString();
    
        const newShipTableData: ShipTableData = {
            id: newId,
            product: formData.shippingName,
            name: formData.name,
            phone: formData.tel,
            label: randomLabelSelector(),
            registerdate: getCurrentDateTime(),
            currstate: "주문 완료",
            history: [
                {
                    state: 'Ordered',
                    date: '2023-06-07',
                    done: false,
                },
                {
                    state: 'Shipping',
                    date: '2023-06-08',
                    done: false,
                },
                {
                    state: 'Out For Delivery',
                    date: '2023-06-10',
                    done: false,
                },
                {
                    state: 'Shipped',
                    date: '2023-06-11',
                    done: false,
                },
            ],
        };

        setFormData(initialFormData);
        onFormSubmit(newShipTableData);
        alert("생성 되었습니다.");
    }

    return (
        <ComponentContainer>
            <Flex justifyContent={"center"}>
                <Title>새 배송정보 입력</Title>
            </Flex>
            <GridForm id="ship-form" style={{"marginTop":"-3rem"}}>
                <ShippingInput>
                    <Label id="shippingName">운송장 이름</Label><br/>
                    <InputForm
                        type="text"
                        id="shippingName" name="shippingName" 
                        onChange={handleChange}
                        value={formData.shippingName}
                        style={{"height":"10.5rem"}}
                        placeholder='운송장 이름' />
                </ShippingInput>
                <NameInput>
                    <Label id="name">이름</Label><br/>
                    <InputForm
                        type="text"
                        id="name" name="name" 
                        onChange={handleChange}
                        value={formData.name}
                        placeholder='수신자 이름' />
                </NameInput>
                <TelInput>
                    <Label id="tel">전화번호</Label><br/>
                    <InputForm
                        type="text"
                        id="tel" name="tel" 
                        onChange={handleChange}
                        value={formData.tel}
                        placeholder='전화번호' />
                </TelInput>
                <AddressInput>
                    <Label id="address">주소</Label><br/>
                    <Flex flexDirection={"column"} >
                    <InputForm
                        type="text"
                        id="abstAddr" name="abstAddr" 
                        onChange={handleChange}
                        value={formData.abstAddr}
                        style={{"width":"31.5rem"}}
                        placeholder='주소' />
                    <InputForm
                        type="text"
                        id="detailAddr" name="detailAddr" 
                        onChange={handleChange}
                        value={formData.detailAddr}
                        style={{"width":"31.5rem"}}
                        placeholder='상세 주소' />
                    </Flex>
                </AddressInput>
            </GridForm>
            <Flex flexDirection={"row"} justifyContent={'space-between'}
            style={{"margin":"-3rem 0 1rem 40rem"}}>
                <Button btnType='gray' style={{"width":"8rem"}}
                    onClick={resetFormData}
                >
                    <Text gray>취소</Text>
                </Button>
                <Button style={{"width":"8rem"}}
                    onClick={handleButtonClick}>
                    <Text color={'white'}>생성</Text>
                </Button>
            </Flex>
        </ComponentContainer>
    );
}

export default memo(ShippingInfoForm);

const GridForm = styled.div`
    display: grid;
    width: 55rem;
    height: 25rem;
    padding: 1rem;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        "shippingInput nameInput telInput"
        "shippingInput addressInput addressInput";
    place-content: center;
    align-items: center;
    grid-gap: 1rem;
`;

const InputForm = styled.input`
    width: 15rem;
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    border: 1px solid var(--form-text);
    margin: 0.5rem 0;

    &::placeholder {
        color: var(--form-text);
        padding: 1rem;
    }
`;

const Label = styled.label`
    margin: 2rem 0;
    font-size: 16px;
    color: #000000;
`;

const ShippingInput = styled.div`
    grid-area: shippingInput;
`;

const NameInput = styled.div`
    grid-area: nameInput;
`;

const TelInput = styled.div`
    grid-area: telInput;
`;

const AddressInput = styled.div`
    grid-area: addressInput;
`;