import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("Tela de inserção de email", () => {
    it('Verificando se existe o campo Email.', () => {
      render(<App />);
      const inputEmail = screen.getByLabelText('Email');
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail).toHaveProperty('type', 'email');
    });
    it('Verificando se existe um botão de enviar', () => {
      render(<App />);
      const btnSend = screen.getByTestId('id-send');
      expect(btnSend).toBeInTheDocument();
      expect(btnSend).toHaveProperty('type', 'button');
      expect(btnSend).toHaveValue('Enviar');
    });
    it('Verificando se existem dois botões', () => {
      render(<App />);
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });
    it('Verificando se o botão e o campo email estão funcionando.', () => {
      render(<App />);
    
      const EMAIL_USER = 'email@email.com';
    
      const textEmail = screen.getByTestId('id-email-user');
      expect(textEmail).toBeInTheDocument();
      expect(textEmail).toHaveTextContent('Valor:');
    
      const btnSend = screen.getByTestId('id-send');
      const inputEmail = screen.getByLabelText('Email');
      userEvent.type(inputEmail, EMAIL_USER);
      userEvent.click(btnSend);
    
      expect(inputEmail).toHaveValue('');
      expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
    });
    
});

// sobre o ultimo teste:
// Passo 1: Renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável (o que é uma boa prática).

// Passo 2: Verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor:,

// Passo 3: Procuramos pelo o campo de email e o botão que enviará os dados.

// Passo 4: Simulamos a digitação da pessoa usuária no campo de email, com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ('email@email.com').

// Passo 5: Simulamos um clique no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro.

// Passo 6: Verificamos se após o click, o campo de input do email retorna para vazio e se a tag <h2>, que anteriormente só exibia Valor:, agora recebe o email passado ao input, resultando em Valor: email@email.com.