import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, doc, onSnapshot, query, deleteDoc, updateDoc, getDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { delFunc, insFunc, updFunc } from './CrudRedux/UserAction'
import './App.css'


const FirebaseCrud = () => {
  const [data,setData] = useState({
    name:"",
    age:"",
    salary:""
  })
  const [id,setId] = useState('')
  const alldata = useSelector((state) => state.data) || []
  const [alldataState, setAlldataState] = useState([])
  const dispatch = useDispatch()
  const handleChange = (e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
  }
  const handlesubmit = (e)=>{
    e.preventDefault()
    if(id!== ''){
      dispatch(updFunc(id,data))
    } else {
      dispatch(insFunc(data))
    }
    setData({
      name:"",
    age:"",
    salary:""
    })
    setId('')
  }




     useEffect(() => {
  const q = query(collection(db, "Employee"));
  const unsub = onSnapshot(q, (i) => {
    let todosArray = [];
    i.forEach((doc) => {
      todosArray.push({ ...doc.data(), id: doc.id });
    });
    setAlldataState(todosArray);
  });
  return () => unsub();
}, []);


const delData = async (id) => {
  await deleteDoc(doc(db, "Employee", id));
}

const handleEdit = async (itemOrId, subject) => {
  try {
    const id = typeof itemOrId === "string" ? itemOrId : itemOrId.id;
    const ref = doc(db, "Employee", id);
    await updateDoc(ref, { Subject: subject });
  } catch (error) {
    console.error("Failed to update Employee:", error);
  }
};

const editData  = async(id)=>{
  
  let result = await getDoc(doc(db, 'Employee', id))
  setData(result.data());
  setId(id);
}
  const SaveData = async (e) => {
    e.preventDefault();
    if(id !== ''){
      await updateDoc(doc(db, 'Employee', id), data);
    }else{
      await addDoc(collection(db, 'Employee'), data);
    }
    setData({
        
        name: '',
        age: '',
        salary: ''
      });
      
    } 

  
    
  return (
    <div>
      <form action="#" method='post' onSubmit={SaveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} placeholder="Enter Name" onChange={handleChange}/><br /><br />
        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/><br /><br />
        Salary:
        <input type="text" name="salary" id="salary" value={data.salary} onChange={handleChange} /><br /><br />
        <input type="submit" value="Save Data" /><br /><br />
      </form>
      <br /><br />
      <table border={"2"}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              alldataState.map((i,index)=>{
                return(
                  <tr key={i.id}>
                    <td>{index +1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>  
                      <button onClick={()=>editData(i.id)}>Edit</button>
                      <button onClick={()=>delData(i.id)}>Delete</button>
                    </td>
                  </tr>
                    
                )
              })
            }
          </tbody>
      </table>
    </div>
  )
}



export default FirebaseCrud

