import styled from "@emotion/styled";
import { ComponentContainer, Flex, Spacer } from "../../../../common/ssung-ui/components/Layout";
import { Text, Title } from "../../../../common/ssung-ui/components/Text";
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
import { ShippingStepType, ShipTableData } from "../Model/shiptable";

const createData = (product: string, 
                    name: string, 
                    phone: string, 
                    info: string, 
                    label: string, 
                    registerdate: string
                ) => {
    return {
        product,
        name,
        phone,
        info,
        label, 
        registerdate,
        history: [
            {
                process1: 'Ordered',
                process2: 'Shipping',
                process3: 'Out For Delivery',
                process4: 'Shipped',
            },
        ]
    };
}

const Row = (props: {row: ReturnType<typeof createData> }) => {
    const { row } = props
    const [open, setOpen] = useState<boolean>(false);

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
            <TableCell component='th' scope='row'>{row.product}</TableCell>
            <TableCell align='center'>{row.name}</TableCell>
            <TableCell align='center'>{row.phone}</TableCell>
            <TableCell align='center'>{row.info}</TableCell>
            <TableCell align='center'>{row.label}</TableCell>
            <TableCell align='center' style={{"color":"var(--form-text)"}}>{row.registerdate}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={6} sx={{ py: '0 !important' }} style={{"border":"none"}}>
                <Collapse in={open} timeout='auto' unmountOnExit>
                    <Box sx={{ m: 1 }}>
                        <Typography variant='h6' gutterBottom component='div'
                            style={{"position":"relative", "top":"2.5rem", "left":'2rem'}}
                        >History</Typography>
                        <Table size='medium' aria-label='purchases' style={{"margin":"0 20rem"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{"border":"none"}}>
                                        <Flex flexDirection={"column"} style={{"width":"60%"}}>
                                            <ProgressBar progress={'50%'} />
                                            {row.history.map(historyRow => (
                                            <TableRow>
                                                <TableCell style={{"border":"none", "width":"30%"}}>{historyRow.process1}</TableCell>
                                                <TableCell style={{"border":"none", "width":"30%"}}>{historyRow.process2}</TableCell>
                                                <TableCell style={{"border":"none", "width":"30%"}}>{historyRow.process3}</TableCell>
                                                <TableCell style={{"border":"none", "width":"30%"}}>{historyRow.process4}</TableCell>
                                            </TableRow>
                                            ))}
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

const rows = [
    createData('구글 픽셀 7','봉승우','010-1234-1234','배송 중','기분이 슝슝한 서울대','23.01.24 23:09'),
    createData('아이폰 13','유지민','010-0000-0000','관악 HUB','행복한 삼겹살 고기밥','23.01.22 22:20'),
    createData('애플펜슬 2','송지호','010-1010-2323','상도 배송','기분이 삼삼한 고등어','23.01.19 19:54'),
    createData('아이패드 7','정명진','010-4545-1232','배송 완료','마라탕 맛있게 3단계','23.01.30 22:13'),
]

const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell style={{"fontSize":"17px"}}>운송장명</TableCell>
                    <TableCell align='center' style={{"fontSize":"17px"}}>수신자명</TableCell>
                    <TableCell align='center' style={{"fontSize":"17px"}}>전화번호</TableCell>
                    <TableCell align='center' style={{"fontSize":"17px"}}>정보</TableCell>
                    <TableCell align='center' style={{"fontSize":"17px"}}>연결된 라벨지</TableCell>
                    <TableCell align='center' style={{"fontSize":"17px"}}>접수</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <Row key={row.name} row={row} />
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default MuiTable;