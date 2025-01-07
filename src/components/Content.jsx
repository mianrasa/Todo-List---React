import React from 'react';
import { useState } from "react";
// import Shop from "./Shop";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";

//CRUD Operations

const Content = ({user}) => {
  //Read Operation
  let [items, setItems] = useState([
    {id:1, label:"HTML & CSS", checked: true},
    {id:2, label:"Javascript", checked: true},
    {id:3, label:"React Js", checked: false},
  ])

  let [newItem, setNewItem] = useState( "" )
  let [isEditing, setIsEditing] = useState( false )
  let [currentEleID, setCurrentEleID] = useState(null)


  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? {...item, checked : !item.checked} : item
    })

    setItems(newListItems)
  }

  //Create Operation
  let handleAddorSaveItem = () => {

    if(isEditing){
      //Update element
      let newListItems = items.map( (item)=>{
        return item.id === currentEleID ? { ...item, label : newItem } : item
      } )

      setItems(newListItems)
      setCurrentEleID(null)
      setNewItem("")
      setIsEditing(false)
    }
    else{
      //Add element
      setItems( [...items, {id: items.length+1, label:newItem, checked:false} ] )
      setNewItem("")
    }
  }

  //Update Operation
  let handleUpdate = (id) => {
    let listItem = items.find( item => item.id === id)
    setNewItem( listItem.label )
    setIsEditing(true)
    setCurrentEleID(id) 
  }

  //Delete Operation
  let handleDelete = (id) => {
    let newItems = items.filter(item => item.id !== id).map((item, index) => {
      return {...item, id: index+1}
    })

    setItems(newItems)
  }

  return (
    <main>
      <div>
        <input 
          type="text" 
          value={newItem} 
          placeholder='Add New Item'
          onChange={(e) => {setNewItem(e.target.value) }}
        />
        <button
          onClick={() => handleAddorSaveItem() }
        > 
          {isEditing ? 
            <CiSaveDown2 
              padding= '20px' 
              color='green'
            /> : 
            <MdOutlineAdd 
              size= '15px' 
              color='black'
            />
          } 
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className='item'>
            <input 
              type="checkbox" 
              checked = {item.checked} 
              onChange={() => handleChecked(item.id)} 
            />
            <label>{item.label}</label>
            <FaEdit 
              id="edit"
              role='button' 
              tabIndex={0} 
              onClick={() => {handleUpdate(item.id)}}
            />
            <FaTrashCan 
              id = 'delete'
              role='button'
              tabIndex={0} 
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
 )
};

export default Content;
