import React, { useEffect, useState } from 'react'

const Post = () => {
    const [description,setDescription]=useState("")
    const [notes,setNotes]=useState([])
    const body= {description} 
    useEffect(()=>{
        getnotes()
    },[])
    const getnotes = async(e)=>{
       
        try {
          const response =await fetch("http://localhost:4000/notes")
          const data =await response.json()
          setNotes(data)
          console.log(response)
        } catch (err) {
          }
    }
    const handlesubmit = async(e)=>{
        e.preventDefault()
        try {
          const response =await fetch("http://localhost:4000/notes",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(body)
          }) 
          console.log(response)
        } catch (err) {      
        }
    }
    const deletenote = async()=>{
        try {
          const response =await fetch(`http://localhost:4000/notes`,{
              method:"DELETE"
          }) 
          console.log(response)
        } catch (err) {      
        }
    }

    return (
        <div className="card yep">
            <form onSubmit={handlesubmit} className="card-body " >
            <div><h3 className="card-header text-center mt-2 mb-5">POSTS GO HERE</h3></div>
            <p className="badge bg-primary badge-lg text-center">{notes.length}notes</p>
            <label htmlFor="Name">description</label>
                <input type="text" 
                required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                name="description" className=" form-control"/>
                <button className="btn btn-outline-success mt-2">submit</button>
               
                
            </form>

            <table className="table table-striped">
            <tr>
                <th>Name</th>
                <th>update</th>
                <th>delete</th>
            </tr>
           
            {notes.map((note=>(
                <tr>
           <td> <p>{note.description}</p></td>
           <td><button className="btn btn-outline-warning">update</button></td>
           <td><button className="btn btn-outline-danger" onClick={deletenote}>delete</button></td>
            </tr>
            )))}
            </table>
        </div>
    )
} 

export default Post
