export = WavingFlag;
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
declare function WavingFlag(props: TWavingFlagProps): JSX.Element;
