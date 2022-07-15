'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var img = "data:image/jpeg;base64,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";

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
            flag="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png"
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
    // const maskWaveSize = width * 0.1;
    return (React__default["default"].createElement("svg", { className: `${s.WavingFlag__svg} ${className}`, height: height, viewBox: `0 0 ${width} ${height}`, width: width, xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("style", null, cssAnimationFlagWave),
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
