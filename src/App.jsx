import { Route, Routes } from "react-router-dom";
import { AppPage } from "./pages";
import { Areas, Header, Pricing } from "./components";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<AppPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/knowledge-areas" element={<Areas />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
