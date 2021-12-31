import styled  from "styled-components";

type BotaoProps = {
    bg: string,
    small?: boolean
}

export const BotaoStyle = styled.button<BotaoProps>`
    font-size: ${props => props.small === true ? '15px' : '32px'};
    backgrond-color: ${props => props.bg};
`;