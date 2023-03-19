import { useState, memo } from 'react';
import {ComponentContainer, Flex, SubTitle, Table, Title} from '@common/ssung-ui/components';
import styled from '@emotion/styled';
import MuiTable from '../component/MuiTable';

const ShipTable = () => {
    return (
        <ComponentContainer>
            <MuiTable />
        </ComponentContainer>
    )
}

export default memo(ShipTable)