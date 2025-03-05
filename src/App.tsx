import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";

import { useEffect } from "react";

import { useAccount } from 'wagmi'
function App() {

    const account = useAccount()

const currentAccount= account.address

  useEffect(() => {
    console.log(currentAccount);
  });

  if (currentAccount === undefined) {
    return <Login />;
  }
  return (
    <Navbar>
      <main className="bg-[#efe7f7] text-black font-brice-regular py-20 h-[100vh]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </Navbar>
  );
}

export default App;
