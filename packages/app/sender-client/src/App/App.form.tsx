import { useState, memo } from 'react';
import { ComponentContainer, Flex, SubTitle, CustomForm } from '@common/ssung-ui/components';
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

export default memo(Form);