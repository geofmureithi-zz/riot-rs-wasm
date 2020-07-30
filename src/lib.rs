#[macro_use]
extern crate stdweb;
#[macro_use]
extern crate serde_derive;

use serde::{Serialize, Deserialize};

use stdweb::js_export;

js_serializable!( State );
js_deserializable!( State );

js_serializable!( Action );
js_deserializable!( Action );

#[derive(Serialize, Deserialize, Default)]
pub struct State {
    counter: i32
}

#[derive(Serialize, Deserialize)]
pub enum Action {
    Increment,
    Decrement
}

#[js_export]
pub fn state() -> State {
  Default::default()
}

pub fn reducer(state: &State, action: &Action) -> State {
    match action {
        Action::Increment => State {
            counter: state.counter + 1
        },
        Action::Decrement => State {
            counter: state.counter - 1
        }
    }
}

#[js_export]
pub fn dispatch(state: &State, action: &Action) -> State {
    reducer(state, action)
}


// export!(state, dispatch, Action)
