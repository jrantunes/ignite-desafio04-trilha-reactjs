import styled, { css } from "styled-components";

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 0.5rem;
  padding: 1.125rem 1.5rem;
  width: 100%;
  font-size: 1rem;

  & + div {
    margin-top: 1.5rem;
  }

  h1 {
    margin-bottom: 2.5rem;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.25rem;
  }

  ${props => 
    props.isFocused && css`
      color: #ff9000;
      border-color: #ff9000;
    `
  }

${props => 
    props.isFilled && css`
      color: #ff9000;
    `
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;