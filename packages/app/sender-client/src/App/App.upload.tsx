import { useState, memo } from 'react';
import { BorderButton, Button, Card, ComponentContainer, Flex, SubTitle, PrintLabelCard} from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import { PRINT_LABEL_MOCK_DATA } from "../Model/printlabel.mock"
import { PrintLabelData } from "../Model/printlabel"

const Upload = () => {
    return (
        <ComponentContainer>
            <Flex justifyContent={'space-between'}>
                {PRINT_LABEL_MOCK_DATA.map((info) => (
                    <PrintLabelCard labelInfo={info} key={info.id} />
                ))}
                <Flex>
                    <BorderButton text={"운송정보 업로드"} />
                    <BorderButton text={"운송정보 엑셀 업로드"} />
                    <BorderButton text={"라벨지 출력"} />
                </Flex>
            </Flex>
        </ComponentContainer>
    )
}

export default memo(Upload)