import styled from '@emotion/styled'
import { ComponentContainer, Flex, Spacer } from './Layout'
import { Text, Title } from './Text'
import {ShipTableHistoryType, ShipTableData} from '../Model/shiptable';

interface TableProps {
    expand?: boolean
    expandable?: boolean
    icon?: string
    tableInfo: ShipTableData
}

const Table = (props: TableProps) => {
    const getLastShipState = (history: ShipTableHistoryType[]) => {
        const lastState = history.filter((hist) => hist.done === true)
        return lastState[lastState.length - 1]
    }

    const getLastShipProgress = (history: ShipTableHistoryType[]) => {
        const lastProgress = history.filter((hist) => hist.done === true)
        return lastProgress[lastProgress.length - 1]
    }

    return (
        <ComponentContainer>
            <TableContainer>
                {props.expandable && <ExpandArrow>{'⌄'}</ExpandArrow>}
                <Text size="md" style={{"width":"25rem", "margin":"auto 0", "textAlign":"center"}}>
                    {props.tableInfo.product}
                </Text>
                <Text size="md" style={{"width":"35rem", "margin":"auto 0", "textAlign":"center"}}>
                    {props.tableInfo.receiver}
                </Text>

                <Flex style={{"width":"25rem", "height":"2rem", "margin":"auto 0", "textAlign":"center"}} flexDirection="column" justifyContent={'space-between'}>
                    <Text size="md">
                        {props.tableInfo.progress}
                        {/* {getLastShipProgress(props.tableInfo.history)?.date || ''} */}
                    </Text>
                    <Text gray size="sm">
                        {getLastShipState(props.tableInfo.history)?.state || ''}
                    </Text>
                </Flex>

                <Flex justifyContent={'center'} style={{"width":"30rem"}}>
                    {props.tableInfo.keywords.map((word) => (
                    <>
                        <Text style={{"width":"3rem", "margin":"auto 0", "textAlign":"center"}}>{word},</Text>
                        <br />
                    </>
                    ))}
                </Flex>
                    
                <Text gray size="sm" style={{"width":"10rem", "margin":"auto 0"}}>
                    {getLastShipProgress(props.tableInfo.history)?.date || ''}
                </Text>
            </TableContainer>
        </ComponentContainer>
    )
}

export default Table;

const TableContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80vw;
    height: 5vh;
    border: 1px solid lightgray;
`;

const ExpandArrow = styled.div`
    color: #07D39F;
    margin: auto 1.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
`