import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// let data: string | null;
// data = null;
// data = "Hello World";
// type Person = {
//   name: string | undefined;
//   age?: number | null;
//   isStudent: boolean | number
// }
// let person:{
//   name: string;
//   age: number;
// };
// let person: Person;
// person ={name: "John",age:null,isStudent:false};
// let role: [number, boolean| number] ;
// role = [23, 1]
// let anyThink: any;
// anyThink = "123";
// let anyThink: any; //  
// anyThink = "123";
// type A = {
//   a?: string,
//   b:number
// }
// type B =A& {
//   c: number,
//   d: string
// }
// let a:B = {
//   c: 123,
//   d: "123",
//   b:2132
// }
// interface X{
//   a:number,
// }
// interface Y extends X{
//   b:string
// }
// let a: Y = {
//   a: 123,
//   b:"Hello World"
// }
