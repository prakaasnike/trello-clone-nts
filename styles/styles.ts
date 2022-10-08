import styled from 'styled-components'

export const AppContainer = styled.div`
    align-items: flex-start;
    /*  background-color: #3179ba; */
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 20px;
`
export const ColumnContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 4px;
    padding: 10px 10px;
    flex-grow: 0;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`
