# React Router DOM (Versão 19)

## O que é o React Router DOM?
O **React Router DOM** é uma biblioteca de roteamento para aplicações React. Ele permite criar navegação entre páginas sem a necessidade de recarregar a aplicação, tornando as Single Page Applications (SPA) mais dinâmicas e eficientes.

## Principais Recursos
- **Roteamento baseado em componentes**: Define rotas declarativamente.
- **Rotas Aninhadas**: Permite criar hierarquia de navegação.
- **Rotas Dinâmicas**: Utiliza parâmetros para criar URLs dinâmicas.
- **Lazy Loading**: Carrega componentes sob demanda.
- **Proteção de Rotas**: Implementação fácil de autenticação e autorização.

## Instalação
Para instalar a versão mais recente do React Router DOM, execute o seguinte comando no terminal:

```sh
npm install react-router-dom@latest
```

## Configuração Básica
Após a instalação, configure as rotas no seu projeto:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Hooks do React Router DOM
O React Router DOM fornece hooks poderosos para manipulação de rotas:

### useNavigate
Permite navegar entre páginas programaticamente.

```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Ir para Sobre
    </button>
  );
}
```

### useParams
Obtém parâmetros da URL.

```jsx
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  return <h1>Perfil do usuário: {id}</h1>;
}
```

### useLocation
Retorna informações sobre a URL atual.

```jsx
import { useLocation } from "react-router-dom";

function CurrentPage() {
  const location = useLocation();
  return <p>Você está na página: {location.pathname}</p>;
}
```

### useRoutes
Permite definir rotas de forma programática.

```jsx
import { useRoutes } from "react-router-dom";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

function AppRoutes() {
  return useRoutes(routes);
}
```

## Publicando o Projeto
Após configurar as rotas, você pode publicar seu projeto na **Vercel** ou **Netlify**.

### Publicação na Vercel
1. Criar uma conta na [Vercel](https://vercel.com/).
2. Conectar seu repositório GitHub.
3. Configurar o projeto e implantar automaticamente.

---

Agora você já pode usar o **React Router DOM 19** para criar navegação fluida e eficiente em suas aplicações React!
