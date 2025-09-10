# React Redux Theory

# Redux is a state management library for the JS applications
# It helps to manage the global state across multiple components
# It follows a unidirectional data flow pattern


# Core Principles of the Redux
# Single Source of Truth: The entire state of the application is stored in a single JavaScript object 
# called the store.
# State is Read-Only: The state can only be changed by dispatching actions, which are plain JavaScript
# objects that describe what happened.
# Changes are made with Pure Functions: Reducers are pure functions that take the current state and and
# action as arguments and return a new state.


# Redux Compoenents
# Store: The store is the single source of truth that holds the entire state of the application.
# It is created by using configureStore()

# Actions: Actions are plain JavaScript objects that describe what happened in the application.
# They must have a type property that indicates the type of action being performed.
# Example : {type :"ADD_ITEM",payload:"Apple"}

# Reducers: Reducers are pure functions that take the current state and an action as arguments
# and return a new state. They are responsible for updating the state based on the action dispatched.

# Dispatch: Dispatch is a function that is used to send actions to the store. When an action is dispatched,
# the store calls the reducer with the current state and the action, and the reducer returns a new state.


# Selector: A way to read state from the store

# Provider: It makes redux store available to the entire app

# Slice : 



