import React from 'react'
import { AiFillDelete, AiFillSave, AiFillFileAdd} from "react-icons/ai";





const Main = () => {
  return (
    <div className='app-main'>
      <div className='app-main-addNote'>
        <div className="app-main-addNote-header">
            <input placeholder='note title' class = 'addNote-title'></input>
            <button className='addButton'>Add</button>
        </div>  
             <textarea></textarea>


      </div>

      <div className="app-main-editNote">
        <h1>note title</h1>
        <p>dsbdgnf rjytdfygshfjdm jtdjf rjytdfjmytygshfjdm jtdjf rjytdfyg
        f rjytdfygdsbdgnf rjytdfygshfjdm jtdjf rjytdfjmytygshfjdm jtdjf rjytdfyg
        f rjytdfygshfjdmjytdfygshfjdm jtdjf rjytdfjmytygshfjdm jtdjf rjytdfyg
        f rjytdfygshfjdm jtdjshfjdm jtdjf rjytd jtdshfjdmjytdfygshfjdm jtdjf rjytdfjmytygshfjdm jtdjf rjytdfyg
        f rjytdfygshfjdm jtdjshfjdm jtdjf rjytd jtdjshfjdm jtdjf rjytdfygshfjdm jtdj</p>
            <div className="editNote-tools">
                <button className='deleteButton'><AiFillDelete /></button>
            
                <button className='editButton'> <AiFillSave /> </button> 
            </div>

            <div className="activeNote"></div>
      </div>
          
    
    </div>
  )
}

export default Main
