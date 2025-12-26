import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MatchDetail from "./components/MatchDetail"
import Navbar from "./components/Navbar"
import PointsTable from "./components/PointsTable"
import News from "./components/News"


function App() {

  return (
    <div className="max-w-screen min-h-screen bg-black">
    <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/pointsTable" element={<PointsTable/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/matchDetail/:id" element={<MatchDetail/>} /> 
        </Route>
    </Routes>
    </div>
  )
}

export default App
