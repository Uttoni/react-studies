type Props = {
    data: {
        name: string,
        age: number
    }
}

export const Pessoa = ({ data }: Props) => {
    return(
        <li>{data.name.toUpperCase()} - {data.age} anos.</li>
    );
}