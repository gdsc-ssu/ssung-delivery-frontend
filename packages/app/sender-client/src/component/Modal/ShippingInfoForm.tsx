import React, { useEffect, useRef, useState, memo } from 'react';
import styled from '@emotion/styled';
import { ComponentContainer, Flex, Spacer, Title } from '@common/ssung-ui';
import Button from '@common/ssung-ui/components/Form/Button';
import { Text } from '../Text';
import Modal from "./Modal";

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

const ShippingInfoForm = () => {
    /** form data state */
    const [formData, setFormData] = useState<ShippingInfo>(initialFormData);

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

    /** form data state save function */
    const saveFormData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    /** button dispacher */
    const handleButtonClick = () => {
        document.getElementById("ship-form")?.dispatchEvent(new Event("submit"));
        console.log(formData)
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

const GridForm = styled.div`
    display: grid;
    width: 55rem;
    height: 25rem;
    padding: 1rem;
    grid-templates-rows: repeat(2, 1fr);
    grid-templates-columns: repeat(3, 1fr);
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

export default memo(ShippingInfoForm);