import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./searchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptPetContext from "./AdoptPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = function () {
  const adoptedPet = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AdoptPetContext.Provider value={adoptedPet}>
          <div className="m-0 p-0" style={{ backgroundColor: "#81a69b17" }}>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </div>
        </AdoptPetContext.Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
