import React, {useState, memo} from "react";
import styled from "@emotion/styled";
import { ComponentContainer, Spacer, Flex, SignIn, SignUp} from "@common/ssung-ui";
import Header from "./App.header";
import { Title, Text } from "../component/Text";
import Button from "@common/ssung-ui/components/Form/Button";
import { useModal } from '@common/ssung-ui'
import DashItem from "../component/DashItem";

const DashBoard = () => {
    /** login & signup modal */
    const { Modal: SignInModal, onModalOpen: onSignInOpen } = useModal()
    const { Modal: SignUpModal, onModalOpen: onSignUpOpen } = useModal()

    return (
        <ComponentContainer>
            <Spacer height="2rem" />
            <Header logo={'../logo.svg'} animation={"../17431-package-delivery.gif"}
                    username={'로그인을 해주세요.'} 
                    profileThumb={'../profile.svg'} />
            <Spacer height="2rem" />
            <SenderWrapper>
                <Spacer height="2rem" />
                <Flex flexDirection={'column'} justifyContent={'center'}>
                    <Spacer height="2rem" />
                    <Title style={{"margin":"0 auto", "textAlign":"center", "fontSize":"1.8rem"}}>
                        A new <span style={{"color":"var(--primary)"}}>waybill system</span> for Me and the Environment
                    </Title>
                    <Spacer height="2rem" />
                    <Flex flexDirection={'row'} justifyContent={"flex-start"}
                        style={{"flexWrap":"wrap", "width":"90rem", "height":"30rem"}}
                    >
                        <DashboardImg src={"../dashboard.png"} />
                        <DashItem 
                            title={<Title>Security</Title>}
                            text={
                                <Text style={{ lineHeight: "2" }}>
                                    개인 고유 식별자 제공으로 배송을 더욱 안전하게<br />
                                    개인 고유 식별자 제공으로 배송을 더욱 안전하게
                                </Text>
                            }
                            icon="../security.png"
                        />
                        <DashItem 
                            title={<Title>Eco Friendly</Title>}
                            text={
                                <Text style={{ lineHeight: "2" }}>
                                    개인 고유 식별자 제공으로 배송을 더욱 안전하게<br />
                                    개인 고유 식별자 제공으로 배송을 더욱 안전하게
                                </Text>
                            }
                            icon="../eco.png"
                        />
                        <DashItem 
                            title={<Title>Convenient Shipment</Title>}
                            text={
                                <Text style={{ lineHeight: "2" }}>
                                    개인 고유 식별자 제공으로 배송을 더욱 안전하게<br />
                                    개인 고유 식별자 제공으로 배송을 더욱 안전하게
                                </Text>
                            }
                            icon="../shipment.png"
                            style={{"position":"relative", "top":"-10rem", "left":"40rem"}}
                        />
                    </Flex>
                    <Spacer height="-1rem" />
                    <Button 
                        onClick={onSignInOpen}
                        style={{"width":"15rem", "alignSelf":"center"}}>
                        <Text color={"white"}>로그인</Text>
                    </Button>
                    <Spacer height="10rem" />
                </Flex>
                <SignInModal>
                    <SignIn moveToSignUp={onSignUpOpen} />
                </SignInModal>
                <SignUpModal>
                    <SignUp onSignUp={() => alert('준비 중입니다.')} step1={['id', 'pw', 'pw_check']} step2={['name', 'address', 'phone_number']}/>
                </SignUpModal>
            </SenderWrapper>
        </ComponentContainer>
    );
}

const SenderWrapper = styled.div`
    width: 85%;
    height: 100%;
    padding: 1.5rem 0.5rem;
    background-color: #ffffff;
    margin: 0 0 0 15%;
    box-shadow: -2px -2px 15px lightgray;
    border-radius: 1.5rem 0 0 0;
`

const DashboardImg = styled.img`
    width: 25rem;
    margin-left: 2rem;
`;

export default memo(DashBoard);