
```js
CounterContext.jsx

const CounterContext  = createContext();

function CounterProvider({childern})
// Global State
const [count,setCount ] = useState(0);

 const Increament =() => setCount(count => count +1)
 const Decreament =() => setCount(count => count -1)

 return (

    <CounterContext.Provider value ={{count,Increament,Decreament}}>
    {children}
    </CounterContext.Provider>

 )

    app.jsx

    return (
        <counterProvider>
        <HomePage/>
        </counterProvider>
    )
```