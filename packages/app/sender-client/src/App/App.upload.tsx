import { useState, memo } from 'react';
import { BorderButton, Button, ComponentContainer, Flex, SubTitle} from '@common/ssung-ui/components';
import styled from '@emotion/styled';

const Upload = () => {
    return (
        <ComponentContainer>
            <Flex>
                <BorderButton text={"운송정보 업로드"} />
                <BorderButton text={"운송정보 엑셀 업로드"} />
                <BorderButton text={"라벨지 출력"} />
            </Flex>
        </ComponentContainer>
    )
}

export default memo(Upload)