import React from "react";
import ReactDom from 'react-dom'

const element = React.createElement('div', {id: 'div', className: 'aa'}, '我是一个盒子div')

ReactDom.render(element, document.querySelector('#root'))