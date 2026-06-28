import Navbar from './pages/navbar'
import { Routes, Route, Navigate } from "react-router-dom";
import Artist from "./pages/updateArtist";
import Artwork from './pages/artWork';
import Exhibition from './pages/exhibition';
import Collaboration from './pages/collaboration';

function App() {

  return (
    <>
      <section id="center">
       {/* <UpdateArtist />   */}
             <Navbar />
       
             <Routes>
               <Route path="/" element={<Navigate to="/artist" replace />} />
               <Route path="/artist" element={<Artist />} />
               <Route path="/artworks" element={<Artwork />} />
               <Route path="/exhibitions" element={<Exhibition />} />
               <Route path="/collaborations" element={<Collaboration />} />
             </Routes>
      </section>
    </>
  )
}

export default App
