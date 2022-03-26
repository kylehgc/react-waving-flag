# react-waving-flag

### Description
Simple animated waving flag from jpg/png picture
 
### Features
 - lightweight
 - can be shown from both left and write sides of the screen
 - animated with CSS
 - ready for TypeScript

---

<p align="center">
    <img src="https://raw.githubusercontent.com/garvae/react-waving-flag/master/public/github/demo.gif" alt="react-waving-flag demo" width="100%" height="auto">
</p>  


### Notes

> You can choose if you want to resize the chart based on the parent size or if you want to set the size manually.
> If you want `resizable` chart, you must be sure the parent container does not have zero width and height.
> If you want to set the size manually just add the `size` property

### Installation

```sh
npm install @garvae/react-waving-flag
```
or
```sh
yarn add @garvae/react-waving-flag
```


### Properties (Optional)

| Name |  Type  | Default | Required | Description |
| --- |  ---  | --- | --- | --- |
| animationSpeed | <code> number </code> | 1 | - | Speed of the "waving" animation (seconds) |
| boxShadowColor | <code> string </code> | '#f8f8f8' | - | CSS color property. Flag shadow color. |
| className | <code> string </code> |  | - | Container className |
| curvature | <code> number </code> | 10 | - | Wave distortion degree. The smaller the value, the smoother the wave. |
| flag | <code> string </code> |  | - | JPG/PNG flag picture URL |
| flagContainerClassName | <code> string </code> |  | - | Flag container className |
| fromLeft | <code> boolean </code> | true | - | Set this param to "false" if you want to show the flag from right side of screen |
| height | <code> number </code> | 200 | - | Flag height |
| isShadow | <code> boolean </code> | true | - | Option to disable flag shadow |
| width | <code> number </code> | 300 | - | Flag width |

---

### Example
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

## Author

🙋‍♂️ **Vova_Garvae**

- Facebook: [@garvae](https://www.facebook.com/garvae)
- LinkedIn: [@garvae](https://linkedin.com/in/garvae)
- Twitter: [@vgarvae](https://twitter.com/vgarvae)
- Github: [@garvae](https://github.com/garvae)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://www.github.com/garvae/react-waving-flag/issues).
You can also take a look at the [contributing guide](https://wwwhub.com/garvae/react-waving-flag/raw/master/CONTRIBUTING.md).

## Show your support

Give a  ⭐ and your ❤️ if this project helped you!

<a href="https://www.patreon.com/garvae">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

<br/>
<br/>

❤️️ <https://ko-fi.com/garvae>

<br/>

❤️️ <https://pay.cloudtips.ru/p/859caa2a>

