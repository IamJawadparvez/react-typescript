import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import {Flex, Box, Card, CardHeader} from 'uikit'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useGetTopFarmsByApr from 'views/Home/hooks/useGetTopFarmsByApr'
import TopFarm from './TopFarm'
import RowHeading from './RowHeading'
import useTheme from "../../../../hooks/useTheme";
import { FarmWithStakedValue } from '../../../Farms/components/FarmCard/FarmCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(5, auto);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
  }
`

const FarmsRow = () => {
  const { t } = useTranslation()
  const { theme } = useTheme();
  const { observerRef, isIntersecting } = useIntersectionObserver()
  console.log(`isIntersecting = ${isIntersecting}`)
  const { topFarms } = useGetTopFarmsByApr(isIntersecting)
  const counter = 0;

  
  // Create a useCallbcak FN
  // Get the farms and place them into an array
  // using .map or something like it 
  
  /*
  // Callback Function
  const transformFarms = useCallback((tasksObj) => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);
  */

  

  return (
    <div ref={observerRef}>
      <Card style={{ background: theme.colors.background, borderRadius: '0 0 24px 24px' }}>
        <Flex flexDirection="column">
          <Flex mb="24px">
            {/* <CardHeader>{t('Top Farms')} */}
            {/* <RowHeading text={t('Top Farms')} /> */}
            {/* </CardHeader> */}
          </Flex>
          <Box height={['240px', null, '80px']}>
            <Grid>
              {topFarms.map((topFarm, index) => (
                <TopFarm
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  title={topFarm?.lpSymbol}
                  percentage={topFarm?.apr + topFarm?.lpRewardsApr}
                  index={index}
                  visible
                />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Card>

    </div>
  )
}

export default FarmsRow
