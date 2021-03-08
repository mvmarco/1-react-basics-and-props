// import React from 'react'; (old way of doing things)
// this function is exported to APP and APP is exported to index.js

/* 
  function Tweet(props) {
    console.log(props); // props is an object with properties passed when we call tweet in App.js
    return(
      <div className="tweet">
        <h2>Name: {props.name}, status: {props.status}</h2>
        <h3>Message: {props.message}</h3>
        <button>Delete</button>
        <button>Like</button>
      </div>
    )
  }

  we could destructure the props as follow, remembering that if we have
  object = {name:'marco', dog:'lapo'}
  instead of doing: 
  const marco = object.name       getting --> marco
  const lapo = object.dog         getting --> lapo
  we could do: const {name, dog} = object 

  check this out: https://www.javascripttutorial.net/es6/javascript-object-destructuring/
*/

function Tweet({name,status, message}) {
  return (
    <div className="tweet">
      <h2>Name: {name}, status: {status}</h2>
      <h3>Message: {message}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  )
}
export default Tweet;