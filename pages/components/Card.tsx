import { CardContainer } from '../../styles/styles'


type props = {
    text: string,
}


export const Card = ({ text }: props) => {
    return (
        <CardContainer>{text}</CardContainer>
    );
};
