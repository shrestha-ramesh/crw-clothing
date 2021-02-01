import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Link} from 'react-router-dom'
import './App.css';


const TopicsList=()=>{
  return(
    <h1>Topic List page</h1>
  )
}
const TopicsDetails=(props)=>{
  console.log(props)
  return(
    <h1>Topic Details page</h1>
  )
}
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={TopicsList}/>
      <Route path='/topics/:topicId' component={TopicsDetails}/>
    </div>
  );
}

export default App;
