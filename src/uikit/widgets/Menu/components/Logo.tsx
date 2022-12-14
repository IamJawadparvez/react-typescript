import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Flex from '../../../components/Box/Flex'
import { LogoIcon, LogoWithTextIcon } from '../../../components/Svg'

interface Props {
  isDark: boolean
  href: string
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`

const Logo: React.FC<Props> = ({ isDark, href }) => {
  return (
    <Flex>
      <StyledLink to={href}>
        {/* <img src="/images/Logo.png" alt="pyeswap" width="92px" /> */}
        <img src="/images/home/pye/logoWithText.svg" alt="pyeswap" width="100px" />
      </StyledLink>
    </Flex>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
