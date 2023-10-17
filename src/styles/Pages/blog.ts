import { BlogContainerProps } from 'interfaces/pages/blog'

import styled from 'styled-components'

import Image2 from '../../../public/assets/vectors/purple-vector-1.png'
import Image3 from '../../../public/assets/vectors/blue-vector-2.png'
import Image1 from '../../../public/assets/vectors/blue-square-vector-1.png'

export const BlogContainer = styled.main<BlogContainerProps>`
  height: 100%;

  > div.background {
    position: absolute;

    z-index: -1;

    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);

    &.one {
      top: -50px;
      left: -80px;

      width: 380px;
      height: 380px;

      background-image: url(${Image1.src});
    }
    &.two {
      top: -120px;
      right: -80px;

      width: 2000px;
      height: 380px;

      background-image: url(${Image1.src});
    }
    &.three {
      top: 200px;
      left: 10%;

      width: 700px;
      height: 280px;

      background-image: url(${Image2.src});
    }
    &.four {
      top: 200px;
      right: 10%;

      width: 500px;
      height: 280px;

      background-image: url(${Image3.src});
    }
  }

  > section {
    width: 100%;
    max-width: 1200px;
    overflow-y: hidden;

    margin: 0 auto;
  }

  #presentation {
    height: 100%;
    min-height: 400px;

    margin-top: 8rem;

    > div {
      text-align: center;

      z-index: 8;

      > h2 {
        z-index: 9;
        line-height: 130%;
        font-size: 4rem;

        margin: 0 auto;

        @media (max-width: 640px) {
          line-height: 3.5rem;

          margin-bottom: 1rem;
        }
      }

      > p {
        font-size: 1.25rem;
      }
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      max-width: 500px;
      margin: 0 auto;

      .form {
        position: relative;

        z-index: 10;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 5rem auto 0;

        width: 100%;
        max-width: 500px;

        border: 1px solid;
        border-color: ${({ theme, formError }) =>
          formError ? theme.colors.red[500] : 'transparent'};
        border-radius: ${({ activeSearch }) =>
          activeSearch ? '4px 4px 0 0' : '4px'};

        background-color: ${({ theme }) => theme.colors.glassedEffect};
        backdrop-filter: blur(10px);

        box-shadow: ${({ theme }) => theme.colors.glassedShadowEffect} 0px 0px
          24px 4px;

        > input {
          flex: 1;
          border: none;
          border-radius: 4px;

          padding: 1rem;

          background: transparent;

          &::placeholder {
            opacity: 0.9;
            color: ${({ theme }) => theme.colors.neutral[900]};
          }
        }

        > button {
          position: absolute;
          right: 4px;

          transition: color 0.3s !important;

          &:hover {
            color: ${({ theme }) => theme.colors.neutral[700]};
          }
        }
      }

      > span {
        color: ${({ theme }) => theme.colors.red[500]};
        font-weight: 400;

        margin-top: 0.25rem;
      }
    }
  }

  #search {
    margin-bottom: 10rem;

    > h2 {
      font-size: 2rem;
      margin-bottom: 1rem;

      span {
        font-weight: 400;
      }
    }

    .posts-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;

      margin-top: 2rem;

      min-height: 300px;
    }
  }

  #posts {
    margin-bottom: 10rem;

    > h2 {
      font-size: 3.5rem;
      margin-bottom: 1rem;

      @media (max-width: 640px) {
        font-size: 3rem;
      }
    }

    .featured-post {
      width: 100%;
      height: 300px;

      margin-bottom: 7rem;

      @media (max-width: 640px) {
        margin-bottom: 16rem;
      }
    }

    .posts-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }
  }
`
