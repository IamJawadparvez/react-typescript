import React from 'react'
import styled from 'styled-components'
import { Grid as MuiGrid } from '@mui/material'
import useTheme from 'hooks/useTheme'
import PageSection from 'components/PageSection'
import { CardHeader } from '../../../../uikit'
import PYEDataRow from '../PYEDataRow'
import AppleDataRow from '../AppleDataRow'
import CherryDataRow from '../CherryDataRow'
import FarmsRow from '../FarmsRow'
import StatsCard from '../StatsCard'

const OuterBox = styled(PageSection)`
  padding: 48px 0;
  align-items: center;
  top: -100px;
`

const Body: React.FC = () => {
  const { theme } = useTheme()

  const AppleAndCherryFourByFourStyles: any = {
    margin: 0,
    width: '95%',
    padding: '0 0 0',
    boxShadow: 'rgb(243 141 186 / 75%) 0px 0px 12px',
    marginBottom: '15px',
    borderRadius: '24px',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: theme.colors.background,
  }
  const SideBySideStyles: any = {
    margin: '0',
    width: '100%',
    maxWidth: '1200px',
    padding: '16px 24px 32px',
    display: 'flex',
    alignItems: 'center',
  }

  const PyeFullWidth: any = {
    margin: '0',
    width: '95%',
    padding: '0 0 20px 0',
    boxShadow: 'rgb(243 141 186 / 75%) 0px 0px 12px',
    marginBottom: '15px',
    borderRadius: '24px',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: theme.colors.background,
  }

  const CardHeaderStyles: any = {
    textAlign: 'left',
    fontSize: '20px',
    fontWeight: '600',
    color: '#E4C48C',
  }

  const FarmsContainerStyle: any = {
    margin: '0 16px 0 16px',
    width: '96%',
    maxWidth: '1200px',
    padding: '0',
    borderRadius: '24px',
    boxShadow: 'rgb(243 141 186 / 75%) 0px 0px 12px',
  }

  return (
    <>
      <StatsCard />
      {/* <OuterBox
      innerProps={{ style: PyeFullWidth }}
      background={theme.colors.bodyBackground}
      index={2}
      hasCurvedDivider={false}
    >
      <CardHeader style={CardHeaderStyles}>PYE</CardHeader>
      <PYEDataRow />
    </OuterBox> */}

      {/* <OuterBox
        innerProps={{ style: SideBySideStyles }}
        //background={theme.colors.bodyBackground}
        index={-1}
        hasCurvedDivider={false}
      >
        <MuiGrid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <MuiGrid item xs={12} sm={12} md={6}>
            <OuterBox
              innerProps={{ style: AppleAndCherryFourByFourStyles }}
              //background={theme.colors.bodyBackground}
              index={-1}
              hasCurvedDivider={false}
            >
              <CardHeader style={CardHeaderStyles}>ApplePYE</CardHeader>
              <AppleDataRow />
            </OuterBox>
          </MuiGrid>

          <MuiGrid item xs={12} sm={12} md={6}>
            <OuterBox
              innerProps={{ style: AppleAndCherryFourByFourStyles }}
              // background={theme.colors.bodyBackground}
              index={-1}
              hasCurvedDivider={false}
            >
              <CardHeader style={CardHeaderStyles}>CherryPYE</CardHeader>
              <CherryDataRow />
            </OuterBox>
          </MuiGrid>
        </MuiGrid>
      </OuterBox> */}

      {/* <OuterBox
        innerProps={{ style: FarmsContainerStyle }}
        //background={theme.colors.bodyBackground}
        index={-1}
        hasCurvedDivider={false}
      >
        <CardHeader style={CardHeaderStyles}>Top Farms</CardHeader>
        <FarmsRow />
      </OuterBox> */}
    </>
  )
}

export default Body
