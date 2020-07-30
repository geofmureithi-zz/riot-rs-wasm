#[macro_use]
extern crate stdweb;
#[macro_use]
extern crate serde_derive;

use serde::{Serialize, Deserialize};

use stdweb::js_export;

js_serializable!( State );
js_deserializable!( State );

#[derive(Serialize, Deserialize, Default)]
pub struct State {
    counter: i32
}

#[js_export]
pub fn state(counter: i32) -> State {
  Default::default()
}

#[js_export]
pub fn increment(state: State) -> State {
    State {
        counter: state.counter + 1
    }
}

#[js_export]
pub fn decrement(state: State) -> State {
    State {
        counter: state.counter - 1
    }
}

#[js_export]
pub fn add(state: State, b:i32) -> State {
    State {
        counter: state.counter + b
    }
}