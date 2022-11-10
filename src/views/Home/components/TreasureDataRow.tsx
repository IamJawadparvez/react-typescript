import React from 'react'
import styled from 'styled-components'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
//import { useEmissionPerBlock } from 'hooks/useEmissionPerBlock'
//import { getTreasureAddress } from 'utils/addressHelpers'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
//import { usePriceTreasureBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  padding: 0 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 16px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 16px;
  grid-template-columns: repeat(1, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, auto);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

const TreasureDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  //const emissionsPerBlock = useEmissionPerBlock()
  //const burnedBalance = getBalanceNumber(useBurnedBalance(getTreasureAddress()))
  //const treasureSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  //const treasurePriceBusd = usePriceTreasureBusd()
  //const mcap = treasurePriceBusd.times(treasureSupply)
  //const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  return (
    <Grid>
      <StyledColumn>
        <Text color="textSubtle">{t('Total supply')}</Text>
        {/* {treasureSupply ? ( */}
        {/* <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={treasureSupply} /> */}
        <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={123} />
        {/* ) : ( */}
        <Skeleton height={24} width={126} my="4px" />
        {/* )} */}
      </StyledColumn>
      <StyledColumn>
        <Text color="textSubtle">{t('Burned to date')}</Text>
        {/* {burnedBalance >= 0 ? ( */}
        {/* <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} /> */}
        <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={123} />
        {/* ) : ( */}
        <Skeleton height={24} width={126} my="4px" />
        {/* )} */}
      </StyledColumn>
      <StyledColumn noMobileBorder>
        <Text color="textSubtle">{t('Market cap')}</Text>
        {/* {mcap?.gt(0) && mcapString ? ( */}
        <Heading scale="lg">{t('$%marketCap%', { marketCap: 123 })}</Heading>
        {/* ) : ( */}
        <Skeleton height={24} width={126} my="4px" />
        {/* )} */}
      </StyledColumn>
      <StyledColumn>
        <Text color="textSubtle">{t('Current emissions')}</Text>
        {/* {emissionsPerBlock?.gt(0) ? ( */}
        <Heading scale="lg">{t('%cakeEmissions% / block', { cakeEmissions: 123 })}</Heading>
        {/* ) : ( */}
        <Skeleton height={24} width={126} my="4px" />
        {/* )} */}
      </StyledColumn>
    </Grid>
  )
}

export default TreasureDataRow
