import Contenedor from './components/Contenedor'

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{background: "black"}}>
      <div className='d-flex' style={{background: "black"}}>
        <Contenedor />
      </div>   
    </div> 
  );
}

export default App;