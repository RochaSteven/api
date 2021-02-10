import React,{useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Switch,Route } from 'react-router-dom';
import Home from './pages';
import Mantenimiento from './pages/mantenimiento';
import Entregar from './pages/entregar';
import Eliminar from './pages/eliminar';
import Funcional from './pages/formfun';
import Obsoleto from './pages/formobs';
import Repuesto from './pages/formrep';
import Recepcion from './pages/recepcion';
import Mapa from './components/MapView';
import Dropdown from './components/Dropdown';
function App() {
  const [isOpen, setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
        console.log('hecho');
      }
    }
    window.addEventListener('resize',hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };

  });
  return (
    <>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/mantenimiento" component={Mantenimiento} />
       <Route path="/eliminar" component={Eliminar} />
       <Route path="/funcional" component={Funcional} />
       <Route path="/obsoleto" component={Obsoleto} />
       <Route path="/repuesto" component={Repuesto} />
       <Route path="/recepcion" component={Recepcion} />
       <Route path="/entrega" component={Entregar} />
       <Route path="/map" component={Mapa}/>
     </Switch>
     <Footer />
    </>
  );
}

export default App;





