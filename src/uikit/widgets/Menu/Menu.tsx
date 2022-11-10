import throttle from 'lodash/throttle'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ThemeSwitcher } from 'uikit'
import BottomNav from '../../components/BottomNav'
import { Box } from '../../components/Box'
import Flex from '../../components/Box/Flex'
import Footer from '../../components/Footer'
import MenuItems from '../../components/MenuItems/MenuItems'
import { SubMenuItems } from '../../components/SubMenuItems'
import { useMatchBreakpoints } from '../../hooks'
import Logo from './components/Logo'
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT } from './config'
import { NavProps } from './types'
import LangSelector from '../../components/LangSelector/LangSelector'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

// New ~quan
// const StyledNav = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: ${MENU_HEIGHT}px;
//   transform: translate3d(0, 0, 0);
//   padding-left: 0;
//   padding-right: 30px;
//   background: none;
//   border: none;
// `

// @TODO: Removed the background-color & border-bottom. Trying to make the nav not have a background color ~quan
// set explicity so It can accept the overflow of the Hero image as its background 
// Old
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.navBack};
  transform: translate3d(0, 0, 0);
  padding-left: 0;
  padding-right: 30px;
`


// @TODO: New continue working on this tomorrow ~quan 03/07/22
// const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
//   position: fixed;
//   top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
//   background-color: ${({ theme }) => theme.colors.navBack};
//   left: 0px
//   // transition: top 0.2s;
//   // height: ${({ height }) => `${height}px`};
//   width: 100%;
//   z-index: 20;
// `
// @TODO: Remove background-color, change z-index to 0 so that it doesn't override the image, transition has something to do with the navbar being able to support not having a background
// Old
const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  background-color: ${({ theme }) => theme.colors.navBack};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
  margin-left: 15px;
`

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
`

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`

const Menu: React.FC<NavProps> = ({
  userMenu,
  banner,
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  pyePriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyPyeLabel,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints()
  const [showMenu, setShowMenu] = useState(true)
  const refPrevOffset = useRef(window.pageYOffset)

  const totalTopMenuHeight = MENU_HEIGHT

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
          // Has scroll up
          // @TODO: Will cause the NavBar to display over whatever content is at the top of the screen. 
          setShowMenu(true)
        } else {
          // Has scroll down
          setShowMenu(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [totalTopMenuHeight])

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === 'Home')

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly)
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly)

  return (
    <Wrapper>
      <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
        {/* {banner && <TopBannerContainer height={topBannerHeight}>{banner}</TopBannerContainer>} */}
        <StyledNav>
          <Flex>
            <Logo isDark={isDark} href={homeLink?.href ?? '/'} />
            {/* @todo Change menu item colors ~Q$% */}
            {!isMobile && <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem} ml="24px" />}
          </Flex>
          <Flex alignItems="center" height="80%">
            <Box mt="4px">
              <LangSelector
                currentLang={currentLang}
                langs={langs}
                setLang={setLang}
                buttonScale="xs"
                color="lightText"
                hideLanguage
              />
            </Box>
            <Box mr='15px'>
              <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </Box>
            {/* @TODO Make the navbar transparent here ~Quan  */}
            {globalMenu} {userMenu}
          </Flex>
        </StyledNav>
      </FixedContainer>
      {subLinks && (
        <Flex justifyContent="space-around">
          <SubMenuItems items={subLinksWithoutMobile} mt={`${totalTopMenuHeight}px`} activeItem={activeSubItem} />

          {subLinksMobileOnly?.length > 0 && (
            <SubMenuItems
              items={subLinksMobileOnly}
              mt={`${totalTopMenuHeight}px`}
              activeItem={activeSubItem}
              isMobileOnly
            />
          )}
        </Flex>
      )}
      <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight}px` : '0'}>
        <Inner isPushed={false} showMenu={showMenu}>
          {children}
          {/* footerLinks, a config file contains href's for the links in the Footer. */}
          <Footer
            items={footerLinks}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            pyePriceUsd={pyePriceUsd}
            buyPyeLabel={buyPyeLabel}
            mb={[`${MOBILE_MENU_HEIGHT}px`, null, '0px']}
          />
        </Inner>
      </BodyWrapper>
      {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
    </Wrapper>
  )
}

export default Menu
