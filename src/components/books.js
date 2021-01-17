//import {useSelector} from 'react-redux';
import books from "../data"
//import store from '../reduxx/store/store'
const Books = ({data}) =>{
    let state = data;
    //store.getState()
    //useSelector(state => state)
    //if(!state) state = books
    console.log(state)
   // alert('hi')
    return (
        <div>
            <table border = "1px">
            <tr>
          <td><b>Book Title </b></td>
          <td><b>book ID</b></td>
        </tr>
            {state.map(book=>(
                <tr>
                    <td>{book.title}</td>
                    <td>{book.id}</td>
                </tr>
            )
                )}
            </table>
        </div>
    )
        
    }



export default Books;