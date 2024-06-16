# TypeWeather

TypeWeather é um projeto de dashboard de clima que utiliza a API de clima da [HG Brasil](http://hgbrasil.com/status/weather) para exibir informações meteorológicas em tempo real. Este projeto foi desenvolvido como uma desafio para fornecer uma interface amigável e intuitiva para visualização de dados climáticos.

## Funcionalidades

- Exibição de temperatura atual
- Previsão do tempo para os próximos dias
- Informações sobre umidade, velocidade do vento e condições climáticas
- Interface responsiva e fácil de usar

## Tecnologias Utilizadas

- **Front-end:** React, Vite
- **Back-end:** Node.js
- **API:** [HG Brasil Weather API](http://hgbrasil.com/status/weather)

## Pré-requisitos

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/typeweather.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd typeweather
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Adicione sua chave no arquivo server.js no parâmetro key:

   ```env
       const response = await axios.get('https://api.hgbrasil.com/weather/', {
        params: {
            key: 'SUA CHAVE',
        ...
   ```

5. Inicie o servidor:

   ```bash
   node server.js
   ```
6. Inicie o front-end:

   ```bash
   npm run dev
   ```
## Uso

Após iniciar o projeto, abra o navegador e acesse `http://localhost:5000` para ver o dashboard do clima.

## Imagens

![image](https://github.com/euaallee/TypeWeather/assets/99816871/4c0ea96d-6ed8-43dc-a263-5630c1d83a54)

![image](https://github.com/euaallee/TypeWeather/assets/99816871/79031faa-98bf-47ad-bdac-bad2b9deb2e1)

## Contribuição

Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Agradecimentos

Agradecemos à [HG Brasil](http://hgbrasil.com/status/weather) por fornecer a API de clima.

---

Feito por [Alexander Joshua](https://github.com/euaallee)
