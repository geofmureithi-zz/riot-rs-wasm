macro_rules! export {
    // `()` indicates that the macro takes no argument.
    ($state_method_name:ident, $dispatch_method_name:ident, $state_name:ty, $action_name:ty, $dispatch:ident) => {
        // The macro will expand into the contents of this block.
        use stdweb::js_export;
        js_serializable!($state_name);
        js_serializable!($action_name);

        js_deserializable!($action_name);
        js_deserializable!($state_name);
        #[js_export]
        pub fn $state_method_name() -> $state_name {
            Default::default()
        }
        #[js_export]
        pub fn $dispatch_method_name(state: $state_name, action: $action_name) -> $state_name {
            $dispatch(state, action)
        }
    };
}
