type Props = {
    text: string,
    functionClick: (message: string) => void
}

export const Botao = ({ text, functionClick }: Props) => {
    
    const handleClick = () => {
        functionClick('It tickles haha :P');
    }
    
    return(
        <button onClick={handleClick}>{text}</button>
    );
}