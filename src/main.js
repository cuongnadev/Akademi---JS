import "./main.scss";
import { Login } from "./views/pages/Login";


document.querySelector('#app').appendChild( new Login(false).render());
// document.querySelector('#app').innerHTML = `
//   <div>
//       <h1>Hello</h1>
//   </div>
// `

