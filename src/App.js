import axios from 'axios';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from './store/action';

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state)

  React.useEffect(() => {
    dispatch(getData());
  }, [])

  return (
    <div className="App">
      {state.map((el, i) => <h1 key={i}>{el.name}</h1>)}
    </div>
  );
}

export default App;
