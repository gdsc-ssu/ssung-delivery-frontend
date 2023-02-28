import { useState, memo } from 'react';
import { ComponentContainer, Flex, SubTitle} from '@common/ssung-ui/components';
import styled from '@emotion/styled';

const Form = () => {
    return (
        <FormContainer>
            <Flex>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>이름</label>
                    <InputForm type="text" placeholder='이름' />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>전화번호</label>
                    <InputForm type="tel" placeholder='전화번호' />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>라벨지</label>
                    <InputForm type="text" placeholder='식별자를 입력해주세요' />
                </FlexForm>
            </Flex>
            <Flex>
                <FlexForm style={{"width":"560px"}}>
                    <label style={{"marginTop":"10px"}}>날짜</label>
                    <InputForm type="date" placeholder='' style={{"width":"250px"}} />
                    <InputForm type="date" placeholder='' style={{"width":"250px"}} />
                </FlexForm>
                <FlexForm style={{"marginRight":"50px"}}>
                    <label style={{"marginTop":"10px"}}>배송 상태</label>
                    <InputForm type="text" placeholder='' />
                </FlexForm>
            </Flex>

        </FormContainer>
    )
}

const FormContainer = styled.div`
    width: 1400px;
    height: 130px;
    padding: 10px;
    margin: 0 auto;
    background-color: #f3f3f3;
    border-radius: 0.5rem;
`;

const FlexForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 280px;
    height: 50px;
    margin: 0.25rem 0;
    font-size: 1rem;
    font-weight: 500;
`;

const InputForm = styled.input`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;
`;

export default Form;