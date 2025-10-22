import React from "react";
import { MainRoute } from "./Route/MainRoute";
import { ProdukProvider } from "./Context/ProdukProvider";
import { AuthProvider } from "./Context/AuthProvider";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ProdukProvider>
          <MainRoute />
        </ProdukProvider>
      </AuthProvider>
    </>
  );
}
