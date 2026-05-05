import { BrowserRouter, Routes, Route } from "react-router-dom";

//composants temporaires (a l'interieur de App.tsx pour commencer)

function Accueil() {
  return <h1>Page d'accueil</h1>
}

function PostDetail() {
  return <h1>Detail d'un post</h1>
}

function Auteur (){
  return <h1>Liste des auteurs</h1>
}

function UserDetail() {
  return <h1>Infos de l'auteur et ses articles</h1>
}

function Login() {
  return (
    <h1>Connectez vous</h1>
  )
}

function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/post/:id" element={<PostDetail/>} />
        <Route path="/users" element={<Auteur/>}/>
        <Route path="/users/:id" element={<UserDetail/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App