import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.25rem;
    margin-bottom: 2.5rem;
  }

  button {
    margin-top: 3rem;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 0.5rem;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 1rem 1.5rem;
    }

    .icon {
      display: flex;
      padding: 1rem;
      background: #41c900;
      border-radius: 0 0.5rem 0.5rem 0;
      margin: 0 auto;
    }
  }
`;