import { ColumnContainer, ColumnTitle } from '../../styles/styles'
import { Card } from './Card';
type ColumnProps = {
    text: string,
}
export const Column = ({ text }: ColumnProps) => {
    return (

        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate App Scaffold"></Card>
            <Card text="Learn Typescript"></Card>
            <Card text="Begin To Use Static Typings"></Card>

        </ColumnContainer>
    );
};
