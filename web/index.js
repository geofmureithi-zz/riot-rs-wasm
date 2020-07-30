import App from './Book.riot'
import {component} from 'riot'

component(App)(document.querySelector('#root'), {
  message: 'Hello there'
})