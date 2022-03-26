import React from 'react';

import ukraineFlag from './assets/img/flag-ukraine.jpg';
import s from './WavingFlag.module.css';

export type TWavingFlagProps = {
  animationSpeed?: number,
  boxShadowColor?: string,
  className?: string,
  curvature?: number,
  flag?: string,
  flagContainerClassName?: string,
  fromLeft?: boolean,
  height?: number,
  isShadow?: boolean,
  width?: number
};

/**
 * @component
 *
 * @prop {number} [animationSpeed=1] - Speed of the "waving" animation (seconds)
 * @prop {string} [boxShadowColor='#f8f8f8'] - CSS color property. Flag shadow color.
 * @prop {string} [className] - Container className
 * @prop {number} [curvature=10] - Wave distortion degree. The smaller the value, the smoother the wave.
 * @prop {string} [flag] - JPG/PNG flag picture URL
 * @prop {string} [flagContainerClassName] - Flag container className
 * @prop {boolean} [fromLeft=true] - Set this param to "false" if you want to show the flag from right side of screen
 * @prop {number} [height=200] - Flag height
 * @prop {boolean} [isShadow=true] - Option to disable flag shadow
 * @prop {number} [width=300] - Flag width
 *
 * @param {TWavingFlagProps} props
 * @returns {JSX.Element} Returns animated waving flag.
 *
 * @example
    ```
    const App = () => {

      // ...

      return (
        <div>
          <WavingFlag
            flag="https://external-preview.redd.it/QVS6D1FlDcpx7byaow-LyO4GpezIlepIkozbzwqtFOY.png?auto=webp&s=d60d5e9953842259ade3c425c55354f6651029f4"
            height={200}
            width={300}
          />
        </div>
      );
    };
    ```
 */

export const WavingFlag = (props: TWavingFlagProps): JSX.Element => {

  const {
    className,
    animationSpeed = 1,
    curvature = 10,
    fromLeft = true,
    flagContainerClassName,
    height = 200,
    boxShadowColor = '#f8f8f8',
    isShadow = true,
    width = 300,
    flag = ukraineFlag,
  } = props;

  const flagWaveHeight = Math.floor(height * 0.1);
  const flagHeight = Math.floor(height - flagWaveHeight * 2);
  const flagWidth = Math.floor(width * 0.9);

  const cssAnimationFlagWaveName = 'flag-wave';

  const cssAnimationFlagWave = `
    @keyframes ${cssAnimationFlagWaveName} {
      0% { top: ${flagWaveHeight}px; }
      100% { top: -${flagWaveHeight}px; }
    }
  `;

  const maskName = 'wave-mask';

  const maskWaveSize = width * 0.1;

  return (
    <svg
      className={`${s.WavingFlag__svg} ${className}`}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {cssAnimationFlagWave}
      </style>

      <mask
        id={maskName}

      >
        <rect
          fill="white"
          height={height}
          width={width}
          x="0"
          y="0"
        />

        <g style={{ transform: fromLeft ? `translateX(${Math.floor(flagWidth) + 1}px)` : `translateX(${Math.floor(maskWaveSize) - 1}px)` }}>
          <g>
            <path
              className={s.WavingFlag__path}
              d={
                `
                  M ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.5}
                  
                  C ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.225}
                    ${fromLeft ? '-' : ''}${width * 0.015} ${height * 0.03}
                    0 0
                  
                  V ${height}
                  
                  C ${fromLeft ? '-' : ''}${width * 0.012} ${height * 0.95} 
                    ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.75}  
                    ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.5} 
                  
                  Z
                `
              }
              fill="black"
              style={
                {
                  animationDirection: fromLeft ? 'alternate' : 'alternate-reverse',
                  animationDuration: `${animationSpeed}s`,
                }
              }
            />
          </g>
        </g>
      </mask>

      <foreignObject
        className={s.WavingFlag__foreignObject}
        height={height}
        mask={`url(#${maskName})`}
        width={width}
        x="0"
        y="0"
      >
        <div className={`${s.WavingFlag__wrapper} ${fromLeft ? s.left : ''}`}>

          <div
            className={`${s.WavingFlag__container} ${flagContainerClassName}`}
            style={{ height: flagHeight + 'px' }}
          >
            {
              Array(flagWidth).fill(null)
                .map((_, i) => (
                  <div
                    className={s.WavingFlag__flag}
                    key={`WavingFlag-element-${i}`}
                    style={
                      {
                        animationDelay: -i * curvature + 'ms',
                        animationDuration: `${animationSpeed}s`,
                        animationName: cssAnimationFlagWaveName,
                        background: `url(${flag})`,
                        backgroundPosition: i + 'px 50%',
                        backgroundSize: `${flagWidth}px 100%`,
                        boxShadow: isShadow ? `0 ${flagWidth * 0.013}px ${boxShadowColor}80, 0 -${flagWidth * 0.013}px ${boxShadowColor}80` : undefined,
                      }
                    }
                  />
                ))
            }
          </div>
        </div>
      </foreignObject>
    </svg>
  );
};
