import { useEffect, useRef, memo } from 'react';
import styled from '@emotion/styled';

interface PropsType {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    id?: string
    title?: string
    content: React.ReactNode
}

const Modal = ({ setModalOpen, id, title, content }: PropsType) => {
    /** 모달 끄기 함수 */
    const closeModal = () => {
        setModalOpen(false);
    };

    /** 모달 외부 클릭시 끄기 처리 */
    const modalRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handler = () => {
            /** 모달 이외 영역 클릭 시 모달 제거 처리 */
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // mobile
        
        return () => {
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // mobile
        };
    });
    
    return (
        /** useRef로 모달창 획득 */
        <Background>
            <Container ref={modalRef}>
                <CloseBtn onClick={closeModal}>X</CloseBtn>
                <ModalContent>
                    {content}
                </ModalContent>
            </Container>
        </Background>
    );
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
`;

const Container = styled.div`
    width: 50rem;
    height: 30rem;
    max-height: 30rem;
    padding: 0.3rem;
    z-index: 999;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #ffffff;
    border: none;
    border-radius: 1rem;
    box-shadow: 5px 5px 5px darkgray;
`;

const CloseBtn = styled.button`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: var(--sub-text);
    z-index: 21;
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: sans-serif;
`;

const ModalContent = styled.div`
    padding: 0.5rem;
`;

export default memo(Modal);