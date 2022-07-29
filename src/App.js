import './App.css';
import MenuDish from './components/MenuDish';
import moonSolid from './images/moon-solid.svg'
import moonReg from './images/moon-regular.svg'
import {useState} from 'react'
import Modal from './components/Modal';
function App() {
  const [theme,setTheme] = useState(true);
  const [dishName,setDishName] = useState('')
  const [modal,setModal] = useState(false)
  const changeTheme = ()=>{
    setTheme(prevState=>!prevState)
  }
  const dishData=(data)=>{
   setDishName(data.dishName)
   setModal(true)
   console.log(modal)
   
  }
  const modalHandler = ()=>{
    setModal(false)
  }
  return (
    //323840
    <div  style={theme? {backgroundColor:'#f0f8ff'}:{backgroundColor:'#24292d'}}>
   {modal ? <Modal dishName={dishName} 
   theme={theme}
   modal={modalHandler}/>:null}
      <button 
      className='theme-toggle'
      onClick={changeTheme}>Change Theme</button>
    
      <MenuDish darkCard={theme=== false} orderedData={dishData}/>
    </div>
  );
}

export default App;
