'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAMgBLAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABwj/2gAIAQEAAAAAnYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTwAAAAACnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAACAf/2gAIAQIQAAAAoIAAAAAAAAAAAAAAAAAAGPAAASAAAAAAAAAAAAAAAAAAAD//xAAWAQEBAQAAAAAAAAAAAAAAAAAABwb/2gAIAQMQAAAAi4AAAAAAAAAAAAAAAAAANwAABbgAAAAAAAAAAAAAAAAAAf/EABwQAAAHAQEAAAAAAAAAAAAAAAEEBhdRk9EAgP/aAAgBAQABPwD3c0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGc0qSg5cGeo//xAAcEQAABwEBAAAAAAAAAAAAAAACBQYXUpPSAGD/2gAIAQIBAT8A9k+CKiY0B1z4IqJjQHXPgiomNAdc+CKiY0B1z4IqJjQHXPgiomNAdc+CKiY0B1z4IqJjQHXPgiomNAdc+CKiY0B1z4IqJjQHXPgiomNAdc+CKiY0B1z4IqJjQHXPgiomNAdc+CKiY0B1z4IqJjQHXPgiomNAdc+CKiY0B17P/8QAHBEAAAcBAQAAAAAAAAAAAAAAAQQFF1GT0QBg/9oACAEDAQE/APZN+vyVsHOb9fkrYOc36/JWwc5v1+Stg5zfr8lbBzm/X5K2DnN+vyVsHOb9fkrYOc36/JWwc5v1+Stg5zfr8lbBzm/X5K2DnN+vyVsHOb9fkrYOc36/JWwc5v1+Stg5zfr8lbBzm/X5K2DnN+vyVsHPZ//Z";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@-webkit-keyframes WavingFlag-module_waving-mask__9eazW{0%{transform:translateY(10%)}to{transform:translateY(-10%)}}@keyframes WavingFlag-module_waving-mask__9eazW{0%{transform:translateY(10%)}to{transform:translateY(-10%)}}.WavingFlag-module_WavingFlag__path__-41-D{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:WavingFlag-module_waving-mask__9eazW;animation-name:WavingFlag-module_waving-mask__9eazW;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;display:inline-block;position:relative}.WavingFlag-module_WavingFlag__foreignObject__kA5WY{display:flex}.WavingFlag-module_WavingFlag__wrapper__jOiJX{align-items:center;display:flex;height:100%;justify-content:flex-end;width:100%}.WavingFlag-module_WavingFlag__wrapper__jOiJX.WavingFlag-module_left__TWLqh{justify-content:flex-start}.WavingFlag-module_WavingFlag__container__cSiAs{display:flex;height:-webkit-max-content;height:-moz-max-content;height:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content}.WavingFlag-module_WavingFlag__flag__RvVoW{animation-direction:alternate-reverse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;display:inline-block;height:100%;position:relative;width:1px}";
var s = {"WavingFlag__path":"WavingFlag-module_WavingFlag__path__-41-D","waving-mask":"WavingFlag-module_waving-mask__9eazW","WavingFlag__foreignObject":"WavingFlag-module_WavingFlag__foreignObject__kA5WY","WavingFlag__wrapper":"WavingFlag-module_WavingFlag__wrapper__jOiJX","left":"WavingFlag-module_left__TWLqh","WavingFlag__container":"WavingFlag-module_WavingFlag__container__cSiAs","WavingFlag__flag":"WavingFlag-module_WavingFlag__flag__RvVoW"};
styleInject(css_248z);

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
const WavingFlag = (props) => {
    const { className, animationSpeed = 1, curvature = 10, fromLeft = true, flagContainerClassName, height = 200, boxShadowColor = '#f8f8f8', isShadow = true, width = 300, flag = img, } = props;
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
    return (React__default["default"].createElement("svg", { className: `${s.WavingFlag__svg} ${className}`, height: height, viewBox: `0 0 ${width} ${height}`, width: width, xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("style", null, cssAnimationFlagWave),
        React__default["default"].createElement("mask", { id: maskName },
            React__default["default"].createElement("rect", { fill: "white", height: height, width: width, x: "0", y: "0" }),
            React__default["default"].createElement("g", { style: { transform: fromLeft ? `translateX(${Math.floor(flagWidth) + 1}px)` : `translateX(${Math.floor(maskWaveSize) - 1}px)` } },
                React__default["default"].createElement("g", null,
                    React__default["default"].createElement("path", { className: s.WavingFlag__path, d: `
                  M ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.5}
                  
                  C ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.225}
                    ${fromLeft ? '-' : ''}${width * 0.015} ${height * 0.03}
                    0 0
                  
                  V ${height}
                  
                  C ${fromLeft ? '-' : ''}${width * 0.012} ${height * 0.95} 
                    ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.75}  
                    ${fromLeft ? '-' : ''}${maskWaveSize} ${height * 0.5} 
                  
                  Z
                `, fill: "black", style: {
                            animationDirection: fromLeft ? 'alternate' : 'alternate-reverse',
                            animationDuration: `${animationSpeed}s`,
                        } })))),
        React__default["default"].createElement("foreignObject", { className: s.WavingFlag__foreignObject, height: height, mask: `url(#${maskName})`, width: width, x: "0", y: "0" },
            React__default["default"].createElement("div", { className: `${s.WavingFlag__wrapper} ${fromLeft ? s.left : ''}` },
                React__default["default"].createElement("div", { className: `${s.WavingFlag__container} ${flagContainerClassName}`, style: { height: flagHeight + 'px' } }, Array(flagWidth).fill(null)
                    .map((_, i) => (React__default["default"].createElement("div", { className: s.WavingFlag__flag, key: `WavingFlag-element-${i}`, style: {
                        animationDelay: -i * curvature + 'ms',
                        animationDuration: `${animationSpeed}s`,
                        animationName: cssAnimationFlagWaveName,
                        background: `url(${flag})`,
                        backgroundPosition: i + 'px 50%',
                        backgroundSize: `${flagWidth}px 100%`,
                        boxShadow: isShadow ? `0 ${flagWidth * 0.013}px ${boxShadowColor}80, 0 -${flagWidth * 0.013}px ${boxShadowColor}80` : undefined,
                    } }))))))));
};

module.exports = WavingFlag;
