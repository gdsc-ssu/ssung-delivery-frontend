import { useState, memo } from 'react';
import {ComponentContainer, Flex, SubTitle, Table, Title} from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import { SHIP_TABLE_MOCK_DATA } from '../Model/shiptable.mock'

const ShipTable = () => {
    return (
        <ComponentContainer>
            <TableIndex>
                <IndexTitle style={{"width":"7rem"}}></IndexTitle>
                <IndexTitle>운송장 명</IndexTitle>
                <IndexTitle>수신자 정보</IndexTitle>
                <IndexTitle>정보</IndexTitle>
                <IndexTitle>연결된 라벨지</IndexTitle>
                <IndexTitle>접수</IndexTitle>
            </TableIndex>
            <Flex
            style={{
                overflowX: 'scroll',
            }}
            >
            </Flex>
            {SHIP_TABLE_MOCK_DATA.map((info) => (
                <Table tableInfo={info} expandable={true} key={info.id} />
            ))}
        </ComponentContainer>
    )
}

const TableIndex = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid lightgray;
    width: 80vw;
    height: 5vh;
    margin: 0 auto;
`;

const IndexTitle = styled.div`
    font-size: 1rem;
    font-weight: 600;
    width: 25rem;
    text-align: center;
    margin: auto 0;
`;

export default memo(ShipTable)