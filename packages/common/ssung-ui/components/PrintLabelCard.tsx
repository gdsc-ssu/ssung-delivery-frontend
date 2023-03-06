import styled from '@emotion/styled'
import { ComponentContainer, Flex, Spacer } from './Layout'
import { Text } from './Text'
import ProgressBar from './ProgressBar'
import { PrintLabelData } from '../Model/printlabel'

interface LabelProps {
    labelInfo: PrintLabelData
}

const PrintLabelCard = (props: LabelProps) => {
    return (
    <ComponentContainer>
      <LabelContainer>
        <Flex flexDirection={'column'} justifyContent={'space-between'} style={{"width":"10rem"}}>
            <Text size="xl" style={{"fontWeight":"bold"}}>
                {props.labelInfo.date}
            </Text>
            <Text size="sm">
                인쇄 대기 중인 라벨 👀
            </Text>
        </Flex>
        <br />
        <Flex>
            <CountText>{props.labelInfo.count}</CountText>
            <Text size="sm" style={{
                "position":"relative", 
                "top":"1.5rem", 
                "left":"9.5rem"}}>개</Text>
        </Flex>
      </LabelContainer>
    </ComponentContainer>
  )
}
export default PrintLabelCard;

const LabelContainer = styled.div`
    width: 15vw;
    height: 10vh;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px soild lightgray;
    box-shadow: 3px 3px 5px lightgray;
    margin: 0 2rem;
`;

const CountText = styled.div`
    position: relative;
    font-size: 2rem;
    font-weight: 600;
    color: #07D39F;
    top: 0.8rem;
    left: 9rem;
`;