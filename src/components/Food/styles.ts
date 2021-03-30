import styled, { css } from "styled-components";

interface ContainerProps {
  available: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 0.5rem;

  header {
    background: #ffb84d;
    border-radius: 0.5rem 0.5rem 0 0;
    height: 12rem;
    overflow: hidden;
    transition: opacity 0.3s;
    text-align: center;

    ${props => !props.available && css`
      opacity: 0.3;
    `}

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 1.875rem;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;
      
      margin-top: 1rem;

      &.price {
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2.125rem;
        color: #39b100;

        b {
          font-weight: 600;
        }
      }
    }
  }

  section.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.25rem 1.875rem;
    background: #e4e4eb;
    border-radius: 0 0 0.5rem 0.5rem;

    div.icon-container {
      display: flex;

      button {
        background: #fff;
        padding: 0.625rem;
        border-radius: 0.5rem;
        
        display: flex;
        border: none;
        
        transition: 0.1s;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 0.375rem;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 5.5rem;
        height: 2rem;
        margin-left: 0.75rem;
        
        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 1rem;

          &:before {
            position: absolute;
            content: '';
            height: 1.25rem;
            width: 2.5rem;
            left: 0.5rem;
            bottom: 0.375rem;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 0.625rem; 
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(2rem);
          -ms-transform: translateX(2rem);
          transform: translateX(2rem);
        }
      }
    }
  }
`;