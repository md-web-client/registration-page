import React from 'react';
function LunchLadyHairNet() {
  return (
    <svg style={{zIndex: 2}} className="mySVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 160 180">
      <title>hair-net</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <filter x="-15.9%" y="-30.0%" width="136.7%" height="162.5%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dx={0} dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={2} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="hair-net" transform="translate(35.000000, 22.000000)" stroke="#000000">
          <g id="inner-net" filter="url(#filter-1)" transform="translate(3.000000, 0.000000)">
            <path d="M81.8154541,29.0234746 L77.1016228,38.9951428 L81.8154541,29.0234746 Z M76.8285167,19.0218215 L72.1056877,33.9949784 L76.8285167,19.0218215 Z M66.9,10 L59.5,28.0436431 L66.9,10 Z M55.9285714,4.0862069 L52.5,24.0923077 L55.9285714,4.0862069 Z M42.5278151,0.087628866 L42.5278151,19.0218215 L42.5278151,0.087628866 Z M29.0909091,0.087628866 L32.5,22.0923077 L29.0909091,0.087628866 Z M16,8 L21.5,28.0436431 L16,8 Z M6,19.0218215 L12.5,36.5 L6,19.0218215 Z M0,28.0436431 L5,40 L0,28.0436431 Z" id="net-stripes" />
          </g>
          <path d="" id="Path-4" />
          <path d="M6.07456751,42.4964716 C7.97700872,41.4402757 26.5916448,21.0224513 45.5278151,21 C64.4639855,20.9775487 80.6449021,41.3385096 82.3987813,42.4059791 C84.1526605,43.4734487 85.932961,45.3376882 87.9776537,42.4964716 C89.3407821,40.6023273 89.3407821,37.9881098 87.9776537,34.6538193 C86.5361873,27.8846064 82.960322,21.2392378 77.2500579,14.7177134 C66.3434584,2.26160761 53.3305262,0.087628866 42.7996728,0.087628866 C31.9884985,0.087628866 18.2386193,5.02273118 8,17.5456592 C5.56646394,20.5221344 3.02754236,26.2248545 0.383235266,34.6538193 C-0.127745089,39.1781236 -0.127745089,41.792341 0.383235266,42.4964716 C1.1497058,43.5526676 4.17212629,43.5526676 6.07456751,42.4964716 Z" id="Path-5" strokeWidth={4} />
          <path d="M2,41 C16.3435662,19 30.6815508,8 45.0139539,8 C59.3463569,8 73.675039,19 88,41" id="Path-6" strokeWidth={2} />
        </g>
      </g>
    </svg>
  );
}
export default LunchLadyHairNet;