import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex,Link, Heading, Button, Text } from 'uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

interface HeroProps  {
  account: string
}

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`	
  width: 100%;	
  animation: ${flyingAnim} 3.5s ease-in-out infinite;	
`

const imagePath = '/images/home/hero.png'


const pyesStyling: any = {
  'transform': 'scaleX(-1)'
}

const Hero: React.FC<HeroProps> = ({account}) => {
  const { t } = useTranslation()
  const { theme } = useTheme()


  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
      >
        <Flex flex="1" flexDirection="column">	
          <Heading scale="xl" mb="24px">	
            {t('The Decentralized Trading Platform of Doges.')}	
          </Heading>	
          <Text mb="24px">	
            {t('Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.')}	
          </Text>	
          <Flex>	
            {!account && <ConnectWalletButton mr="8px" />}	
            <Link mr="16px" href="/swap">	
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>	
            </Link>	
          </Flex>	
        </Flex>	
        <Flex	
          height={[null, null, null, '100%']}	
          width={['80%', null, null, '100%']}	
          flex={[null, null, null, '1']}	
          mt={['48px', null, null, '0']}	
          mb={['24px', null, null, '0']}	
          position="relative"	
        >	
          <BunnyWrapper>	
            <img src={`${imagePath}`} alt={t('Three Doges')} />	
          </BunnyWrapper>	
        </Flex>	
      </Flex>	
    </>	
  
  )
}

export default Hero