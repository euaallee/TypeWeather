import styled from "styled-components";

export const Dash = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  gap: 2.4rem;
  padding: 2.4rem;
  justify-content: space-around;
  align-items: center;
  background: #13131A;
  position: absolute;
`
export const Card = styled.div`
  display: flex;
  width: 66.4rem;
  padding: 1.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  border-radius: 1.2rem;
  background: #16161F;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`
export const Home = styled.div`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  padding: .8rem;
  justify-content: center;
  align-items: center;
  border-radius: .8rem;
  background: #1E1E29;
`
export const InputSearch = styled.div`
  display: flex;
  height: 5.6rem;
  padding: 0 0 0 2rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

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
`
export const Display = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  border-radius: .8rem;
  background: url(${p => p.img}) no-repeat;
  background-size: cover;
  position: relative;
`
export const DisplatText = styled.div`
  display: flex;
  width: 100%;
  margin: 3.2rem 0;
  justify-content: space-around;
  align-items: flex-start;
  position: absolute;
  top: 0;
`
export const CityName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;

  p {
    color: #FAFAFA;
    text-align: center;
    font-family: Nunito;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }

  span {
    color: #FAFAFA;
    text-align: center;
    font-family: Nunito;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`
export const DisplayTime = styled.div`
  p {
    color: #FAFAFA;
    text-align: center;
    font-family: Nunito;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`
export const Temp = styled.div`
  display: flex;
`
export const DisplayTemp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 3.2rem 3.2rem;
  gap: 1.2rem;
  align-items: flex-start;
  position: absolute;
  left: 0;
  bottom: 0;

  h2 {
    color: #FFF;
    font-family: Nunito;
    font-size: 9.6rem;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
  }

  span {
    color: #FFF;
    font-family: Nunito;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    strong {
      color: #FFF;
      font-family: Nunito;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }
`
export const DisplayTempInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`
export const Divider = styled.div`
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background-color: #FFF;
  fill: #FFF;
  opacity: 0.4;
`
export const WeatherStates = styled.div`
  background: url(${p => p.img}) no-repeat;
  background-size: cover;
  width: 24.8rem;
  height: 24.8rem;
  flex-shrink: 0;
  position: absolute;
  right: 0;
  bottom: 0;
`
export const CardDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex: 1;
`
export const WeatherDetail = styled.div`
  display: inline-flex;
  padding: 2.8rem 2.4rem .8rem 2.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2rem;
  flex: 1;

  border-radius: 1.2rem;
  background: #16161F;

  h3 {
    color: #7F7F98;
    font-family: Nunito;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`
export const WeatherDetailItem = styled.div`
  display: flex;
  padding: 1.6rem 0;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: .1rem solid #1C1C27;

  p {
    color: #FAFAFA;
    font-family: Nunito;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    span {
      color: #FAFAFA;
      font-family: Nunito;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }
`
export const TitleDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  img {
    width: 3.2rem;
    height: 3.2rem;
    fill: #3B3B55;
    object-fit: cover;
    opacity: .3;
  }

  p {
    text-overflow: ellipsis;
    color: #BFBFD4;
    text-align: center;
    font-family: Nunito;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`
export const NextDays = styled.div`
  display: flex;
  flex: 1;
  padding: 2.8rem 2.4rem 2.4rem 2.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 1.2rem;
  background: #16161F;

  h3 {
    color: #7F7F98;
    font-family: Nunito;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`
export const Forecast = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`
export const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  flex: 1 0 0;
  align-self: stretch;

  p {
    width: 84%;
    color: #BFBFD4;
    font-family: Nunito;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: center;

    strong {
      color: #BFBFD4;
      text-align: center;
      font-family: Nunito;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }

  img {
    width: 9.7rem;
    height: 6rem;
    object-fit: cover;
    object-position: center;
  }

  span {
    color: #7F7F98;
    text-align: center;
    font-family: Nunito;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    strong {
      color: #FAFAFA;
      text-align: center;
      font-family: Nunito;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }
`