/**
 * Contains the links for the Main Navigation Bar.
 *
 * Keywords: navbar, header
 */

import { MenuItemsType } from 'uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Exchange'),
    icon: 'Swap',
    href: '/swap',
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Earn',
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Pools',
  },
  {
    label: t('Info'),
    href: '/info',
    icon: 'Info',
  },
  {
    label: t('Ecosystem'),
    href: 'https://minidoge.finance/',
    icon: 'Ecosystem',
  },
]

export default config
