import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

const rootElement = document.createElement("div");
// document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// rootElement.remove();

const searchBox = document.querySelector(".ij-Container-container");//document.querySelector(".search-box");
if(searchBox !== null){
  console.log(searchBox.childNodes)
  // searchBox.removeChild(searchBox.childNodes[0]);
  searchBox.removeChild(searchBox.childNodes[3]);
  searchBox.removeChild(searchBox.childNodes[2]);
  searchBox.removeChild(searchBox.childNodes[1]);
  searchBox.appendChild(rootElement);

}

// const offers = document.querySelector(".ij-List");
// if(offers !== null)
//   offers.remove();