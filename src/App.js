//##################################################
// WHAT DOES REACT CODE LOOK LIKE BEHIND THE SCENE
//##################################################
/* 
  in order to let React work you need:
  1. React library (the general package)
  2. React Dom (this is for dom manipulation and to use React for the browser
     so in that case you'd need another script, as well as for App development and VR and many
     other). So in sum, they separeted this library to render/put on the screen in the browser.
  ------------------------------------------------------------------------------------------------
  This is the first step, the createElement takes 3 parameters:
  1. The HTML element such as, h1
  2. The property such as ID or Classes or Null
  3. The content in between the tags, like the text in a button
  This is coming from the React library from the general package.

  React.createElement('h1', null, 'hello react')

  The we need to render/put our React code in the browser with React Dom.
  This is the Second step and takes 2 parameters:
  1. The element or the app that you want to render on the screen (step one)
  2. The location where you want to render that app out, like the HTML location where
     you wanna put the code. Usually it is a Div with an id of root.

  ReactDOM.render(React.createElement('h1', null, 'hello react'), document.querySelector('#root))
  ------------------------------------------------------------------------------------------------
  Usually for scalability reasons you have a function, called functionApp(),
  that return our element(step one) 
  
  function App() {
    return (React.createElement('h1', null, 'hello react'))
  }

  the step 2 will be to pass that function in the ReactDOM.render

  ReactDOM.render(React.createElement(App), document.querySelector('#root))

  ------------------------------------------------------------------------------------------------
  Now if you wanna add multiple elements you cannot just add them in the return() in the
  function App() because it will be to heavy. So what we can do is: in the React.createElement
  we could pass as the first parameter a 'div', like a father containeer, and add as third
  parameter(the things between tags) an array that takes in another React.createElement or
  multiple. As follow: 

  function App() {
    return (React.createElement('div', null, [
      React.createElement('h1', null, 'hello react'),
      React.createElement('button', null, 'click me!!')
    ]))
  }


  ReactDOM.render(React.createElement(App), document.querySelector('#root))
  ------------------------------------------------------------------------------------------------
  to make it more interesting we could add variables and replace the text of an H1 for instance.
  just to show that you can create elements and adding JS functionalities attached to it.
  And you can also add CSS. Just look the H1 again. Style it is inside an object and takes
  another one. So in sum with React, you do everything in one file. HTML generation,
  JavaScript functions and variables, and CSS.

    function App() {
      const time = new Date().toLocaleDateString()
      const s = {fontSize: 50, color: 'red'}
      return (React.createElement('div', null, [
        React.createElement('h1', {style: s}, time),
        React.createElement('h2', {style: {color: red}}, time),
        React.createElement('button', null, 'click me!!')
      ]))
  }

  ReactDOM.render(React.createElement(App), document.querySelector('#root))
*/

//##################################################
// REWRITE REACT BEHIND THE SCENES INTO JSX
//##################################################
/* 
  This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax 
  extension to JavaScript. Just to avoid to write all the time: React.createElement() etc etc.
  We write JSX so that Babel can do its transpilation from JSX to React.createElement().
  Babel takes some code and transpiles it to something else adaptable to all the broswers.
  We can also add functions and event listener, check the alertHandler on the button and how
  the event listener 'click' is added to the button.

    function App() {
      const time = new Date().toLocaleDateString()
      const ButtonStyle = {fontSize: 50, color: 'red'}
      const alertHandler = () => {
        alert('you clicked the button, careful')
      }
      return (
        <div>
          <h1>{time}</h1>
          <button style={ButtonStyle} onClick{alertHandler}></button>
        </div>
      );
    }

  ReactDOM.render(React.createElement(App), document.querySelector('#root))
*/

//##################################################
// COMPONENTS
//##################################################

/* 
  Conceptually, components are like JavaScript functions. They accept arbitrary inputs 
  (called “props”) and return React elements describing what should appear on the screen.
  The simplest way to define a component is to write a JavaScript function:

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  This function is a valid React component because it accepts a single “props” 
  object argument (which stands for properties) with data and returns a React element.
  We call such components “function components” because they are literally JavaScript functions.
  If we take the function we just created we can basically re-used it in any other React 
  projects. Which is cool. We could add to our function App() another element like a <nav></nav>
  or more, but then it will get longer and longer. So it is better to create a new component
  or function. That makes React beautiful because you can re-use components and create new ones.
  Here below we create a function Tweet() that will return some JSX. We want to only show to
  the browser (using ReactDOM), the APP which is the main project, which is inside the 
  function App. So to add a new component to it, we pass to the main <div> inside the 
  App function, another tag with the name of the new componentm which represent tweet function:
  <Tweet/> ***** so we just put in the ReactDOM, the App function. It is a way to stacking
  multiple components. 
  
  In the same way we can restructure it the following:
  ReactDOM.render(React.createElement(App), document.querySelector('#root)
  with: ReactDOM.render(<App/>, document.querySelector('#root)
  check down under.



    function App() {
      const time = new Date().toLocaleDateString()
      const ButtonStyle = {fontSize: 50, color: 'red'}
      const alertHandler = () => {
        alert('you clicked the button, careful')
      }
      return (
        <div>
          <h1>{time}</h1>
          <button style={ButtonStyle} onClick{alertHandler}></button>
          <Tweet/> *****
        </div>
      );
    }

    function Tweet() {
      return (
        <div>
          <h2>Tweet</h2>
          <p>This is the tweet content</p>
        </div>
      );
    }
  

  ReactDOM.render(<App/>, document.querySelector('#root)
*/


import logo from './logo.svg';
import './App.css';
// test 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
