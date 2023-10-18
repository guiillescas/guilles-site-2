import styled from 'styled-components'

import Image3 from '../../../public/assets/vectors/blue-vector-2.png'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  z-index: 3;

  scroll-behavior: smooth;

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
      `linear-gradient(transparent 80%, ${theme.colors.background} 99%)`};
  }

  section {
    position: relative;
    padding: 2rem 0 6rem;

    z-index: 2;

    a {
      color: ${({ theme }) => theme.colors.neutral[400]};

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.neutral[200]};
      }
    }

    > h1 {
      margin-bottom: 0.5rem;
    }
  }

  .custom-title {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin-bottom: 2.5rem;

    font-size: 3rem;
    text-align: center;

    color: ${({ theme }) => theme.colors.sky[300]};

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.colors.sky[300]};

      margin: 0.5rem 4px 0;

      width: 70px;
      height: 2rem;

      border-radius: 7px;

      .hole {
        background: ${({ theme }) => theme.colors.background};

        width: 62px;
        height: 1.5rem;

        border-radius: 7px;
      }
    }
  }

  #introduction {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: calc(75vh - 24px); // 74px from header

    padding-bottom: 4rem;

    @media (max-width: 920px) {
      flex-direction: column;

      height: fit-content;

      text-align: center;
    }

    .vector {
      position: absolute;

      background-image: url(${Image3.src});

      top: 25%;
      right: -80px;

      width: 500px;
      height: 280px;

      z-index: -1;

      -webkit-filter: blur(100px);
      -moz-filter: blur(100px);
      -o-filter: blur(100px);
      -ms-filter: blur(100px);
      filter: blur(100px);
    }

    .content {
      margin-bottom: 15%;

      @media (max-width: 920px) {
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 0;
      }

      h1 {
        font-size: 3rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.neutral[200]};

        @media (max-width: 920px) {
          font-size: 2rem;
        }
      }

      h2 {
        color: ${({ theme }) => theme.colors.neutral[400]};
        font-size: 3rem;

        @media (max-width: 920px) {
          font-size: 1.75rem;
        }
      }

      p {
        line-height: 1.25rem;

        margin-top: 1.5rem;

        max-width: 550px;

        @media (max-width: 920px) {
          margin: 1rem auto 0;
        }
      }

      .social-wrapper {
        margin-top: 2rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        @media (max-width: 920px) {
          justify-content: center;
        }

        > a {
          color: ${({ theme }) => theme.colors.neutral[100]};

          transition: opacity 0.2s;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }

    .image-wrapper {
      margin-top: -28px;

      @media (max-width: 768px) {
        margin-top: 1rem;
      }

      img {
        object-fit: contain;

        @media (max-width: 768px) {
          width: 200px;
          height: 200px;
        }
      }
    }
  }

  #projects {
    width: 100%;

    margin-top: -5rem;

    @media (max-width: 920px) {
      margin-top: -1rem;
    }

    .projects-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 3rem;

      margin-top: 2rem;

      width: 100%;

      a:nth-child(even) {
        margin-left: auto;
      }
    }
  }

  #experience {
    position: relative;

    margin-top: 4rem;

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

      @media (max-width: 767px) {
        flex-direction: column;
      }

      .menu-wrapper {
        @media (max-width: 767px) {
          display: none;
        }

        nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          z-index: 30;

          margin-bottom: 1rem;

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

            transition: background-color 0.2s;

            font-weight: 500;

            &:disabled {
              background: ${({ theme }) => theme.colors.sky[900]};
            }

            span {
              color: ${({ theme }) => theme.colors.neutral[300]};
              font-style: italic;
              font-size: 0.875rem;
              font-weight: 400;
            }
          }
        }

        .icon-wrapper {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .condensed-menu-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 0 auto;

        z-index: 60;

        select {
          position: relative;

          padding: 0.5rem;
          margin-top: 0.5rem;

          background-color: ${({ theme }) => theme.colors.glassedEffect};
          backdrop-filter: blur(10px);

          border-radius: 6px;
          box-shadow: ${({ theme }) => theme.colors.glassedShadowEffect} 0px 0px
            24px 4px;

          color: ${({ theme }) => theme.colors.neutral[100]};

          option {
            display: block;
          }
        }

        @media (min-width: 768px) {
          display: none;
        }
      }

      .job-content {
        position: relative;

        flex: 1;

        z-index: 5;

        width: 400px;

        padding: 1rem;

        background: rgba(0, 0, 0, 0.13);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);

        @media (max-width: 767px) {
          width: 100%;
        }

        > div {
          .job-without-positions-info-wrapper {
            margin-bottom: 0.5rem;

            h4 {
              margin: 0.25rem 0 0;
              font-size: 0.875rem;
            }

            > span {
              font-size: 0.75rem;
              color: ${({ theme }) => theme.colors.neutral[400]};
            }
          }

          .company-header-wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            margin-bottom: 1rem;

            img {
              border-radius: 6px;

              margin-right: 0.5rem;
            }

            > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;

              > p {
                font-size: 0.75rem;
              }
            }
          }

          .job-description {
            line-height: 1.25rem;

            ul {
              margin-top: 0.75rem;
              margin-left: 1rem;
            }
          }

          .job-positions-wrapper {
            > div {
              h4 {
                margin: 0.25rem 0 0;
                font-size: 0.875rem;
              }

              span {
                font-size: 0.75rem;
                color: ${({ theme }) => theme.colors.neutral[400]};
              }

              .job-position-content {
                margin-top: 0.5rem;

                ul {
                  margin-bottom: 1rem;
                  margin-left: 1rem;
                  line-height: 1.25rem;
                }
              }
            }
          }
        }
      }
    }
  }

  #about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 4rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      width: 100%;

      @media (max-width: 767px) {
        flex-direction: column;

        text-align: center;
      }

      > div:nth-child(1) {
        p {
          max-width: 767px;
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
          width: 280px;
          height: 280px;

          border-radius: 50%;

          object-fit: cover;

          @media (max-width: 767px) {
            width: 200px;
            height: 200px;
          }
        }
      }
    }
  }
`
