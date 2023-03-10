import { useState, memo } from 'react';
import { ComponentContainer, Flex, SubTitle} from '@common/ssung-ui/components';
import styled from '@emotion/styled';

interface SenderHeaderProps {
    logo: string
    username: string
    profileThumb: string
}

const Header = (props: SenderHeaderProps) => {
  return (
    <ComponentContainer>
        <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <div>
                <img src={props.logo} alt="logo" style={{"marginLeft":"1.5rem"}} />
            </div>
            <form>
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <input type="text" value="" 
                        style={{
                            "width":"450px",
                            "height":"40px",
                            "border":"none",
                            "borderRadius":"0.3rem",
                            "boxShadow":"3px 3px 10px lightgray",
                        }}
                    />
                    <button type="button"
                        style={{
                            "width":"40px",
                            "height":"40px",
                            "backgroundColor":"#ffffff",
                            "border":"none",
                            "borderRadius":"0.3rem",
                            "boxShadow":"3px 3px 10px lightgray",
                            "margin":"0 0.5rem"
                        }}
                    >검색</button>
                </Flex>
            </form>
            <ProfileBox>
                <Flex flexDirection={'row'} justifyContent={'flex-start'} style={{"marginLeft":"0.5rem"}}>
                    <img src={props.profileThumb} alt='profile image' style={{"width":"3rem"}} />
                    <SubTitle style={{"marginTop":"1rem", "marginLeft":"1rem"}}>{props.username} 님</SubTitle>
                </Flex>
            </ProfileBox>
        </Flex>
    </ComponentContainer>
  );
}

const ProfileBox = styled.div`
    width: 220px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 0.3rem;
    box-shadow: 3px 3px 10px lightgray;
`;

export default Header;