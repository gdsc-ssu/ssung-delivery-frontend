import { useEffect, useRef, useState, memo } from 'react';
import styled from '@emotion/styled';
import { ComponentContainer, Flex, Title } from '@common/ssung-ui';
import Modal from "./Modal";

const ShippingInfoForm = () => {
    /** form data state */
    const [formData, setFormData] = useState({
        shippingName: "",
        name: "",
        tel: "",
        abstAddr: "",
        detailAddr: "",
    });

    const handleChange = (event: any) => {
        // console.log(event.target.value);
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    return (
        <ComponentContainer>
            <Flex justifyContent={"center"} style={{"marginTop":"2rem"}}>
                <Title>새 배송정보 입력</Title>
            </Flex>
            <GridForm style={{"marginTop":"-3rem"}}>
                <ShippingInput>
                    <Label id="shippingName">운송장 이름</Label><br/>
                    <InputForm
                        type="text"
                        id="shippingName" name="shippngName" 
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
            <Flex flexDirection={"row"} style={{"margin":"-3rem 0 0 40rem"}}>
                <CustomBtn style={{
                    "border":"0.1rem solid var(--primary)",
                    "color":"var(--primary)"
                }}>취소</CustomBtn>
                <CustomBtn style={{
                    "backgroundColor":"var(--primary)",
                    "color":"#ffffff"
                }}
                onClick={() => console.log(formData)}
                >생성</CustomBtn>
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

const CustomBtn = styled.label`
    width: 6rem;
    height: 2rem;
    margin: auto 0.2rem;
    background: #fff;
    color: var(--sub-text);
    border: 0.1rem solid lightgray;
    box-shadow: 1px 1px 3px lightgray;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        box-shadow: 3px 3px 3px lightgray;
    }
`;

export default memo(ShippingInfoForm);