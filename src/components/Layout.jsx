import React from "react";
import Header from "/workspaces/Pedra-Furada/src/components/Headers.jsx";
export default function Layout({ children }) {
 return (
 <div>
 <Header />
 <main style={{ padding: "1rem" }}>{children}</main>
 </div>
 );
}
