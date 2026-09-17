import { useEffect, useState } from 'react';
import './App.css'

function hello(){
  return(
    <h1>Hallo, saya fullstack dev</h1>
  );
}

//ini cara menggunakan props, sama dengan pemeberian variable dalam fungsi di Java misalnya namun ini tidak perlu menggunakan pengenalan jenis variablenya karena ini JavaScript kecuali Typescript yang dimana sistemnya sama dengan Java
function nama(props){
  return <h1>Halo, nama saya adalah {props.nama} saya adalah {props.title}</h1>
}

function nama2({nama, title}){
  return <h1>Halo, nama saya adalah {nama} saya adalah {title}</h1>
}

function App() {

  
  const [angka, setAngka] = useState(1);
  
  useEffect(() =>{
    console.log("Angka : "+angka);
  },[angka])
  
  return (
    <div>
      {/* <h1>Hello World</h1>
      {hello()}
      {nama({nama:"Noval", title:"web developer"})}
      {nama2({nama:"Niggas", title:"sus"})} */}
      {angka}
      <div>
        {/* <button onClick={()=>setAngka(2)}>Tambah</button> */}
        <button onClick={()=>setAngka(angka + 1)}>Tambah</button>
        <button onClick={()=>setAngka(angka - 1)}>Kurang</button>
      </div>
    </div>
  )
}

export default App
