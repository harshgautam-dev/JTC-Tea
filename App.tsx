import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import JTCChai from './src/screens/JTCChai'

export default function App() {
  return (
    <Provider store={store}>
      <JTCChai />
    </Provider>
  )
}