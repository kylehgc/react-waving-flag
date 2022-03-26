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
            flag="https://external-preview.redd.it/QVS6D1FlDcpx7byaow-LyO4GpezIlepIkozbzwqtFOY.png?auto=webp&s=d60d5e9953842259ade3c425c55354f6651029f4"
            height={200}
            width={300}
          />
        </div>
      );
    };
    ```
 */
declare function WavingFlag(props: TWavingFlagProps): JSX.Element;
