# My-React-Notes
This is a collection of my React notes. It includes the basics of React, React Hooks, Routing, API Integration and more.
# Table of Contents
- [React](#react)
- [Project List](#project-list)
- 
# Project List
`Project that use to practice React`


# React
## Index
1. [Introduction](#Introduction)
2. [Reuable Components](#reusable-components)
3. [Props](#props)
4. [Events Handlers](#events)
5. [React Hooks](#react-hooks)
6. [Routing](#routing)
7. [API Integration](#api-integration)
# Get Started
1. Command to install create-react-app
```bash
npx create-react-app my-app
```
1. Command to start the server
```bash
npm start
```


## 1. Introduction
- React is a JavaScript library for building user interfaces.
- Maintain by Facebook
### Why React?
- Easier to use
- Maintainable
- Reusable

### React better practices
- `<>`: use fragment to wrap multiple elements incase of returning multiple elements without the need of extra div
### Event Handlers
- When passing an event in a function, if you dont want it to be called immediately, you can pass it as a function.
  - <button onClick={Function()}>
- If you want it to be called when button is being click, remove the parenthesis.
  - <button onClick={Function}>

## 2. Reusable Components
- Components are the building blocks of a React application
- `Two parts of a component`
  - Create a component
  - Use a component
#### Reason for using jsx
- jsx is a syntax extension for JavaScript
- jsx allow auto completion when writing HTML
### Step 1: Create a component
1. Create a new file
2. Inside of this file create a function
3. Inside of your function return some jsx
4. Export your function
```javascript
// Create Todo.jsx
function Todo(){
    return(
        <div>
        <p>Todo</p>
        </div>
    )
}
// Export the function
export default Todo
```
### Step 2: Use a component
1. Import the component
- `import Todo from './components/Todo.jsx'`
2. Use the component
- `<Todo />


## 3. Props
- `Props` are arguments passed into React components
- **CONS:** help make components dynamic
- `Two steps to use props`
  - Create the props
  - Use the props

### Step 1: Create the props
- Pass in the property name and value in parent file
  - `<Todo propName="Prop Value"/>`

### Step 2: Use the props
- Use the props in the component file
  - ```js
    function Todo(props){
        return(
            <div>
            <p>{props.propName}</p>
            </div>
        )
    }

    // Simpler way
    function Todo({propName}){
        return(
            <div>
            <p>{propName}</p>
            </div>
        )
    }
    ```


## Events Handlers
- `Event Handlers` are functions that are called when an event is triggered. It
- Most important event handlers:
  - `onClick`
  - `onChange`

### Important Notes
- **Work Right Away** 
  - If you want to pass an argument in a function, you can pass it as a function.
    - `<button onClick={Function()}>`
-  **Work onClick** 
   -  If you want it to be called when button is being click, remove the parenthesis.
     - `<button onClick={Function}>`
   - If it have an argument, you can pass it as a function
     - `<button onClick={() => Function(argument)}>`

## React Hooks
- `Hooks` are functions that let you use state and other React features without writing a class
- Most important hooks:
  - `useState`
    - Define: is how we define variables in React.
    - When a variable is changed, it re-renders the page automatically. 
  - `useEffect`


### 1. Import React Hooks
- `useState`: is a hook that allows you to have state variables in functional components
  - `import {useState} from 'react'`
### 2. useState
- What is conditional rendering?
  - Rendering a coponent when a certain condition is met. 

1. Use a callback to get the previous value
- `setCounter((previous)=> previous +1)`
2. Spread out all the properties of the prev state `...`
- `setCounter((previous)=> ...previous, quantity: previous.quantity + 1)`
3. Only change thee property that you need to change

## 2.1. useState Case
- Number:
  - Pass in the number `setNum(10)`
  - Incase of dependency on previous value, use a callback
    - `setNum((prev)=> prev + 1)`
- Boolean:
  - Pass in the boolean `setBool(true)`
  - Incase of dependency on previous value, use a callback
    - `setBool((prev)=> !prev)`
- Strings:
  - Pass in the string `setStr("Hello")`
  - Incase of dependency on previous value, use a callback
    - `setStr((prev)=> prev + " World")`
- Objects:
  - Pass in the object `setObj({name: "John", age: 20})`
  - Incase of dependency on previous value, use a callback
    - `setObj((prev)=> {...prev, age: prev.age + 1})`
- Arrays:
  - Pass in the array `setArr([1,2,3,4])`
  - Incase of dependency on previous value, use a callback
    - `setArr((prev)=> [...prev, 5])`
#### Example 1
```jsx
import React, {useState} from 'react';
function Counter(){

    const [counter,setCounter] = useState(0)
    function plus(){
        setCounter((previous)=> previous +1)
        setCounter((previous)=> previous +1)
    }
    function minus(){
        setCounter((previous)=> previous -1)
        setCounter((previous)=> previous -1)
    }
    return(
        <div>
            <h1>Counter Test: {counter} </h1>
            <button onClick={()=> plus()}>Increment</button>
            <button onClick={()=> minus()}>Decrement</button>
        </div>
    )
}
export default Counter
```
#### Example 2
```jsx
import React, {useState} from 'react';

// const[init, increment] = useState(0)
function Counter(){

    const [cart, setCart] = useState({
        item: "apple",
        quantity: 0,
    })
    function plus(){
        //1. Use a callback to get the previous value
        //2. Spread out all the properties of the prev state
        //3. Only change thee property that you need to change
        setCart(prevCart =>({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }
    function minus(){
        setCart(prevCart =>({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }
    return(
        <div>
            <h1>Counter Test: {cart.quantity} {cart.item} </h1>
            <button onClick={()=> plus()}>Increment</button>
            <button onClick={()=> minus()}>Decrement</button>
        </div>
    )
}
export default Counter
```
## JS Side Notes
- To turn a number into **Boolean** value, you can use `!!`
  - `!!0` => `false`
  - `!!1` => `true`

```js
{isModalOpen && <Modal />}
// or
{isModalOpen ? <Modal /> : null}
```


### Emitting Events
```jsx
// Parent Component
function Parrent(){
  // Function to be called when button is clicked
  function clicked1(){
    console.log("Parent notified")
  }

  return(
    <div>
      <Child clicked2={clicked1}/>
    </div>
  )
}

// Child Component
function Child({clicked2}){
  returnn(
      <button onClick={clicked2}>Click me</button>
  )
}

```
### UseEffect
- `useEffect` is a hook that allows you to perform side effects in functional components
- **Import** `import React, {useState, useEffect} from 'react'`

### 1. useEffect structure
- `useEffect(()=>{},[])`
  - First argument: function to be called
  - Second argument: array of dependencies, can have multiple values
    - If empty, it will only be called once
    - If not empty, it will be called everytime the value in the array changes

### 2. useEffect use cases
- **Case 1** - `useEffect(()=>{},[])`
  - Only run once when the component is mounted
- **Case 2** - `useEffect(()=>{},[value])`
  - Run everytime the value changes
- **Case 3** - `useEffect(()=>{})`
  - Run everytime the component is rendered, so when page is refreshed

## Routing
- `Routing` is the process of selecting a path for traffic in a network or between or across multiple networks
- Let's you navigate between different pages in a web application

```jsx
import {BrowserRouter as Router, Routes, Rounte, Link} from 'react-router-dom'

function App(){
  return(
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About<l/Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
```

### API Integration
- For this example we will use `axios` to fetch data from an API.
- **Install axios**
  - `npm install axios`