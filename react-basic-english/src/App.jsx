import { useState } from 'react'
import './App.css'
import UserData from './components/stateAndProps/UsersData'
import CounterClass from './components/classComponent/counterClass';
import CounterFunctional from './components/functionalComponents/counterFunc';
import PlayList from './components/projects/29-06 PlayList/PlayList';
import ApiCalls from './components/apiCall/apicalls';
import ColorPicker from './components/hooks/useMemo/colorPicker';
import VideoPlayer from './components/projects/06-07 VideoPlayer/videoPlayer';
import TodoUseReducer from './components/hooks/useReducer/todo-useReducer';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div>
      <CounterClass/>
      {/* <CounterFunctional/> */}
      {/* <PlayList/> */}
      {/* <UserData/> */}
      {/* <ApiCalls/> */}
      {/* <ColorPicker/> */}
      <TodoUseReducer/>
      {/* <VideoPlayer/> */}
    </div>
    </>
  )
}

export default App;
