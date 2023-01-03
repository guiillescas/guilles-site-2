import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-height: calc(100vh - 150px);
  min-height: calc(100vh - 150px);

  .message-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      font-size: 48px;
    }

    .border {
      height: 28px;
      border-radius: 1px;
      margin: 0 24px;
      border-right: 2px solid #353535;
    }
  }

  .gif-wrapper {
    width: 100%;
    max-width: 480px;
    height: 100%;
    max-height: 270px;

    margin-top: 2rem;
    padding: 1rem;

    img {
      border-radius: 10px;
    }
  }
`
