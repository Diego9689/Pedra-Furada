import React from "react";
import Header from "/workspaces/Pedra-Furada/src/components/Headers.jsx";
import Footer from "/workspaces/Pedra-Furada/src/components/Footer.jsx";
export default function Layout({ children }) {
 return (
 <div className="layout">
 <Header />
 <main style={{ padding: "1rem" }}>
 {children}
 </main>
 <Footer />
 </div>
 );
} 