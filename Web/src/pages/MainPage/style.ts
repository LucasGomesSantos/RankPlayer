import styled from 'styled-components';
import { shade } from 'polished'


export const Container = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: normal;
    width: 25%;
    max-width: 700px;

    img {
        width: 400px;
        height: 200px;
    }

    form {
        margin: 80px;
        width: 340x;
        text-align: center;
    }

    h1 {
        margin-bottom: 24px;
    }

    input{
        background: #232129;
        border-radius:10px;
        border: 2px solid #232129;
        color: #FFF;
        padding: 16px;
        width: 100%;

        & + input {
            margin-top: 8px; 
        }
    }

    label {
        font-size: 18px;
    }

    button {
        background: #000;
        height: 56px;
        border-radius:10px;
        padding: 0 16px;
        color: #FFF;
        font-weight: 500;
        margin-top: 16px;
        width: 100%;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#57ade6')};
        }
    }
`;
