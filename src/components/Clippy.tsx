import React from 'react'
import { keyframes, css } from '@emotion/react'

const blink = keyframes`
  from, 8%, 12%, to {
    fill: black;
  }
  10% {
    fill: transparent;
  }
  `

const rolleye = keyframes`
  from, 8%, 12%, 16%, 20%, 30%, 50%, to  {
    transform: translate(0, 0);
    fill: black;
  }
  10%, 18% {
    fill: transparent;
  }
  35%, 45% {
    transform: translate(0, -15px)
  }
`

const focus = keyframes`
  from, 8%, 12%, 30%, 70%, 88%, 92%, to  {
    transform: translate(0, 0);
    fill: black;
  }
  10%, 90% {
    fill: transparent;
  }
  35%, 65% {
    transform: translate(-8px, -8px)
  }
  `

const svgStyles = css`

width: 10vh  ;

  .pupil {
    animation: ${blink} 3s ease infinite;
    transition: translate;
  }

  &.rolleye {
    .pupil {
      animation: ${rolleye} 5s ease-in-out infinite;
    }
  }

  &.focus {
    .pupil {
      animation: ${focus} 5s ease-in-out infinite;
    }
  }
`

interface ClippyProps {
  variant?: string
}

export default function Clippy({ variant }: ClippyProps) {
  return <svg className={variant} css={svgStyles} viewBox="0 0 91 248" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 104C31 104 31 128.5 31 156C31 183.5 66 184 66 156C66 128 66 84.5 66 40C66 -4.5 19 -9.5 19 40C19 89.5 19 151 19 199C19 247 78 248 78 199C78 150 78 104 78 104" stroke="#A7A7A7" strokeWidth="8" />
    <circle className="eye" cx="20" cy="74" r="19.5" fill="url(#paint0_linear)" stroke="black" />
    <circle className="pupil" cx="19.5" cy="73.5" r="4.5" fill="black" />
    <circle className="eye" cx="71" cy="74" r="19.5" fill="url(#paint1_linear)" stroke="black" />
    <circle className="pupil" cx="70.5" cy="73.5" r="4.5" fill="black" />
    <defs>
      <linearGradient id="paint0_linear" x1="11.5" y1="65" x2="29" y2="94" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F2F2F2" />
        <stop offset="1" stopColor="#CECECE" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="62.5" y1="65" x2="80" y2="94" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F2F2F2" />
        <stop offset="1" stopColor="#CECECE" />
      </linearGradient>
    </defs>
  </svg>

}
