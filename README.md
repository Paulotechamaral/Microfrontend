Este projeto demonstra a divisão de uma aplicação React em três micros independentes, integrados por uma aplicação container, utilizando **Webpack Module Federation**.

---

-Estrutura dos Micro Frontends

| App | Porta | Função |
|------|--------|--------|
| Order | 3002 | Gerencia e exibe os itens adicionados ao pedido |
| Menu | 3001 | Exibe a lista de pratos disponíveis com botão de adicionar |
| Container | 3000 | Integra os micros e orquestra a aplicação principal |

---

Ordem de Execução

1️⃣ Abra três terminais separados.  
2️⃣ Em cada pasta (`order`, `menu`, `container`), execute os comandos abaixo:

```bash
npm install
npm start
```

Execute na seguinte ordem para evitar falhas de importação:

1. `order` → executa em http://localhost:3002  
2. `menu` → executa em http://localhost:3001 
3. `container` → executa em http://localhost:3000

---

Comunicação entre os Micros

A comunicação entre os micros ocorre via eventos globais do navegador (`window.dispatchEvent` e `window.addEventListener`).


Tecnologias Utilizadas

- React 18
- Webpack 5 (Module Federation)
- Babel
- JavaScript (ES6+)
- HTML / CSS


Objetivo

Demonstrar na prática:
 A integração de múltiplos micro frontends com React.
 A comunicação entre micros sem acoplamento.
 A configuração de Module Federation para cenários reais de desenvolvimento distribuído.
