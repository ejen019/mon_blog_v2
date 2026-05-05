import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";

//composants temporaires (a l'interieur de App.tsx pour commencer)

function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<PostList/>}></Route>
        <Route path="/posts/:id" element={<PostDetail/>}/>
        <Route path="/users" element={< UserList/>}/>
        <Route path="/users/:id" element={<UserProfile/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App