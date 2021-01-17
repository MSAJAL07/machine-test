
// import {useSelector} from 'react-redux';
// import store from './reduxx/store/store';
// import add from './reduxx/action/add';
// import edit from './reduxx/action/edit';
// import remove from './reduxx/action/remove';
// 
//import store from './reduxx/store/store';
import Books from './components/books';
import Login from './components/login'
import {useState} from 'react'
import data from './data'
function App() {
 
 const [books, setBooks] = useState (data);
 const [id,setId] = useState()
 const [title,setTitle] = useState("")
 const [user,setUser] = useState("");
 const [pass , setPass] = useState("");
 let book = {
   id, title
 }
const Add = e =>{
let tmp = books;
tmp.push(book)
//console.log(tmp)
//alert('hi');
setBooks(tmp)
}
const Edit = e =>{
  let tmp = books.filter(b=> b.id !== book.id)
  tmp.push(book)
  setBooks(tmp)
}
const Remove = e =>{
let tmp = books.filter(b=> b.id !== book.id)
//console.log(tmp)
setBooks(tmp)
}
const idHandeler = e=> {
 // console.log(e.target.value)
setId(e.target.value)
}
const titleHandeler = e=> {
 // console.log(e.target.value)
  setTitle(e.target.value)
}

const userHandeler = e=> {
  setUser(e.target.value)
}
const passHandeler = e => {
  setPass(e.target.value)
}
const logout = e => {
  localStorage.clear();
  setUser(null);
  setPass(null)
}

if( localStorage.getItem("token") == "xxxx"){
  return (
    <center>

    <Books data ={books} /> <br/><br/>
    <label >Book Id <input type= "test" value = {id} onChange ={idHandeler} /> </label> <br/><br/>
    <label >Book Title <input type= "test" value = {title} onChange = {titleHandeler} />  </label> <br/><br/>
    <input type= "button" defaultValue = "Add" onClick ={Add} /><br/><br/>
    <input type= "button" defaultValue = "Edit" onClick = {Edit} /><br/><br/>
    <input type= "button" defaultValue = "Delete" onClick = {Remove} /><br/><br/>
    <input type="button" defaultValue = "Logout" onClick = {logout} />

    
    </center>
  );
}else{
  return(
<Login user = {user} pass= {pass} userHandeler = {userHandeler} passHandeler = {passHandeler}  />
  )

}
  
}

export default App;
