import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.scss';
import { Characters } from "./pages/CharactersPage/Characters";
import { Locations } from "./pages/Locations/Locations.jsx"
import { PlanetsDetail } from "./pages/PlanetsDetail/PlanetsDetail"
import { Header } from "./Header/Header";
import { ProfileContext } from "./contexts/ProfileContext";
import { useState } from "react/cjs/react.development";

function App() {

  const [profile, setProfile] = useState({

    "name": "Rick Sanchez",
    
    "status": "Alive",
    
    "species": "Human",
    
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    
  })

  return (

    <ProfileContext.Provider value={{profile, setProfile}}>

      <BrowserRouter>

        <Header />

      <Routes>

        <Route path="/">

          <Route index element={<Characters/>}/>
          <Route path="planets" element={<Locations/>}/>
          <Route path="PlanetsDetail/:planetID" element={<PlanetsDetail/>}/>
          <Route path="*" element={<Characters/>}/>

        </Route>
        <Route path="/characters" component={Characters}/>
        <Route path="/planets" component={Locations}/>
        <Route path="/PlanetsDetail/:planetID" component={PlanetsDetail}/>

      </Routes>

      </BrowserRouter>

    </ProfileContext.Provider>

  );
}

export default App;
