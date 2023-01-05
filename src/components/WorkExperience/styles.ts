import styled from 'styled-components'

export const WorkExperienceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .line {
    width: 2px;
    height: 200px;

    margin-top: 0.5rem;

    background: ${({ theme }) => theme.colors.green[500]};

    box-shadow: 0px 0px 4px 1px ${({ theme }) => theme.colors.green[500]};

    border-radius: 4px;
  }

  .job {
    position: relative;

    margin-left: 0.75rem;
    margin-bottom: 1rem;

    .ball {
      position: absolute;
      left: -14px;
      top: 8px;

      width: 8px;
      height: 8px;

      margin-left: -3px;

      border-radius: 50%;

      background: ${({ theme }) => theme.colors.green[500]};

      box-shadow: 0px 0px 8px 2px ${({ theme }) => theme.colors.green[500]};
    }

    h3 {
      margin-bottom: 0.25rem;
    }

    span {
      font-style: italic;
    }

    > p:first-child {
      margin-top: 0.25rem;
    }
  }
`
