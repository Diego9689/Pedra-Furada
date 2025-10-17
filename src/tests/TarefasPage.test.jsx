import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../pages/TarefasPage";

test("deve atualizar o status da tarefa ao clicar no botão", () => {
  render(<TarefasPage />);
  
  const botoes = screen.getAllByText("Atualizar");
  expect(botoes.length).toBeGreaterThan(0);
  
  // Clica no primeiro botão "Atualizar"
  fireEvent.click(botoes[0]);

  // Agora verifica se o texto "Em andamento" aparece
  const statusAtualizado = screen.getByText("Em andamento");
  expect(statusAtualizado).toBeInTheDocument();
});
