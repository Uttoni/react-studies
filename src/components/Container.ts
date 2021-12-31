import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: auto;
    background-color: blue;
    color: white;
    padding: 20px;
    display: flex;

    span{
        color: white;
        font-size: 20px;
    }

    .link{
        color: black;

        &:hover {
            color: green;
        }
    }

    .link:hover{
        color: #red;
    }

    @media (max-width: 500px){
        background-color: green;
        flex-direction: column;

        span{
            color: #ffff;
        }
    }

`;