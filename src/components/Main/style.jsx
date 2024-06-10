import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 50.4rem;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
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
export const InputWrapper = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    input {
        flex: 1;
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
    }

    &::placeholder {
        color: #7F7F98;
        font-family: Nunito;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
`
