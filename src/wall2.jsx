import React,{useState} from 'react'
import './wall2.css'




export default function Wall(){

    const[todos,setTodos]=useState([]);
    const[todos1,setTodos1]=useState([])
    
    const[newTodoItem,setnewTodoItem]=useState('')
    const[newTodoItem1,setnewTodoItem1]=useState('')

    
    const addNewTodo =()=>{
        const newItem={
          title:newTodoItem,
          id:todos.length+1
        }
        const newItem1={
            title:newTodoItem1,
            id:todos1.length+1
          }
         setTodos((prev)=> [newItem,...prev])
         setTodos1((prev)=> [newItem1,...prev])
        //  todoshi vidzaxeb newitems
      }
       

     const[increase,setincrease]=useState(0)
      const addIncrease =()=>{
        setincrease((prev)=>prev+1)
      }



     

    
    return(
        <div className="conteiner">

           <div className="header">
                 <div className="wallofshame">


                 <h1>wall of shame</h1>

                 <div className="members"> 
                 <h3>5 members</h3>
                 </div>



                 </div>


               
           

             

                <div className="nav">


            <div className="input_button">
                
                <input placeholder='Name' type='text' onChange={(e)=>setnewTodoItem(e.target.value)} ></input>
                <input placeholder='Excuse'  type='text' onChange={(e)=>setnewTodoItem1(e.target.value)}></input>
                <button onClick={addNewTodo} type='button'  >create</button>


            </div>


                </div>



           </div>

















           <div className="name">

             <h3 className="first_child">Name</h3>
             <h3>Excuse</h3>
             <h3 className='last_child'>Count</h3>

           </div>




           <div className="list">

         <div  className="name_list">
            <ul>
            {todos.map((todo)=>(<li>{todo.title}</li>))}
            </ul>
         </div>

         <div  className="excuse_list">
             <ul>
             {todos1.map((todo1)=>(<li>{todo1.title}</li>))}
            </ul>
             
            

         </div>

         <div className={"count_list " }>{increase}</div>
           

           <button className="increase" onClick={addIncrease}>increase</button>




           </div>



        </div>
        
    )
    
           
        
        
    
}