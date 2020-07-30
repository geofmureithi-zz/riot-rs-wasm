import { state, dispatch } from '../Cargo.toml'

        export default {
            increment(){
                this.update(dispatch(this.state, 'Increment'))
            },
            decrement(){
                this.update(dispatch(this.state, 'Decrement'))
            },
            onMounted(){
                this.update(state())
            }
        }