import qr from "qrcode-terminal";
import chalk from "chalk";
import validator from "validator"; 

async function handle(err, result) {
  if (err) {
    console.error(chalk.red("Erro ao processar o QR Code."));
    return;
  }

  // Validação do link
  if (!validator.isURL(result.link, { require_protocol: true })) {
    console.log(chalk.red("O link fornecido não é válido! Certifique-se de incluir o protocolo (http/https)."));
    return;
  }

  const isSmall = result.type == 2;

  // Geração do QR Code
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handle;
