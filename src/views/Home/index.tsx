/**
 * The homepage view. 
 * Contains the Hero, and the Body of the homepage. 
 * The body of the homepage contains data panels that 
 * display data for Treasure and its reward tokens. 
 */
import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Body from './components/Body/index'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  padding-bottom: 100px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 200px;
    padding-bottom: 200px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  return (
    <>
     <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.isDark ? 'url(./images/home/hero-bg-dark.png)' : 'url(./images/home/hero-bg-light.png)'}
        index={2}
        hasCurvedDivider={false}
      >
        <Hero account={account} />
      </StyledHeroSection> 
      <Body />
    </>
  )
}

export default Home
