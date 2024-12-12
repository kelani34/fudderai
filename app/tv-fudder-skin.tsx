import React from "react";

export const TVFudder = ({
  className,
  height = "594",
  width = "806",
}: {
  className?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 806 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <g filter="url(#filter0_f_15_21)">
        <ellipse cx="385.5" cy="567.5" rx="355.5" ry="10.5" fill="black" />
      </g>
      <g clip-path="url(#clip0_15_21)">
        <rect
          x="-1"
          y="-3"
          width="806.966"
          height="583"
          fill="url(#pattern0_15_21)"
        />
      </g>
      <g style={{ mixBlendMode: "color" }}>
        <rect
          x="152"
          y="476"
          width="570"
          height="102"
          fill="url(#pattern1_15_21)"
        />
      </g>
      <g style={{ mixBlendMode: "color" }}>
        <rect
          x="58"
          y="476"
          width="658"
          height="102"
          fill="url(#pattern2_15_21)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_15_21"
          x="14.2"
          y="541.2"
          width="742.6"
          height="52.6"
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
          <feGaussianBlur
            stdDeviation="7.9"
            result="effect1_foregroundBlur_15_21"
          />
        </filter>
        <pattern
          id="pattern0_15_21"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_15_21"
            transform="scale(0.000355366 0.000491884)"
          />
        </pattern>
        <pattern
          id="pattern1_15_21"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_15_21"
            transform="matrix(0.000400877 0 0 0.0022402 0 -1.83333)"
          />
        </pattern>
        <pattern
          id="pattern2_15_21"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_15_21"
            transform="matrix(0.000347264 0 0 0.0022402 -0.156535 -1.83333)"
          />
        </pattern>
        <clipPath id="clip0_15_21">
          <rect width="806" height="578" fill="white" />
        </clipPath>
        <image
          id="image0_15_21"
          width="2814"
          height="2033"
        />
        <image
          id="image1_15_21"
          width="3000"
          height="2000"
        />
      </defs>
    </svg>
  );
};