import React from 'react'
import { Svg, SvgProps } from 'uikit'

export const SlideSvgLight: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1660 339" {...props}>
      <path
        fill="url(#paint0_linear_light)"
        d="M 0 37.101562 L 39.753906 80.34375 C 79.507812 124.054688 158.785156 209.847656 238.757812 222.601562 C 317.921875 235.351562 397.546875 172.746094 476.359375 160.804688 C 556.332031 148.398438 636.304688 185.5 715.121094 179.355469 C 794.746094 172.746094 873.90625 124.054688 953.878906 117.445312 C 1033.15625 111.300781 1112.667969 148.398438 1192.640625 166.949219 C 1271.570312 185.5 1351.425781 185.5 1430.242188 179.355469 C 1510.097656 172.746094 1589.027344 161.152344 1629.59375 154.542969 L 1669 148.398438 L 1669 371 L 1629.246094 371 C 1589.492188 371 1510.214844 371 1430.242188 371 C 1351.078125 371 1271.453125 371 1192.640625 371 C 1112.667969 371 1032.695312 371 953.878906 371 C 874.253906 371 795.09375 371 715.121094 371 C 635.84375 371 556.332031 371 476.359375 371 C 397.429688 371 317.574219 371 238.757812 371 C 158.902344 371 79.972656 371 39.40625 371 L 0 371 Z M 0 37.101562 "
      />
      <defs>
        <linearGradient id="paint0_linear_light" x1="830" y1="84" x2="830" y2="339" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.48" />
          <stop offset="0.566389" stopColor="white" stopOpacity="0.35" />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        {/* <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
          <image href="./pye_old.png" x="0" y="0" width="100" height="100" />
        </pattern>
        <linearGradient id="paint0_linear_light" x1="830" y1="84" x2="830" y2="339" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="1" />
          <stop offset="0.566389" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="#F6F4F0" />
        </linearGradient> */}
      </defs>
    </Svg>
  )
}

export const SlideSvgDark: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1660 339" {...props}>
      <path
        fill="url(#paint0_linear_dark)"
        d="M 0 37.101562 L 39.753906 80.34375 C 79.507812 124.054688 158.785156 209.847656 238.757812 222.601562 C 317.921875 235.351562 397.546875 172.746094 476.359375 160.804688 C 556.332031 148.398438 636.304688 185.5 715.121094 179.355469 C 794.746094 172.746094 873.90625 124.054688 953.878906 117.445312 C 1033.15625 111.300781 1112.667969 148.398438 1192.640625 166.949219 C 1271.570312 185.5 1351.425781 185.5 1430.242188 179.355469 C 1510.097656 172.746094 1589.027344 161.152344 1629.59375 154.542969 L 1669 148.398438 L 1669 371 L 1629.246094 371 C 1589.492188 371 1510.214844 371 1430.242188 371 C 1351.078125 371 1271.453125 371 1192.640625 371 C 1112.667969 371 1032.695312 371 953.878906 371 C 874.253906 371 795.09375 371 715.121094 371 C 635.84375 371 556.332031 371 476.359375 371 C 397.429688 371 317.574219 371 238.757812 371 C 158.902344 371 79.972656 371 39.40625 371 L 0 371 Z M 0 37.101562 "
      />

      <defs>
        <linearGradient id="paint0_linear_dark" x1="830" y1="83.5" x2="830" y2="338.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#171923" stopOpacity="0.2" />
          <stop offset="0.545554" stopColor="#171923" stopOpacity="0.5" />
          <stop offset="1" stopColor="#171923" />
        </linearGradient>
      </defs>
    </Svg>
  )
}
