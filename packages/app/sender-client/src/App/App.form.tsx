import { useState, memo } from 'react';
import { Button, ComponentContainer, Flex, SubTitle, CustomForm } from '@common/ssung-ui/components';
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
        <CustomForm />
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
    width: 70rem;
    height: 7rem;
    padding: 10px;
    margin: 0 auto;
    background-color: #f3f3f3;
    border-radius: 0.5rem;
`;

const FlexForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20rem;
    height: 3rem;
    margin: 0.375rem 0;
    font-size: 1rem;
    font-weight: 500;
`;

const InputForm = styled.input`
    width: 12rem;
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }
`;

const Select = styled.select`
    width: 12rem;
    height: 2rem;
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

const ButtonBox = styled.div`
    position: relative;
    top: -130px;
    right: -62rem;
`;

export default memo(Form);