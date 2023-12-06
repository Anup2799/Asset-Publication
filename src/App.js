import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details"; // Rename the import to avoid conflict
import Assetshowcase from "./pages/Assetshowcase";
import Home from "./pages/Home";
import Whitepapers from "./pages/Whitepapers";
import Patents from "./pages/Patents";
import CardDetails from "./pages/CardDetails";
import CardDetailsW from "./pages/CardDetailsW";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} /> 
          <Route path="/Assetshowcase" element={<Assetshowcase />} />
          <Route path="/details" element={<Details />} /> 
          <Route path="/pages/whitepapers" element={<Whitepapers />} />
          <Route path="/pages/patents" element={<Patents />} />
          <Route path="/pages/CardDetails/:cardId" element={<CardDetails />} />
        <Route path="/pages/CardDetailsW/:cardId" element={<CardDetailsW />} />


          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
