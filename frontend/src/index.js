import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query/react'

import { queryClient } from './api/client'
import { App } from './App'
import './bootstrap.polyfill.css'
import './font-awesome.override.css'
import './index.css'

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('App')
)
