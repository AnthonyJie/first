import React from "react";

import ReactDom from 'react-dom'

const element = React.createElement('ul', {className: 'list'}, [
  React.createElement('li', null, '香蕉'),
  React.createElement('li', null, '橘子'),
  React.createElement('li', null, '苹果')
])

ReactDom.render(element, document.querySelector('#root'))