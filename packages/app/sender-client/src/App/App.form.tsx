import { useState, memo } from 'react';
import { ComponentContainer, Flex, SubTitle} from '@common/ssung-ui/components';
import styled from '@emotion/styled';

const Form = () => {
    return (
        <div>
            <form>
                <label>이름</label>
                <input type="text" placeholder='이름' />
            </form>
        </div>
    )
}

export default Form;