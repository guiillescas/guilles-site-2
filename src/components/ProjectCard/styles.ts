import Link from 'next/link'

import styled from 'styled-components'

import { ProjectCardContainerProps } from './types'

export const ProjectCardContainer = styled(Link)<ProjectCardContainerProps>`
  display: flex;
  flex-direction: ${({ inverted }) => (inverted ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;

  text-decoration: none;

  width: fit-content;

  transition: all 0.2s !important;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:hover {
    opacity: 0.7;
  }

  .image-wrapper {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 600px;
    height: 100%;
    max-height: 380px;

    border-radius: 8px;

    background: ${({ theme }) => theme.colors.neutral[700]};

    @media (max-width: 1024px) {
      width: 450px;
      max-height: 236px !important;
    }
    @media (max-width: 768px) {
      width: 100%;
      max-height: 236px !important;
    }

    > img {
      border-radius: 8px;

      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: top;

      @media (max-width: 1024px) {
        max-height: 236px !important;
      }
      @media (max-width: 768px) {
        max-height: 236px !important;
      }
    }
  }

  .card-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: ${({ inverted }) => (inverted ? 'flex-end' : 'flex-start')};
    justify-content: flex-start;

    margin-right: ${({ inverted }) => (inverted ? '2rem' : 0)};
    margin-left: ${({ inverted }) => (inverted ? 0 : '2rem')};

    width: fit-content;
    height: 100%;

    padding: 1rem 0;

    @media (max-width: 768px) {
      align-items: center;
      margin: 0;
      text-align: center;
    }

    > h3 {
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.neutral[100]};

      @media (max-width: 768px) {
      }
    }

    > p {
      max-width: 300px;

      text-align: ${({ inverted }) => (inverted ? 'right' : 'left')};
      color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }
`
