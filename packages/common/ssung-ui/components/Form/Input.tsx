import styled from '@emotion/styled'

const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return <StyledInput {...props} />
}

export default Input

const StyledInput = styled.input`
  height: 2rem;
  background-color: white;
  border: 2.5px solid var(--bg-gray);
  border-radius: 0.25rem;
  outline: none;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  :focus {
    border: 2.5px solid var(--primary);
  }
  ::placeholder {
    font-size: 0.875rem;
  }
`
