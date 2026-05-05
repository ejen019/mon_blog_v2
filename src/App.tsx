import { BrowserRouter, Routes, Route } from "react-router-dom";

//composants temporaires (a l'interieur de App.tsx pour commencer)
function Accueil(){
  return <h1>Accueil</h1>
}

function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Accueil/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}
export default App