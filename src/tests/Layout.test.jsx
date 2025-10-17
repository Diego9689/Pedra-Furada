import { render, screen } from "@testing-library/react";
import Layout from "/workspaces/Pedra-Furada/src/components/Layout.jsx";
jest.mock("/workspaces/Pedra-Furada/src/components/Headers.jsx", () => () => <header>Mock Header</header>);
test("deve renderizar o Header e o conteúdo filho", () => {
 render(
 <Layout>
 <p>Conteúdo interno</p>
 </Layout>
 );
 expect(screen.getByText("Mock Header")).toBeInTheDocument();
 expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();
});