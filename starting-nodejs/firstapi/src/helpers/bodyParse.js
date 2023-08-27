/* Body Parse
 * Basicamente, o bodyParse é um middleware que faz o parse do body da requisição
 * e o transforma em um objeto JavaScript.
 * Com isso, podemos acessar os dados da requisição através do objeto req.
 */

const bodyParser = (req, callback, next) => {
  let body = "";

  // Aqui estamos recebendo os dados da requisição
  // e concatenando o body da requisição com o chunk atual
  req.on("data", (chunk) => {
    body += chunk;
  });

  // Aqui estamos finalizando a requisição
  // e enviando uma resposta para o cliente
  req.on("end", () => {
    body = JSON.parse(body);
    req.body = body;
    callback();
  });
};

module.exports = bodyParser;
