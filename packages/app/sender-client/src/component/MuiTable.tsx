import styled from "@emotion/styled";
import { ComponentContainer, Flex, Spacer } from "../../../../common/ssung-ui/components/Layout";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import { useState, Fragment } from 'react'
import ProgressBar from "../../../../common/ssung-ui/components/ProgressBar";
import { SHIP_TABLE_MOCK_DATA } from "../Model/shiptable.mock";
import { ShipHistoryType, ShipTableData } from "../Model/shiptable";

const Row = (props: {shipTableData: ShipTableData }) => {
    const { shipTableData } = props
    const [open, setOpen] = useState<boolean>(false);

    const getLastShipState = (history: ShipHistoryType[]) => {
        const lastState = history.filter((hist) => hist.done === true)
        return lastState[lastState.length - 1]
    }

    return (
        <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                <IconButton aria-label='expand row' size='medium' 
                    style={{"color":"var(--primary)"}} 
                    onClick={() => setOpen(!open)}>
                    {open ? `⌃` : `⌵`}
                </IconButton>
            </TableCell>
            <TableCell component='th' scope='row' align='center'>{shipTableData.product}</TableCell>
            <TableCell align='center'>{shipTableData.name}</TableCell>
            <TableCell align='center'>{shipTableData.phone}</TableCell>
            <TableCell align='center'>{getLastShipState(shipTableData.history)?.state}</TableCell>
            <TableCell align='center'>{shipTableData.label}</TableCell>
            <TableCell align='center' style={{"color":"var(--form-text)"}}>{shipTableData.registerdate}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={6} sx={{ py: '0 !important' }} style={{"border":"none"}}>
                <Collapse in={open} timeout='auto' unmountOnExit>
                    <Box sx={{ m: 1 }}>
                        <Typography variant='h6' gutterBottom component='div'
                            style={{"position":"relative", "top":"2.5rem", "left":'2rem'}}
                        >History</Typography>
                        <Table size='medium' aria-label='purchases' style={{"margin":"0 15rem"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{"border":"none"}}>
                                        <Flex flexDirection={"column"} style={{"width":"60%", "height":"3rem"}}>
                                            <ProgressBar progress={'66.6%'} />
                                            <TableRow>
                                                <TableCell style={{"border":"none", "width":"30%"}}>Ordered</TableCell>
                                                <TableCell style={{"border":"none", "width":"30%"}}>Shipping</TableCell>
                                                <TableCell style={{"border":"none", "width":"30%"}}>Out For Delivery</TableCell>
                                                <TableCell style={{"border":"none", "width":"30%"}}>Shipped</TableCell>
                                                <img src={"../history-qr.png"} style={{"width":"8rem", "position":"relative", "top":"-7.5rem", "left":"47rem"}} />
                                            </TableRow>
                                        </Flex>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </Fragment>
    )
}

const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
            <TableHead>
                <TableRow>
                    <TableCell />
                    {["운송장명", "수신자명", "전화번호", "정보", "연결된 라벨지", "접수"].map(col => (
                        <TableCell align='center' style={{"fontSize":"17px"}}>{col}</TableCell>)
                    )}
                </TableRow>
            </TableHead>
            <TableBody>
                {SHIP_TABLE_MOCK_DATA.map(row => (
                    <Row key={row.name} shipTableData={row} />
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default MuiTable;