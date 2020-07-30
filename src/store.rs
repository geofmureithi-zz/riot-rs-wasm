use serde::{Serialize, Deserialize};


    
#[derive(Serialize, Deserialize, Default)]
    pub struct State {
        counter: i32
    }

    #[derive(Serialize, Deserialize)]
    pub enum Action {
        Increment,
        Decrement,
    }


    pub fn reducer(state: State, action: Action) -> State {
        match action {
            Action::Increment => State {
                counter: state.counter + 1
            },
            Action::Decrement => State {
                counter: state.counter - 1
            }
        }
}

export!(store_state, store_dispatch, State, Action, reducer); 