import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvider from './context/DataProvider';
import Login from "./pages/login";
import Signin from "./pages/signin";
function App() {
  return (
    <DataProvider>
      <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/runner" element={<Home/>} />
      </Routes>
    </DataProvider>
  );
}

export default App;