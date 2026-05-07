// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PostDetail from "./pages/PostDetail";
// import PostList from "./pages/PostList";
// import UserList from "./pages/UserList";
// import UserProfile from "./pages/UserProfile";
// import Login from "./pages/Login";

// //composants temporaires (a l'interieur de App.tsx pour commencer)

import { useEffect, useState } from "react"

// interface HeaderProps {
//   titre : string
//   description : string
// }

// function Header({titre, description} : HeaderProps) {
// return (
//   <div>
//     <h1>{titre}</h1>
//     <p>Il parle de {description}</p>
//   </div>
// )
// }

// interface SalueProps {
//   prenom: string
//   age: string
// }

// function Salue({prenom, age} : SalueProps) {
//   return <p>Bonjour {prenom}, tu as {age} ans</p>
// }

// function Compteur() {
  
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Faites +1</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )
// }

function PremierPost(){
  const [titre, SetTitre] = useState("")

  useEffect(()=> 
    {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(reponse => reponse.json())
        .then(data => {
          SetTitre(data.title)
        })
    }, [])
  return (
    <div>
      <h2>Titre du post :{titre}</h2>
    </div>
  )
}


function App() {
  return (    
  <div>
    {/* <Header titre="MOKO" description="Pourquoi est il petit"/>  
    <Salue prenom="Jp" age="20"/> */}
  {/* <Compteur/> */}
  <PremierPost/>
  </div>
)
}

// function App(){
//   return (
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<PostList/>}></Route>
//         <Route path="/posts/:id" element={<PostDetail/>}/>
//         <Route path="/users" element={< UserList/>}/>
//         <Route path="/users/:id" element={<UserProfile/>}/>
//         <Route path="/login" element={<Login/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }
export default App