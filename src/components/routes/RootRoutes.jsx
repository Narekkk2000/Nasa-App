import { Routes, Route } from 'react-router-dom';
import { Home, AstronmyPhoto, NaearbyAsteroids, NewPlanet } from '../../pages';

const RootRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/astronmy-photo' element={<AstronmyPhoto />} />
            <Route path='/naearby-asteroids' element={<NaearbyAsteroids />} />
            <Route path='/new-planet' element={<NewPlanet />} />
        </Routes>
    );
};

export default RootRoutes;
