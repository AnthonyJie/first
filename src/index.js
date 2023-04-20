import 'normalize.css'

import App from './components/appd/App'
import { createRoot } from 'react-dom/client'

const el = (
  <>
    <App></App>
  </>
)

const root = createRoot(document.getElementById('root'))

root.render(el)
