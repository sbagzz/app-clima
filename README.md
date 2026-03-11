# 🌤️ App Clima

Aplicação web para consultar informações de clima em tempo real utilizando a API OpenWeatherMap.

## 📋 Sobre o Projeto

Este é um projeto React com Vite que permite aos usuários buscar informações climáticas de qualquer cidade do mundo. A aplicação exibe temperatura, umidade, velocidade do vento e outras informações meteorológicas.

## 🚀 Começando

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Chave da API OpenWeatherMap (obtenha em https://openweathermap.org/api)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sbagzz/app-clima.git
cd app-clima
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Adicione sua chave da API OpenWeatherMap no arquivo `.env`:
```
VITE_OPENWEATHER_API_KEY=sua_chave_aqui
```

### Desenvolvimento

Para rodar o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação será acessível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

### Preview da Build

```bash
npm run preview
```

## 🛠️ Stack Tecnológico

- **React** 18.2.0 - Biblioteca UI
- **Vite** 4.3.9 - Build tool e dev server
- **OpenWeatherMap API** - Dados meteorológicos

## 📦 Dependências

- react: ^18.2.0
- react-dom: ^18.2.0

## 🔧 DevDependencies

- @vitejs/plugin-react: ^4.0.0
- vite: ^4.3.9

## 📝 Estrutura do Projeto

```
app-clima/
├── public/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos da aplicação
│   ├── main.jsx         # Entrada da aplicação
│   └── index.css        # Estilos globais
├── index.html           # Template HTML
├── package.json         # Dependências
├── vite.config.js       # Configuração Vite
└── README.md            # Este arquivo
```

## 🌐 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `VITE_OPENWEATHER_API_KEY` | Chave da API OpenWeatherMap |

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor
Gabriel Noronha de Araujo
Desenvolvido como um projeto de aprendizado em JavaScript/React.



Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📧 Suporte

Se encontrar algum problema, abra uma [issue](../../issues) no GitHub.


