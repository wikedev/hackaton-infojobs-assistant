import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.createElement("div");
rootElement.id = "waka";
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


console.log("!Wike.dev");
// console.log(a)
const searchBox = document.querySelector(".ij-SearchBox");//document.querySelector(".search-box");
// const offers = document.querySelector(".ij-List");

if(searchBox !== null){
  searchBox.removeChild(searchBox.childNodes[0]);
  searchBox.appendChild(rootElement);

}

// offers.remove();