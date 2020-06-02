import React, { Component } from 'react'
import db from '../firebase-config';


export default class Tareas extends Component{

    state = {
        desc:[]
    }

    componentDidMount(){
        db.collection('tareas').get().then((snapShots)=>{
            this.setState({
                desc:snapShots.docs.map( doc =>{
                    return{
                        id:doc.id,data:doc.data()
                    }
                })
            })

        })
    }

    render(){
        const {descs} = this.state;
        return(
            <div>
              <thead>
              <th>Nombre</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </thead>
                <tbody>
                   { descs&&descs!==undefined?descs.map((desc,key)=>(
                       <tr key={key}>
                           <td>{desc.data.desc}</td>
                           <td>Editar</td>
                           <td>Modificar</td>
                       </tr>
                   )):null}  
                </tbody> 
            </div>
        )
    }
}