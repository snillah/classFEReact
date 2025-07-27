what is state management in React?

What is it?

It 's about managing dynamic data 

why do we need it in React?
State Represents the information that can change over time (user input,data fetched from ApI, UI  visibility , etc)


as the application grows , we need  to share state betwwen the components

Reason state management is needed

- Avoid prop drillin
-Consistent data across components






What does a store provider ?
provide a string source to truth for your app's state.


How do you build the store ?
create a context - you use React.useContext to create a context object
    - this context will be used to provide and consume the global state
Create a Provider component- This provider will wrap your app ( or a part of it) and supply
 the state to the child  components
provide the state and updaters - inside the provider, use a context.Provider to pass down the
state value; within your store, you may use "useState or useReducer  to manage state
consume the state: Any component that needs the global state can use the "useContext'
with your context to read the state or call dispatch function.

js.file

Countercontext.jsx

const CounterContext  = createContext();

function CounterProvider({childern})

