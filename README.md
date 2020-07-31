# Riot.js with Wasm for state management
Riot-rs-wasm is a repository showing how to work between Riot [tiny js framework] and Rust allowing you to play with the magic of web assembly and bundlers


![Preview](https://github.com/geofmureithi/riot-rs-wasm/blob/master/public/images/counter.png?raw=true)

## Why?
Play around with WebAssembly, Rust, Riot.js and TailwindCss

See demo here >> https://riot-rs-wasm.vercel.app/

## How it works

You define the `.riot component` the way you want.
Remember this is rust, so you can call any code as long as it meets the caveats of `std-web`.
Lets start with the script part:

```javascript
<script type="rust" module="counter">
use serde::{
    Serialize,
    Deserialize
};

#[derive(Serialize, Deserialize, Default)]
pub struct CounterState {
    counter: i32
}

#[derive(Serialize, Deserialize)]
pub enum CounterAction {
    increment(i32),
        decrement(i32),
        double
}

fn counter_reducer(state: CounterState, action: CounterAction) - > CounterState {
    match action {
        CounterAction::increment(i) => CounterState {
                counter: state.counter + i
            },
            CounterAction::decrement(i) => CounterState {
                counter: state.counter - i
            },
            CounterAction::double => CounterState {
                counter: state.counter * 2
            }
    }
}
export !(counter_state, counter_dispatch, counter_reducer, CounterState, CounterAction);
</script>
```

### What is going on here?

- We defne the script type as `rust` for Riotjs processor. We also include a module name(which is idealy unique).
- We define the state and reducer.
- We then expose our "rust code" to riot via `stdweb` 

### How does html look like?

There is nothing unique apart from each action name in the `Action` enum is exposed to the component

```html
<div class="flex bg-gray-100 py-24 justify-center">
        <div class="p-12 text-center max-w-2xl">
            <div class="md:text-3xl text-3xl font-bold">Your Counter is at { state.counter }</div>
            <div class="text-xl font-normal mt-4">Play around with
            </div>
            <div class="mt-6 flex justify-center h-12 relative">
                <button class=" shadow-md mx-2 font-medium py-2 px-4 text-green-100 cursor-pointer bg-green-600 rounded text-lg tr-mt" onclick={() => increment(1)}>Add +</button>
                <button class=" shadow-md font-medium mx-2 py-2 px-4 text-red-100 cursor-pointer bg-green-600 rounded text-lg tr-mt " onclick={() => decrement(1)}>Subtract -</button>
                <button class=" shadow-md font-medium mx-2 py-2 px-4 text-yellow-100cursor-pointer bg-green-600 rounded text-lg tr-mt" onclick={() => double()}>Double * 2</button>
            </div>
        </div>
    </div>
```

And thats it for now!

## Example

To run
```
$ yarn start
```

To build
```
$ yarn build
```

## TODO

    [-] - Actions
    [ ] - Component Lifecyle
    [ ] - Custom riotjs plugin?
    [ ] - Write tests?
    [ ] - `create-riot-wasm-app`?


## Contributions

Feel free to create a PR

## Inspirations

Inspired by RiotJs, Redux and Yew among others
