import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 50.4rem;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;

    @media (width <= 600px) {
        width: 100vw;
    }
`
export const TextWrapper = styled.div` 
`
export const H1 = styled.h1`
    align-self: stretch;
    color: #FAFAFA;
    text-align: center;
    font-family: Nunito;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: .8rem;

    @media (width <= 600px) {
        font-size: 2.4rem;
    }
`
export const Strong = styled.strong`
    color: #8FB2F5;
    font-family: Nunito;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`
export const P = styled.p`
    align-self: stretch;
    color: #BFBFD4;
    text-align: center;
    font-family: Nunito;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`
export const GroupSearch = styled.div`
    width: 100%;
    @media (width <= 600px) {
        width: 80%;
    }
`
export const NamesCities = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: .8rem;
    background: #3B3B54;
    box-shadow: 0 .4rem 3rem 0 rgba(0, 0, 0, 0.40);
`
export const InputWrapper = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    input {
        height: 5.6rem;
        padding: 0rem 2rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        font-size: 1.6rem;
        color: #fff;
        flex: 1;
        border: none;
        border-radius: .8rem;
        background: #1E1E29;
        outline: none;
        caret-color: #8FB2F5;
        &:disabled {
            color: #fafafa84;
        }
    }

    &::placeholder {
        color: #7F7F98;
        font-family: Nunito;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    button {
        height: 5.6rem;
        width: 5.6rem;
        border-radius: 0 .8rem .8rem 0;
        border: none;
        background-color: #8FB2F5;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover {
            background-color: #6a9bf5;
        }
    }

    @media (width <= 600px) {
        width: 100%;
    }
`
