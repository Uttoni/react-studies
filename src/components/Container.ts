import styled from 'styled-components';

type ContainerProps = {
    module?: number
}

export const Container = styled.div<ContainerProps>`
    max-width: 600px;
    margin: auto;
    background-color: ${props => props.module === 3 ? '#ccc' : 'blue'}};
    color: white;
    padding: 20px;
    display: ${props => props.module===3 ? 'block' : 'flex'};

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

    p{
        font-size: 20px;
        color: black;
    }
`;