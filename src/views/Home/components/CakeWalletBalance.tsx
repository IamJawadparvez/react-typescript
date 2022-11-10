import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
//import { getTreasureAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
//import { usePriceTreasureBusd } from 'state/farms/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

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
    margin: 0px 0px 0px 16px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 320px;
    margin: 0px 0px 0px 16px;
  }
`

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  // const { balance: treasureBalance } = useTokenBalance(getTreasureAddress())
  // const treasurePriceBusd = usePriceTreasureBusd()
  // const busdBalance = new BigNumber(getBalanceNumber(treasureBalance)).multipliedBy(treasurePriceBusd).toNumber()
  // const { account } = useWeb3React()

  return (
    <StyledContainer>
      <Text color="textSubtle" fontSize="18px">
        {t('TREASURE Balance')}
      </Text>
      {/* {treasureBalance.gt(0) ? ( */}
      <CardValue
        // value={getBalanceNumber(treasureBalance)}
        value={1234}
        fontSize="20px"
        decimals={0}
        lineHeight="1.5"
        suffix=" TREASURE"
      />
      {/* ) : ( */}
      <Text fontSize="20px" lineHeight="1.4">
        --
      </Text>
      {/* )} */}
      {/* {treasurePriceBusd.gt(0) ? ( */}
      {/* <CardBusdValue value={busdBalance} /> */}
      <CardBusdValue value={123} />
      {/* ) : ( */}
      <Text fontSize="14px" lineHeight="20px" color="textPrice">
        --
      </Text>
      {/* )} */}
    </StyledContainer>
  )
}

export default CakeWalletBalance
