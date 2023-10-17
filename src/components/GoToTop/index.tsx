import { ReactElement, useEffect, useState } from 'react'

import { FiChevronUp } from 'react-icons/fi'

import * as Styles from './styles'

export function GoToTop(): ReactElement {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setIsButtonVisible(true)
    } else if (scrolled <= 300) {
      setIsButtonVisible(false)
    }
  }

  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <Styles.GoToTopContainer
      type="button"
      onClick={scrollToTop}
      aria-hidden={!isButtonVisible}
      isButtonVisible={isButtonVisible}
      title="Go to the top"
    >
      <FiChevronUp size={20} />
    </Styles.GoToTopContainer>
  )
}
