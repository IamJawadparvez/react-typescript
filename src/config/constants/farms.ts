import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
 /** {
 *   pid: 0,
 *   lpSymbol: 'APPLE',
 *     97: '',
 *    56: '0x390deb8148397F04f59d99a224Da0e9365D5CB19',
 *   },
 *  token: serializedTokens.cherry,
 *   quoteToken: serializedTokens.wbnb,
 * },
 */ 
  {
    pid: 8,
    lpSymbol: 'PYE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x892b21411c781b242d4f2b6320796c698e49d32d',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'PYE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcfd6916e508254fc793d0ae0dc1ca48215bbd176',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 23,
    lpSymbol: 'PYE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xFDd6BfD60A4f8e1CcF56bEefAa2E289dA0b6e497',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'APPLEPYE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x925c9025a99ff3a20e30734b7a9dda79ed9a55a2',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'APPLEPYE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x5fd579c32f8a7b42ec619c2e2cf5231d2ead52ab',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 20,
    lpSymbol: 'APPLEPYE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x1157434FEA6979D0eb38B1bf69c29E9A89D1dC36',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'CHERRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xed262bfdaa1c07de4ac7dfb67d42f253cb929947',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'CHERRY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xba4b9b90af22d038f00f2d323c44922b2a41a084',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 21,
    lpSymbol: 'CHERRY-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x5e13251E6AeC4A10617d34853cBa548e92cDe804',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 11,
    lpSymbol: 'FORCE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8832662e9C303c71cC40D9C4E339b2ebf49F3151',
    },
    token: serializedTokens.force,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 12,
    lpSymbol: 'FORCE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8af2d9BA53C59a25405D5Cd37bDdA599B742B8d5',
    },
    token: serializedTokens.force,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 22,
    lpSymbol: 'FORCE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x446d2349E2a09B1748286D609afd6798B727AC4f',
    },
    token: serializedTokens.force,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 34,
    lpSymbol: 'FORCE-PYE LP',
    lpAddresses: {
      97: '',
      56: '0x62D30ECDF7B4e1Bbd7B786c37f93322e52FEf366',
    },
    token: serializedTokens.force,
    quoteToken: serializedTokens.pye,
  },
  {
    pid: 26,
    lpSymbol: 'MINIDOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC97a656729d098e4A81c79cc8d56f98Ec7d2a1Ca',
    },
    token: serializedTokens.minidoge,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'MINIDOGE-PYE LP',
    lpAddresses: {
      97: '',
      56: '0x8e90838574422a88c4ea6a249e2a9de3cd4735a3',
    },
    token: serializedTokens.minidoge,
    quoteToken: serializedTokens.pye,
  },
  {
    pid: 27,
    lpSymbol: 'SYMBULL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC41f72a7fFA1Be46129C7b3EBb24d4bB83119CD6',
    },
    token: serializedTokens.symbull,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 35,
    lpSymbol: 'TREASURE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9e036E8A24Ec9309b39C8c6c28C38Be0cfe256c0',
    },
    token: serializedTokens.treasure,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'SYMBULL-PYE LP',
    lpAddresses: {
      97: '',
      56: '0xa364b743ec6a299096561f7006b645b36b423499',
    },
    token: serializedTokens.symbull,
    quoteToken: serializedTokens.pye,
  },
  {
    pid: 13,
    lpSymbol: 'PIN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x386093Ed76336e6F01B31149967a76Eb8e4f19C2',
    },
    token: serializedTokens.pin,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'PIN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xddB3d7518cd7a54A9FbFC9Cc7d2Eb98Aa6036e04',
    },
    token: serializedTokens.pin,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 10,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe5F7afE8FC4771d2035EEf4D53B32CF3514edF5C',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },  
  {
    pid: 28,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5323cc3F53011fABaA2C42ee12b4E527A15221dB',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 29,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xA227b1026FAc98a1eB39Be93F76588A285629c88',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 30,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xca0dbAb04c7790840a0D4E85690cde36062a8b0d',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 31,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1b1c099B771f85aD45147b9f6f344524318ADe46',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 32,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3aedE6cB1D6b028F0E9604069A7575B95E785689',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 25,
    lpSymbol: 'ADA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA7B42278a5e4CEA586a50C522fDef95035C9ea15',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 17,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5eBA5FA6933e4D3A4CDAFb1F608a45Ec3253D4AA',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 33,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xc32409A97AF819D738E4e69A2422ED48A8594782',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 15,
    lpSymbol: 'FTM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDA54EdeCce7bd0150f02dA94b180B23270381Ba1',
    },
    token: serializedTokens.ftm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'FTM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x54618E852Bf52Ac0cf27AD224d8Df58C07984EbF',
    },
    token: serializedTokens.ftm,
    quoteToken: serializedTokens.busd,
  }, 
  {
    pid: 18,
    lpSymbol: 'FIST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8248103f386B3B17b748b9D42c29F860b5bB49F7',
    },
    token: serializedTokens.fist,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'FIST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x02687966b33e91f11E47Eb3761af6E6eC6171932',
    },
    token: serializedTokens.fist,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 24,
    lpSymbol: 'HERO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xE776489C9cc85753fe82AA5f73cAE6671c56BcB2',
    },
    token: serializedTokens.hero,
    quoteToken: serializedTokens.wbnb,
  },

  {
    pid: 36,
    lpSymbol: 'PYE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6Eeb4A9C238D84F1DEF4144D74C8d179280d39CA',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 37,
    lpSymbol: 'PYE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xeA948F34C5aFBd496d3665dcbaF5AFA75648c5e7',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 55,
    lpSymbol: 'PYE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xB343B64D74c4d35d6a9fA356D75Bc7BE37a17f5f',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 38,
    lpSymbol: 'APPLEPYE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x01bf64cFe880d27C4DF8Ca79Aac888cf068f0eE7',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 39,
    lpSymbol: 'APPLEPYE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE9149FcA76B36BF9Df24EfBB4bcAe24ba9a50419',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 53,
    lpSymbol: 'APPLEPYE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xdF607183Aaa7B9F4E1C0C75B82323607E34e3B60',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 40,
    lpSymbol: 'CHERRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x34f596595e5a672d33a67931c7d53128a0C0Cfa8',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 41,
    lpSymbol: 'CHERRY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4e47d0FAF7e6794e590846E30C1DB5F2cBc75746',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 54,
    lpSymbol: 'CHERRY-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x9Bff9a9a1791FE570Cc092Fbb0eb302A7D2daE89',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.usdt,
  },
  // {
  //   pid: 11,
  //   lpSymbol: 'FORCE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8832662e9C303c71cC40D9C4E339b2ebf49F3151',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'FORCE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8af2d9BA53C59a25405D5Cd37bDdA599B742B8d5',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'FORCE-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x446d2349E2a09B1748286D609afd6798B727AC4f',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'FORCE-PYE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x62D30ECDF7B4e1Bbd7B786c37f93322e52FEf366',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.pye,
  // },
  {
    pid: 50,
    lpSymbol: 'MINIDOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe85312fefBd79D20ee7780e61Bc3B73bb9012dD5',
    },
    token: serializedTokens.minidoge,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'MINIDOGE-PYE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8e90838574422a88c4ea6a249e2a9de3cd4735a3',
  //   },
  //   token: serializedTokens.minidoge,
  //   quoteToken: serializedTokens.pye,
  // },
  {
    pid: 51,
    lpSymbol: 'SYMBULL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb6Af5a90EdC163e41750A2661612FC3637633F6E',
    },
    token: serializedTokens.symbull,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 64,
    lpSymbol: 'TREASURE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6664C15baf148E05BCF1A38DA0631cfB288C7FA0',
    },
    token: serializedTokens.treasure,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 7,
  //   lpSymbol: 'SYMBULL-PYE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa364b743ec6a299096561f7006b645b36b423499',
  //   },
  //   token: serializedTokens.symbull,
  //   quoteToken: serializedTokens.pye,
  // },
  {
    pid: 56,
    lpSymbol: 'PIN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x13D436573DFce0296d2826097eF7465FfA28904b',
    },
    token: serializedTokens.pin,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 57,
    lpSymbol: 'PIN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xD1e13fE26DCB5Ac2698C2b955725a381775fC9EA',
    },
    token: serializedTokens.pin,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 44,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2298AAe550ED57f16c7F7e5559b04672601261e4',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },  
  {
    pid: 46,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD02c6706Ff6820038C32a8D5590398BC9f37C5A2',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 47,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x31b9E2fD399Fac74f6cd04a2120E4d0174a41868',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 48,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd47c5aeEAF3122CeC65c57511aCE6E1919BbcAf0',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 65,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x67FaD6831B41709bCCAC8fCc8d0E283710f288Cb',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 66,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x357f04EdB33D21e93cCA4C9d42F5cDd11BfbA3c2',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 63,
    lpSymbol: 'ADA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x68D43ebfB3691C730C5FC394B3DdA85357002B43',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 52,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x82d1432dDCE15FEce1528FDb392959c265d57AA4',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 49,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x286107726A9178E4077161F71dA436a7cD9e3271',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 58,
    lpSymbol: 'FTM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa82448Ee3AA40c2B33d586498999E7e5FB1cb64F',
    },
    token: serializedTokens.ftm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 59,
    lpSymbol: 'FTM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0D7816E76D1B141466770827f12E2EAd9870b150',
    },
    token: serializedTokens.ftm,
    quoteToken: serializedTokens.busd,
  }, 
  {
    pid: 60,
    lpSymbol: 'FIST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD277Ebf1d42558EA0ECdAa18A06dDE4162e746eC',
    },
    token: serializedTokens.fist,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 61,
    lpSymbol: 'FIST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x54AB89CD6f71cAD7C7E68330d88FC46897579A54',
    },
    token: serializedTokens.fist,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 62,
    lpSymbol: 'HERO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x85639feD98A604900646780815D5e5BB3F021e3F',
    },
    token: serializedTokens.hero,
    quoteToken: serializedTokens.wbnb,
  },

  {
    pid: 69,
    lpSymbol: 'PYE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5899c17c49c46b57663ee9d5091381473b7f05a0',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 70,
    lpSymbol: 'PYE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x5cd5f264369a0c946afd3bbe69e06104ee45bd1d',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 84,
    lpSymbol: 'PYE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xC95C830424b12Ba929273F0534bE2485B648565C',
    },
    token: serializedTokens.pye,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 71,
    lpSymbol: 'APPLEPYE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb09718275aeb6d6c31fe52da6665d2ba05f266d7',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 72,
    lpSymbol: 'APPLEPYE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x322a1e176702Ce48734eea380781053F9dc1BDC4',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 81,
    lpSymbol: 'APPLEPYE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x74b0684A5B1195afcf61c87477B4329934F9EE7E',
    },
    token: serializedTokens.apple,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 73,
    lpSymbol: 'CHERRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0d89d802bfafbf5324e2ff0336d9ae547b9533c6',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 74,
    lpSymbol: 'CHERRY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x23fdc98038129bef762fADCE3Cd6FaE9D57812A1',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 82,
    lpSymbol: 'CHERRY-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xE76743B78C091b469F502bF57189A3fd8223777f',
    },
    token: serializedTokens.cherry,
    quoteToken: serializedTokens.usdt,
  },
  // {
  //   pid: 11,
  //   lpSymbol: 'FORCE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8832662e9C303c71cC40D9C4E339b2ebf49F3151',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'FORCE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8af2d9BA53C59a25405D5Cd37bDdA599B742B8d5',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'FORCE-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x446d2349E2a09B1748286D609afd6798B727AC4f',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'FORCE-PYE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x62D30ECDF7B4e1Bbd7B786c37f93322e52FEf366',
  //   },
  //   token: serializedTokens.force,
  //   quoteToken: serializedTokens.pye,
  // },
  {
    pid: 87,
    lpSymbol: 'MINIDOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5F45488858186186Da85399cF67282066E16b361',
    },
    token: serializedTokens.minidoge,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'MINIDOGE-PYE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8e90838574422a88c4ea6a249e2a9de3cd4735a3',
  //   },
  //   token: serializedTokens.minidoge,
  //   quoteToken: serializedTokens.pye,
  // },
  {
    pid: 88,
    lpSymbol: 'SYMBULL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF5Ea2D40B6A318AD1403B22a61B2A093C44A156e',
    },
    token: serializedTokens.symbull,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 89,
    lpSymbol: 'TREASURE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x574c738e262233e2D2D428949F501f8cCC05Ab67',
    },
    token: serializedTokens.treasure,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 7,
  //   lpSymbol: 'SYMBULL-PYE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa364b743ec6a299096561f7006b645b36b423499',
  //   },
  //   token: serializedTokens.symbull,
  //   quoteToken: serializedTokens.pye,
  // },
  // {
  //   pid: 56,
  //   lpSymbol: 'PIN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x13D436573DFce0296d2826097eF7465FfA28904b',
  //   },
  //   token: serializedTokens.pin,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 57,
  //   lpSymbol: 'PIN-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD1e13fE26DCB5Ac2698C2b955725a381775fC9EA',
  //   },
  //   token: serializedTokens.pin,
  //   quoteToken: serializedTokens.busd,
  // },
  {
    pid: 75,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x039e8dc15FBF3eBff7845eF654bA0616644A93c0',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },  
  {
    pid: 90,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2D2c7bb6e9F4745D303A1dD30bB80F62Cb4C8e18',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 91,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x67385c6549b91F4748C60AAA07C8E7Ef3D0AD971',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 92,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC785D30d39CDF117d4a45D31c8D27E3aE340e904',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 93,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6a44ca67d24EEaC1B1338D33eDAC9Bd09d074D93',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 94,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b40e0b7840Fd9C6F2790f65C312Af99B2599E3C',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 86,
    lpSymbol: 'ADA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x44cBF8b15CcbEd7eA9d90B581B570a818F412E3D',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 78,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA2cb7476D1aa95B0fF170BFd72FDDAE38C7169D8',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 95,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xDa781B284c0Dde9128E4341EaaA7213C47a53Df7',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 76,
    lpSymbol: 'FTM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB1bd15e8F21F2a68C18A5377f34D55B8481099d9',
    },
    token: serializedTokens.ftm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 77,
    lpSymbol: 'FTM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4Bc76e5FB8a1ce8F606f6D2f255d13e8fC7d12a7',
    },
    token: serializedTokens.ftm,
    quoteToken: serializedTokens.busd,
  }, 
  {
    pid: 79,
    lpSymbol: 'FIST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe1393C8b8de3cdCDD57cbDA055453dCA90c3Fb8F',
    },
    token: serializedTokens.fist,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 80,
    lpSymbol: 'FIST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0641764A1FcEf1034B2dA19c5b4D64d760f5Ae26',
    },
    token: serializedTokens.fist,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 85,
    lpSymbol: 'HERO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3A8A4B9FB3e472cE6f70ce5A0ec4fd9377A2aBCa',
    },
    token: serializedTokens.hero,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
