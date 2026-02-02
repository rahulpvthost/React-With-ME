import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement =(
    <a href ="https://google.com" target='_blank'>Visit google</a>
)
const anotheruser ="chai"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotheruser
)

createRoot(document.getElementById('root')).render(
  
    //<MyApp /> //MyApp
   //reactElement this will not run this will not fit in 'render' 
    //anotherElement
    //reactElement//for this run we have to import react from react module 
    <App />
)
