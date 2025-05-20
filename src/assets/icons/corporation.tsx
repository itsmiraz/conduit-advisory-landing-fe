import React from "react";

const Corporation = () => {
  return (
    <>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_90_630)">
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H42C47.5228 0 52 4.47715 52 10V42C52 47.5228 47.5228 52 42 52H10C4.47715 52 0 47.5228 0 42V10Z"
            fill="#9216FF"
            fill-opacity="0.04"
          />
          <path
            d="M10 0.5H42C47.2467 0.5 51.5 4.7533 51.5 10V42C51.5 47.2467 47.2467 51.5 42 51.5H10C4.7533 51.5 0.5 47.2467 0.5 42V10C0.500001 4.7533 4.7533 0.5 10 0.5Z"
            stroke="url(#paint0_radial_90_630)"
          />
          <path
            d="M36.5003 35.3334H38.8337V37.6667H13.167V35.3334H15.5003V15.5C15.5003 14.8557 16.0227 14.3334 16.667 14.3334H35.3337C35.978 14.3334 36.5003 14.8557 36.5003 15.5V35.3334ZM34.167 35.3334V16.6667H17.8337V35.3334H34.167ZM21.3337 24.8334H24.8337V27.1667H21.3337V24.8334ZM21.3337 20.1667H24.8337V22.5H21.3337V20.1667ZM21.3337 29.5H24.8337V31.8334H21.3337V29.5ZM27.167 29.5H30.667V31.8334H27.167V29.5ZM27.167 24.8334H30.667V27.1667H27.167V24.8334ZM27.167 20.1667H30.667V22.5H27.167V20.1667Z"
            fill="url(#paint1_linear_90_630)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_90_630"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.572549 0 0 0 0 0.0862745 0 0 0 0 1 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_90_630"
            />
          </filter>
          <radialGradient
            id="paint0_radial_90_630"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(26) rotate(90) scale(35.75 27.5913)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#D6BEFF" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_90_630"
            x1="26.0003"
            y1="14.3334"
            x2="26.0003"
            y2="37.6667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D6BEFF" />
            <stop offset="1" stop-color="#9216FF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Corporation;
