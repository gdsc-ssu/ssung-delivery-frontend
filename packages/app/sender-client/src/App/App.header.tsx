import { useState, memo } from 'react';
import { ComponentContainer, Flex, Title} from '@common/ssung-ui/components';
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
                <img src={props.logo} alt="logo" />
            </div>
            <ProfileBox>
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <img src={props.profileThumb} alt='profile image' />
                    <Title>{props.username} 님</Title>
                </Flex>
            </ProfileBox>
        </Flex>
    </ComponentContainer>
  );
}

const ProfileBox = styled.div`
    background-color: #ffff;
    font-size: 12px;
`;

export default Header;