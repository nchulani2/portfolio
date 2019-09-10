import React from 'react';
import '../Styles/Portal.css';

const Portal = () => {
  return (
    <div className="portal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="svgPortal"
        viewBox="0 0 500 520">
        <circle cx="250" cy="270" r="250" fill="#555" />
        <circle cx="250.5" cy="270.5" r="214.5" fill="#494949" />
        <circle cx="250" cy="270" r="200" fill="#864343" />
        <circle cx="250" cy="270" r="200" fill="url(#paint0_radial)" />
        <g filter="url(#filter0_d)">
          <path
            fill="#FF6F6F"
            fillOpacity="0.5"
            d="M264 20v19.811l-.177.45c-4.839 12.34-22.401 12.045-26.823-.45V20h27z"
            className="bulbs"
          />
        </g>
        <g fillOpacity="0.5" filter="url(#filter1_d)">
          <path
            fill="#FF6F6F"
            d="M22.267 372.411l17.651-8.715.513-.037c13.497-.987 21.149 15.142 11.829 24.935l-17.652 8.715-12.341-24.898z"
            className="bulbs"
          />
        </g>
        <g filter="url(#filter2_d)">
          <path
            fill="#FF6F6F"
            fillOpacity="0.5"
            d="M464.867 399.097l-17.348-9.302-.328-.395c-8.631-10.405.102-25.976 13.501-24.074l17.348 9.302-13.173 24.469z"
            className="bulbs"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            width="67"
            height="69.351"
            x="217"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.435294 0 0 0 0.5 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            width="74.1"
            height="73.693"
            x="2.267"
            y="343.616"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.435294 0 0 0 0.5 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d"
            width="74.294"
            height="73.931"
            x="423.746"
            y="345.166"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.435294 0 0 0 0.5 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            className="portalBack"
            gradientTransform="matrix(0 200 -200 0 250 270)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="black" />
            <stop offset="1" stopColor="rgb(233, 75, 75)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Portal;
