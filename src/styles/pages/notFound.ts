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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    font-family: 'Luckiest Guy';
    text-align: center;

    > p {
      font-size: 6rem;
    }

    .texts {
      font-size: 2rem;
    }

    > button {
      z-index: 4;
    }
  }
`
