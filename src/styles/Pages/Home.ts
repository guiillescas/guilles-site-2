import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  z-index: 3;

  canvas {
    position: absolute;

    top: 0;
    left: 0;
  }

  .canvas-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;

    width: 100%;
    max-width: 100vw;
    height: 100vh;

    background: ${({ theme }) =>
      `linear-gradient(transparent 40%, ${theme.colors.background} 99%)`};
  }

  section {
    position: relative;
    padding: 2rem 0 6rem;

    z-index: 2;
  }

  #introduction {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    height: calc(100vh - 24px); // 74px from header

    padding-bottom: 4rem;

    .content {
      margin-bottom: 15%;

      h1 {
        font-size: 3rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.neutral[200]};

        &:nth-child(2) {
          color: ${({ theme }) => theme.colors.neutral[400]};
        }
      }

      p {
        line-height: 1.25rem;

        margin-top: 1.5rem;

        max-width: 550px;
      }
    }
  }

  #jobs {
    position: relative;

    .beauty-ball {
      position: absolute;
      right: -100px;
      top: 300px;

      box-shadow: 0px 0px 200px 115px ${({ theme }) => theme.colors.sky[600]};
      opacity: 0.7;

      transform: rotate(-45deg);
    }

    .line {
      position: absolute;

      width: 2px;
      height: 320px;

      border-radius: 10px;

      background: ${({ theme }) => theme.colors.sky[500]};
      box-shadow: 0px 0px 20px 4px ${({ theme }) => theme.colors.sky[500]};

      opacity: 0.6;

      z-index: 3;

      &.one {
        top: -100px;
        right: 250px;

        transform: rotate(45deg);
      }
      &.two {
        bottom: -50px;
        left: 350px;

        transform: rotate(-45deg);
      }
    }

    > div {
      position: relative;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      gap: 1rem;

      margin-top: 2rem;

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        z-index: 30;

        button {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          padding: 0.5rem 1rem;
          background: transparent;

          border: none;
          border-left: 2px solid;
          border-color: ${({ theme }) => theme.colors.sky[500]};
          border-radius: 0 4px 4px 0;

          cursor: pointer;

          span {
            color: ${({ theme }) => theme.colors.neutral[300]};
            font-style: italic;
            font-size: 0.875rem;
          }
        }
      }

      .job-content {
        position: relative;

        flex: 1;

        z-index: 2987;

        width: 400px;
        height: 400px;
        /* From https://css.glass */
        background: rgba(0, 0, 0, 0.13);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
    }
  }

  #about {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > div:nth-child(1) {
      p {
        max-width: 768px;
        margin: 0.75rem 0;

        line-height: 1.5rem;
      }
    }

    > div:nth-child(2) {
      position: relative;

      .ball {
        position: absolute;

        &.one {
          width: 50px;
          height: 50px;

          border-radius: 16px;

          background: ${({ theme }) => theme.colors.sky[500]};
        }
        &.two {
          width: 32px;
          height: 32px;

          border-radius: 12px;

          top: -4px;
          left: -4px;

          background: ${({ theme }) => theme.colors.sky[200]};
        }
        &.three {
          width: 58px;
          height: 58px;

          border-radius: 18px;

          bottom: -2px;
          right: -8px;

          background: ${({ theme }) => theme.colors.sky[600]};
        }
      }

      img {
        width: 180px;
        height: 180px;

        border-radius: 50%;

        object-fit: cover;
      }
    }
  }
`
