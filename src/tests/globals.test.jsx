test("o arquivo de estilos globais deve ser importável", () => {
 const css = require("/workspaces/Pedra-Furada/src/pages/styles/globals.css");
 expect(css).toBeDefined();
}); 
