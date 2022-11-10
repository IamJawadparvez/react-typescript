import React from 'react'
import { Text, Flex } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
//import useAllEarnings from 'hooks/useAllEarnings'
//import { usePriceTreasureBusd } from 'state/farms/hooks'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

// const Block = styled.div`
//   margin-bottom: 24px;
// `

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bgInput};
  align-items: start;
  min-width: 100%;
  justify-content: space-between;
  border-radius: 24px;
  padding: 16px;
  margin: 0px 0px 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 48%;
    margin: 0px 16px 0px 0px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 320px;
    margin: 0px 16px 0px 0px;
  }
`

const CardImage = styled.img`
  width: 42px;
  height: 42px;
`

const CakeHarvestBalance = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  //const allEarnings = useAllEarnings()
  //const earningsSum = allEarnings.reduce((accum, earning) => {
  //   const earningNumber = new BigNumber(earning)
  //   if (earningNumber.eq(0)) {
  //     return accum
  //   }
  //   return accum + earningNumber.div(BIG_TEN.pow(18)).toNumber()
  // }, 0)
  // const treasurePriceBusd = usePriceTreasureBusd()
  // const earningsBusd = new BigNumber(earningsSum).multipliedBy(treasurePriceBusd).toNumber()

  return (
    <StyledContainer>
      <Text color="textSubtle" fontSize="18px">
        {t('TREASURE To Harvest')}
      </Text>
      {/* {earningsSum ? ( */}
      {/* <CardValue value={earningsSum} fontSize="20px" lineHeight="1.5" suffix=" TREASURE" /> */}
      <CardValue value={123} fontSize="20px" lineHeight="1.5" suffix=" TREASURE" />
      {/* ) : ( */}
      <Text fontSize="20px" lineHeight="1.4">
        --
      </Text>
      {/* )} */}
      {/* {treasurePriceBusd.gt(0) ? ( */}
      <CardBusdValue value={123} />
      {/* ) : ( */}
      <Text fontSize="14px" lineHeight="20px" color="textPrice">
        --
      </Text>
      {/* )} */}
    </StyledContainer>
  )
}

export default CakeHarvestBalance
