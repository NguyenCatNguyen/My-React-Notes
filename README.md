# 📚 My-React-Notes
This is a collection of my React notes. It includes the basics of React, React Hooks, Routing, API Integration and more.
# Table of Contents
- [React](#react)
- [Project List](#project-list)
# Project List
Project that use to practice React

# Shortcuts
- Emoji pop up: `ctrl + cmd + space`

# React 
## Index
1. [Introduction](#1-introduction)
2. [Reuable Components](#2-reusable-components)
3. [Props](#3-props)
4. [Events Handlers](#4-events)
4. [React Hooks](#4-react-hooks)
6. [Routing](#6-routing)
7. [API Integration](#7-api-integration)



## 3. 
## 4. 

## 5. Events Handlers ⭐️


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
### 7. UseEffect ⭐️
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

## 8. Routing ⭐️
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

## 9. API Integration
- For this example we will use `axios` to fetch data from an API.
- **Install axios**
  - `npm install axios`

[Back to Top ⬆ ](#index)