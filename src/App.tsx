 import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Restaurants from "./pages/Restaurants";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
        <div className="container-fluid">
          <span className="navbar-brand">ReviewHub</span>
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/restaurants">Restaurants</NavLink>
            <NavLink className="nav-link" to="/reviews">My Reviews</NavLink>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;