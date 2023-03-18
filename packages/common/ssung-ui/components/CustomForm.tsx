import styled from '@emotion/styled'
import { ComponentContainer, Flex, Spacer } from './Layout'
import { Text } from './Text'
import ProgressBar from './ProgressBar'
import { memo, useState} from 'react'
import { DatePicker } from 'antd'

interface ShipState {
    value: string,
    disabled?: boolean,
    name: string,
}

/**
 * SelectBox options
 */
const OPTIONS: ShipState[] = [
    {value: "default", name:"배송 상태를 선택해주세요."},
    {value: "ordered", name:"발송"},
    {value: "shipping", name:"집하"},
    {value: "outForDelivery", name:"배송 중"},
    {value: "shipped", name:"배송 완료"},
];

/** antd date range picker */
const { RangePicker } = DatePicker;

const CustomForm = () => {
    /** customForm data state */
    const [customFormData, setCustomFormData] = useState({
        name: "",
        tel: "",
        label: "",
        date: "",
        shipstate: "",
    });

    /** form data state save function */
    const handleChange = (event: any) => {
        console.log(event.target.value)
        setCustomFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    /** form data state reset button function */
    const resetFormData = () => {
        setCustomFormData({
            name: "",
            tel: "",
            label: "",
            date: "",
            shipstate: "",
        });
    };

    /** select box component */
    const SelectBox = (props: ShipState) => {
        return (
            <Select
                id="shipstate" name="shipstate"
                value={customFormData.shipstate}
                onChange={handleChange}
            >
                {props.options.map((option) => (
                    <option
                        key={option.key}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
        );
    };

    return (
        <FormContainer>
            <GridForm>
                <NameInput>
                    <Label id="name">이름</Label>
                    <InputForm 
                        type="text"
                        id="name" name="name"
                        value={customFormData.name}
                        onChange={handleChange}
                        placeholder="이름" />
                </NameInput>
                <TelInput>
                    <Label id="tel">전화번호</Label>
                    <InputForm
                        type="tel"
                        id="tel" name="tel"
                        value={customFormData.tel}
                        onChange={handleChange}
                        placeholder="전화번호" />
                </TelInput>
                <LabelInput>
                    <Label id="label">라벨지</Label>
                    <InputForm
                        type="text"
                        id="label" name="label"
                        value={customFormData.label}
                        onChange={handleChange}
                        placeholder="식별자를 입력해주세요" />
                </LabelInput>
                <DateInput>
                    <Label id="date">날짜</Label>
                    <RangePicker 
                        id="date" name="date"
                        // value={customFormData.date}
                        // onChange={handleChange}
                        style={{
                            "marginLeft":"0.5rem",
                            "width":"32rem",
                            "height":"2rem",
                            "border":"none",
                            "boxShadow":"3px 3px 10px lightgray",
                        }} 
                    />
                </DateInput>
                <StatusInput>
                    <Label id="shipstate">배송 상태</Label>
                    <SelectBox options={OPTIONS} 
                        value={customFormData.shipstate}
                        onChange={handleChange}
                    />
                </StatusInput>
                <BtnBox>
                    <Button style={{"color":"#7b7b7b", "backgroundColor":"#ffffff"}}
                        onClick={resetFormData}
                    >초기화</Button>
                    <Button style={{"color":"#ffffff", "backgroundColor":"#07d39f"}}
                        onClick={() => console.log(customFormData)}
                    >검색</Button>
                </BtnBox>
            </GridForm>
        </FormContainer>
    );
}


const FormContainer = styled.div`
    width: 68rem;
    height: 5rem;
    padding: 1.5rem;
    margin: 0 auto;
    background-color: #f3f3f3;
    border-radius: 0.5rem;
`;

const GridForm = styled.div`
    display: grid;
    width: 70rem;
    height: 7rem;
    grid-templates-rows: repeat(2, 1fr);
    grid-templates-columns: 2fr 2fr 2fr 1fr;
    grid-template-areas:
        "nameInput telInput labelInput btnBox"
        "dateInput dateInput statusInput btnBox";
    text-align: center;
    place-content: center;
    align-items: center;
    grid-gap: 1rem;
`;

const InputForm = styled.input`
    width: 12rem;
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }
`;

const Label = styled.label`
    margin: 0 2rem;
    font-size: 16px;
    color: #000000;
`;

const NameInput = styled.div`
    grid-area: nameInput;
    position: relative;
    top: -1.5rem;
`;

const TelInput = styled.div`
    grid-area: telInput;
    position: relative;
    top: -1.5rem;
`;

const LabelInput = styled.div`
    grid-area: labelInput;
    position: relative;
    top: -1.5rem;
`;

const DateInput = styled.div`
    grid-area: dateInput;
    justify-self: start;
    position: relative;
    top: -4rem;
`;

const StatusInput = styled.div`
    grid-area: statusInput;
    position: relative;
    top: -4rem;
`;

const Select = styled.select`
    width: 12rem;
    height: 2rem;
    border: none;
    color: #bababa;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }

    &:focus {
        outline: none;
    }
`;

const BtnBox = styled.div`
    grea-area: btnBox;
    display: flex;
    flex-direction: column;
    margin: 0.8rem 1rem 0 1rem;
`;

const Button = styled.button`
    width: 80px;
    height: 30px;
    padding: 5px 10px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 15px;
    border-radius: 5px;
    border: none;
    box-shadow: 3px 10px 10px lightgray;
`;

export default memo(CustomForm)