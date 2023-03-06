import styled from '@emotion/styled'
import { Flex } from './Layout';
import {ShipTableHistoryType, ShipTableData} from '../Model/shiptable';

interface TableProps {
    expand?: boolean
    expandalble?: boolean
    icon?: string
    shipInfo: ShipTableData
  }

const Table = () => {
    return (
        <TableContainer>
            <Flex>

            </Flex>
        </TableContainer>
    )
}

export default Table;

const TableContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80vw;
    height: 40vh;
    background-color: #9a9a9a;
`;