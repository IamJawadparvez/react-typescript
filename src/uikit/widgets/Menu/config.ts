import { noop } from 'lodash'
import { DropdownMenuItems, DropdownMenuItemType } from '../../components/DropdownMenu/types'
import { MenuItemsType } from '../../components/MenuItems/types'
import { LinkStatus } from './types'

export const status = {
  LIVE: <LinkStatus>{
    text: 'LIVE',
    color: 'failure',
  },
  SOON: <LinkStatus>{
    text: 'SOON',
    color: 'warning',
  },
  NEW: <LinkStatus>{
    text: 'NEW',
    color: 'success',
  },
}

export const links: MenuItemsType[] = [
  {
    label: 'Trade',
    href: '/swap',
    icon: 'Swap',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pye.net',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pye.net/#/pool',
      },
      {
        label: 'Charts',
        href: 'https://exchange.pye.net/#/charts',
        iconName: 'Chart',
        isMobileOnly: true,
      },
    ],
  },
  {
    label: 'Earn',
    href: '/',
    icon: 'Earn',
    items: [
      {
        label: 'Earn',
        href: '/',
      },
      {
        label: 'Yield Farms',
        href: '/',
      },
      {
        label: 'Syrup pools',
        href: '/',
      },
    ],
  },
  {
    label: 'Win',
    href: '/',
    icon: 'Trophy',
    items: [
      {
        label: 'Win',
        href: '/',
      },
      {
        label: 'Predictions',
        href: '/',
        status: status.LIVE,
      },
      {
        label: 'Lottery',
        href: '/',
      },
    ],
  },
  {
    label: '',
    href: '/',
    icon: 'More',
    items: [
      {
        label: 'Info & Analytics',
        href: '/',
      },
      {
        label: 'IFO Token Sales',
        href: '/',
        status: status.SOON,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: 'NFT Collectibles',
        href: '/',
      },
      {
        label: 'Team Leaderboard',
        href: '/',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: 'Blog',
        href: '/',
      },
      {
        label: 'Docs & Guides',
        href: '/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: 'Wallet',
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: 'Transactions',
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: 'Dashboard',
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: 'Portfolio',
  },
  {
    label: 'Profile',
    href: '/profile',
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: 'https://pye.net',
    label: 'Link',
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: 'Disconnect',
  },
]

export const MENU_HEIGHT = 96
export const MOBILE_MENU_HEIGHT = 64