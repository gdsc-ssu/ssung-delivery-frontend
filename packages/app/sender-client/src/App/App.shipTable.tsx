import { useState, memo } from 'react';
import {ComponentContainer, Flex, SubTitle, Table} from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import { SHIP_TABLE_MOCK_DATA } from '../Model/shiptable.mock'

const ShipTable = () => {
    return (
        <ComponentContainer>
            <Flex
            gap="1rem"
            style={{
                overflowX: 'scroll',
                padding: '1rem',
            }}
            >
            </Flex>
            {SHIP_TABLE_MOCK_DATA.map((info) => (
                <Table tableInfo={info} icon='▼' expandable={true} key={info.id} />
            ))}
        </ComponentContainer>
    )
}

export default memo(ShipTable)