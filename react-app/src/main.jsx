import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./Greeting.jsx";
import Image from "./Image.jsx";
import HTMLtoJSX from "./htmltojsx.jsx";
import HTMLtoJSX2 from "./htmltojsx2.jsx";
import ToDoList from "./ToDoList.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Image />
    <HTMLtoJSX />
    <HTMLtoJSX2 />
    <ToDoList />
  </StrictMode>,
);
