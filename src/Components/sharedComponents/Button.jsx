const CustomButton = ({ children, onClick }) => {
  return (
    <svg
      width="185"
      height="53"
      viewBox="0 0 185 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} 
      className="cursor-pointer bg-black rounded-4xl"
    >
      <g filter="url(#filter0_ii_1_165)">
        <rect
          width="185"
          height="53"
          rx="26.5"
          fill="white"
          fillOpacity="0.18"
        />
      </g>
      <foreignObject x="0" y="0" width="185" height="53">
        <div className="w-full h-full flex items-center justify-center  text-white font-semibold">
          {children}
        </div>
      </foreignObject>
      <defs>
        <filter
          id="filter0_ii_1_165"
          x="-2"
          y="-2"
          width="189"
          height="57"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <feOffset dx="-2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_165"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1_165"
            result="effect2_innerShadow_1_165"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CustomButton;
