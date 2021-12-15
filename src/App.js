
// import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/layout/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import JobsLanding from './components/jobLandingPage/JobsLanding';
import SearchBar from './components/layout/SearchBar';
import { Suspense } from 'react';
function App(props) {
  return (
    <Suspense fallback="loading">
    <BrowserRouter>
      <NavBar >
        <Routes>
          <Route exact path="/" element={<LandingPage >  <SearchBar /> </LandingPage>} />
          <Route exact path="/jobs/:id" element={<JobsLanding />} />

        </Routes>
      </NavBar>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
