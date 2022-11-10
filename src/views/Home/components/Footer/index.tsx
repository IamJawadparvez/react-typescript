import React from 'react'
import styled from 'styled-components'

import useTheme from 'hooks/useTheme'
import PageSection from 'components/PageSection'
import { Flex, Heading, Text } from '../../../../uikit'



interface FooterProps  {
  account: string
}

const Footer: React.FC<FooterProps> = ({account}) => {
  const { theme } = useTheme()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1200px', padding: '16px 24px 32px' }
  return (
    
    <>
   {/* Homepage Footer
          @TODO: Refactor this into a separate component */}
          <PageSection
          innerProps={{ style: HomeSectionContainerStyles }}
          background={theme.colors.bodyBackground}
          index={2}
          hasCurvedDivider={false}
        >

          <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
            mt={[account ? '280px' : '50px', null, 0]}
            id="team"
          >
            <Flex flex="1" flexDirection="column">
              <Heading scale="xl" color="secondary" mb="12px">
                About us
              </Heading>
              <Text fontSize="20px" color="textSubtle" style={{ opacity: 0.6 }} mb="8px">
                PYESwap was created to fulfill a need in the blockchain industry. Tokens who use buyback in the tokenomics
                are forced to use the tokens built up in the contract, sell on the open market to fuel the buyback. UNTIL
                NOW. Now projects will have BNB that is built up in the contract and will be able to utilize the BNB to
                power up the buyback. Instead of creating a negative impact on the project, it will create a positive
                impact.
              </Text>
              <Text fontSize="20px" color="textSubtle" style={{ opacity: 0.6 }} mb="8px">
                Now, projects will have the ability to use the funds from the BNB for project development, marketing, etc.
                PYESwap is creating more opportunities for projects, investors, & institutions to utilize new blockchain
                technology that will further advance as crypto continues to be widely adopted.
              </Text>
            </Flex>
          </Flex>
        </PageSection> 
        </>
  );
  
}

export default Footer;