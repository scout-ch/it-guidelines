import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  background: url("data:image/svg+xml,<svg width='779' height='468' viewBox='0 0 779 468' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='389.5' cy='234' rx='389.5' ry='234' fill='rgb(255,255,255)' fill-opacity='0.5'/></svg>");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`


export default function Clippy() {
  return <svg width="91" height="248" viewBox="0 0 91 248" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path d="M31.0001 104C31.0001 104 31.0001 128.5 31.0001 156C31.0001 183.5 66.0001 184 66.0001 156C66.0001 128 66.0001 84.5 66.0001 40C66.0001 -4.50001 19 -9.5 19.0001 40C19.0001 89.5 19.0001 151 19.0001 199C19.0001 247 78.0001 248 78.0001 199C78.0001 150 78.0001 104 78.0001 104" stroke="#A7A7A7" stroke-width="8" />
    </g>
    <circle cx="20" cy="74" r="19.5" fill="url(#paint0_linear)" stroke="black" />
    <circle cx="19.5" cy="73.5" r="4.5" fill="black" />
    <circle cx="71" cy="74" r="19.5" fill="url(#paint1_linear)" stroke="black" />
    <circle cx="70.5" cy="73.5" r="4.5" fill="black" />
    <defs>
      <filter id="filter0_d" x="11.0001" y="0.724976" width="75" height="246.651" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient id="paint0_linear" x1="11.5" y1="65" x2="29" y2="94" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F2F2F2" />
        <stop offset="1" stop-color="#CECECE" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="62.5" y1="65" x2="80" y2="94" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F2F2F2" />
        <stop offset="1" stop-color="#CECECE" />
      </linearGradient>
    </defs>
  </svg>

}
