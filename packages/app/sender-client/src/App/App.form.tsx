import { useState, memo } from 'react';
import { ComponentContainer, Flex, SubTitle} from '@common/ssung-ui/components';
import styled from '@emotion/styled';

interface ShipState {
    value: string,
    disabled?: boolean,
    name: string
}

/**
 * SelectBox options
 */
const OPTIONS: ShipState[] = [
    {value: "default", name:"배송 상태를 선택해주세요."},
    {value: "sending", name:"발송"},
    {value: "collecting", name:"집하"},
    {value: "shipping", name:"배송 중"},
    {value: "arrival", name:"배송 완료"},
];

const Form = () => {
    return (
        <FormContainer>
            <Flex>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>이름</label>
                    <InputForm type="text" 
                        id='name'
                        name='name'
                        placeholder='이름' 
                    />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>전화번호</label>
                    <InputForm type="tel" 
                        id='tel'
                        name='tel'
                    placeholder='전화번호' />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>라벨지</label>
                    <InputForm type="text" 
                        id='identifier'
                        name='identifier'
                    placeholder='식별자를 입력해주세요' />
                </FlexForm>
            </Flex>
            <Flex>
                <FlexForm style={{"width":"710px"}}>
                    <label style={{"marginTop":"10px", "marginRight":"-10px"}}>날짜</label>
                    <InputForm type="date" 
                        name='start_data'
                        required
                        aria-required="true"
                        style={{"width":"250px"}} />
                    <InputForm type="date" 
                        name='end_data'
                        required
                        aria-required="true"
                        style={{"width":"250px"}} />
                </FlexForm>
                <FlexForm style={{"marginLeft":"-20px"}}>
                    <label style={{"marginTop":"10px"}}>배송 상태</label>
                    <SelectBox options={OPTIONS} defaultValue="default"></SelectBox>
                </FlexForm>
            </Flex>

        </FormContainer>
    )
}

const SelectBox = (props: ShipState) => {
    return (
        <Select>
            {props.options.map((option) => (
                <option
                    value={option.value}
                    defaultValue={props.defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </Select>
    );
};

const FormContainer = styled.div`
    width: 1500px;
    height: 110px;
    padding: 10px;
    margin: 0 auto;
    background-color: #f3f3f3;
    border-radius: 0.5rem;
`;

const FlexForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 350px;
    height: 50px;
    margin: 0.375rem 0;
    font-size: 1rem;
    font-weight: 500;
`;

const InputForm = styled.input`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }
`;

const Select = styled.select`
    width: 200px;
    height: 30px;
    border: none;
    color: #bababa;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }

    &:focus {
        outline: none;
    }
`;

export default Form;