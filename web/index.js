import App from './App.riot'
import {component} from 'riot'

component(App)(document.querySelector('#root'), {
  message: 'Hello there'
})