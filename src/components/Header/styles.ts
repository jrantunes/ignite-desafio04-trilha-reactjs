import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 1.875rem 0;

  header {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 0 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
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
      }
    }
  }
`;