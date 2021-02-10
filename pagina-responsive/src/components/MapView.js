import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

const Url='http://192.168.100.26:3030/donadores';


const Donadores=()=>{
const [data, setData] = useState([]);


const peticionGet=async()=>{
  await axios.get(Url)
  .then(response=>{
      setData(response.data);
      console.log(response.data)
  })
}

useEffect(()=>{
  async function fetchData(){
    await peticionGet();
  }
  fetchData();
  
},[])

return (
  <div className="text-center">
   <TableContainer>
   <Table>
     <TableHead>
       <TableRow>
         <TableCell>Nombre</TableCell>
         <TableCell>Latitud</TableCell>
         <TableCell>Longitud</TableCell>
       </TableRow>
     </TableHead>

     
     <TableBody>
          {data.map(dato=>(
            <TableRow key={dato.id}>
              <TableCell>{dato.nombre}</TableCell>
              <TableCell>{dato.latitude}</TableCell>
              <TableCell>{dato.longitude}</TableCell>
            </TableRow>
          ))}
          </TableBody> 
     </Table>  
   </TableContainer>
  </div>
);
}
export default Donadores