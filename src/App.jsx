import { Route, Routes } from "react-router-dom";
import { AppPage } from "./pages";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<AppPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
