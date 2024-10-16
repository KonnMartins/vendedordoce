
# VendedorDocesApp

Este é um aplicativo mobile simples, desenvolvido com **React Native** e **Expo**, destinado a vendedores autônomos de doces. O app permite gerenciar o estoque, exibir um cardápio e controlar as vendas de doces.

## Funcionalidades

- **Estoque**: Adicione novos doces e gerencie o estoque.
- **Cardápio**: Veja os doces disponíveis no cardápio, como brigadeiro, beijinho, quindim e cajuzinho.
- **Controle de Vendas**: Calcule o lucro com base nas vendas de doces.

## Tecnologias Utilizadas

- **React Native**
- **Expo**
- **React Navigation**: Para navegação entre telas.
- **AsyncStorage**: Para persistência de dados localmente.
  
## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Pré-requisitos

- Node.js
- Expo CLI (caso não tenha instalado, use o comando `npm install -g expo-cli`)

### 2. Clone o repositório

```bash
git clone https://github.com/seu-usuario/VendedorDocesApp.git
cd VendedorDocesApp
```

### 3. Instale as dependências

Execute o comando:

```bash
npm install
```

### 4. Inicie o projeto

Para iniciar o projeto no simulador ou dispositivo, utilize o comando:

```bash
expo start
```

### 5. Rodando no dispositivo físico

Baixe o aplicativo **Expo Go** na Google Play ou App Store. Em seguida, escaneie o QR code gerado no terminal ou no navegador após rodar `expo start`.

## Estrutura do Projeto

```bash
VendedorDocesApp/
 ├── App.js                 # Arquivo principal de navegação do app
 ├── components/
 │    └── DoceItem.js        # Componente para exibir informações dos doces
 ├── screens/
 │    ├── EstoqueScreen.js   # Tela de Estoque
 │    ├── CardapioScreen.js  # Tela de Cardápio
 │    └── VendasScreen.js    # Tela de Controle de Vendas
 └── README.md               # Documentação do projeto
```

## Telas do Aplicativo

### 1. **Tela de Estoque**
Permite ao usuário adicionar novos doces e gerenciar o estoque.

### 2. **Tela de Cardápio**
Mostra uma lista dos doces disponíveis: brigadeiro, beijinho, quindim e cajuzinho.

### 3. **Tela de Controle de Vendas**
Permite calcular o lucro com base nas vendas realizadas.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

## Contato

Para dúvidas ou sugestões, entre em contato: **seu-email@exemplo.com**
