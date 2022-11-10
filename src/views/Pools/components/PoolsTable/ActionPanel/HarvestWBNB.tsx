import React from 'react'
import { Button, Text, useModal, Flex, Skeleton } from 'uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { PoolCategory } from 'config/constants/types'
import { formatNumber, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { DeserializedPool } from 'state/types'
import { useBnbPrices } from 'views/Info/hooks/useBnbPrices'

import { ActionContainer, ActionTitles, ActionContent } from './styles'
import CollectModal from '../../PoolCard/Modals/CollectModal'

interface HarvestActionProps extends DeserializedPool {
  userDataLoaded: boolean
}

const HarvestWBNBAction: React.FunctionComponent<HarvestActionProps> = ({
  sousId,
  poolCategory,
  earningToken,
  userData,
  userDataLoaded,
  earningTokenPrice,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const bnbPrices = useBnbPrices()
  // const priceUSD = bnbPrices.current
  const priceUSD = 407

  const bnbEarnings = userData?.pendingBNBReward ? new BigNumber(userData.pendingBNBReward) : BIG_ZERO
  const bnbEarningTokenBalance = getBalanceNumber(bnbEarnings, 18)
  const bnbEarningTokenDollarBalance = getBalanceNumber(bnbEarnings.multipliedBy(priceUSD), 18)
  const hasBNBEarnings = bnbEarnings.gt(0)
  const fullBalance = getFullDisplayBalance(bnbEarnings, 18)
  const formattedBalance = formatNumber(bnbEarningTokenBalance, 3, 3)
  const isCompoundPool = sousId === 0
  const isBnbPool = poolCategory === PoolCategory.BINANCE

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={bnbEarningTokenDollarBalance}
      sousId={sousId}
      isBnbPool={isBnbPool}
      isCompoundPool={isCompoundPool}
    />,
  )

  const actionTitle = (
    <>
      <Text fontSize="13px" bold color="secondary" as="span" mr='4px'>
        {t('WBNB')}
      </Text>
      <Text fontSize="13px" bold color="textSubtle" as="span" >
        {t('Earned')}
      </Text>
    </>
  )

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>{actionTitle}</ActionTitles>
        <ActionContent>
          <Text fontSize="26px" color="textSubtle" fontWeight='700'>0</Text>
          <Button scale='sm' disabled>{t('Collect')}</Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataLoaded) {
    return (
      <ActionContainer>
        <ActionTitles>{actionTitle}</ActionTitles>
        <ActionContent>
          <Skeleton width={180} height="32px" marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>{actionTitle}</ActionTitles>
      <ActionContent>
        <Flex flex="1" pt="6px" flexDirection="column" alignSelf="flex-start">
          <>
            {hasBNBEarnings ? (
              <>
                <Balance lineHeight="1" bold fontSize="26px" decimals={5} value={bnbEarningTokenBalance} />
                {priceUSD > 0 && (
                  <Balance
                    display="inline"
                    fontSize="13px"
                    color="textSubtle"
                    decimals={2}
                    prefix="~"
                    value={bnbEarningTokenDollarBalance}
                    unit=" USD"
                  />
                )}
              </>
            ) : (
              <>
                <Text fontSize="26px" color="textSubtle" fontWeight='700'>0</Text>
                <Text fontSize="13px" color="textSubtle">
                  0 USD
                </Text>
              </>
            )}
          </>
        </Flex>
        {/* <Button scale='sm' disabled={!hasBNBEarnings} onClick={onPresentCollect}>
          {isCompoundPool ? t('Collect') : t('Harvest')}
        </Button> */}
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestWBNBAction
