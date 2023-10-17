import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 74px);
  min-height: calc(100vh - 74px);

  overflow-y: hidden;

  background: ${({ theme }) => theme.colors.neutral[900]};

  canvas {
    position: absolute;
    z-index: 1;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 1;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-height: calc(100vh - 74px);
  min-height: calc(100vh - 74px);

  overflow-y: hidden;

  .message-wrapper {
    width: 100%;
    height: 100%;

    z-index: 4;

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

    > button {
      margin-left: 2rem;

      z-index: 4;
    }
  }

  .gif-wrapper {
    width: 100%;
    max-width: 480px;
    height: 100%;
    max-height: 270px;

    margin-top: 1rem;

    z-index: 4;

    img {
      border-radius: 10px;
    }
  }
`
