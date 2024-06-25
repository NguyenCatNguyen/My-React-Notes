import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter.jsx';
import List from './component/List.jsx';

function App() {
  function Del(){
    // function confirm(){
    //   return(<><h1>You have confirm delete</h1></>)
    // }

    // function cancel(){
    //   return(<><h1>You continue with the delete</h1></>)
    // }
    // return(
    //   <>
    //   <button onClick={()=>confirm()}>Confirm</button>
    //   <button onClick={()=>cancel()}>Cancel</button>
    //   </>
    // )
    
  }
  return (
    <div className="App">
      <Counter/>
      <List todo = "Finish week5" TodoDelete={Del} />
    </div>
  );
}

export default App;
