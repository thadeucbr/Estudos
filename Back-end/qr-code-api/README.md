<h1>QR Code API</h1>

<h3>Objetivo</h3>
<p>Api desenvolvida com o objetivo de aprender a converter textos em QR Code</p>

<h3>Instalação e execução</h3>
<p>A partir da raiz do projeto, execute no terminal os comandos de NPM ou de YARN</p>

<h4><strong>NPM:</strong></h4>
<ul>
  <li>Instalação: <code>npm install</code></li>
  <li>Executar: <code>npm run dev</code></li>
</ul>

<h4><strong>YARN:</strong></h4>
<ul>
  <li>Instalação: <code>yarn</code></li>
  <li>Executar: <code>yarn dev</code></li>
</ul>

<h3>Requisições</h3>
<p>Segue a baixo a lista de requisições para utilizar com postman, insomnia ou qualquer programa que realize requisições http</p>

<p><strong>POST</strong> <code>http://localhost:3333/img?textToEncode=teste</code></p>
<p><em>Esta rota cria um arquivo .png do QR Code com o texto digitado. Para alterar o conteudo, substitua a palavra <strong>teste</strong> pelo conteudo desejado</em></p>

<p><strong>POST</strong> <code>http://localhost:3333/url?textToEncode=teste</code></p>
<p><em>Esta rota retorna uma url contendo o QR Code, para alterar o conteudo do QR Code sbustitua a palavra teste</em></p>

<p><strong>GET</strong> <code>http://localhost:3333/teste</code></p>
<p><em>Esta rota retorna a imagem salva, caso deseje ver outro barcode salvo substitua o teste pelo conteudo já salvo na primeira rota. <strong>É possivel utilizar esta rota no navegador.</strong></em></p>
