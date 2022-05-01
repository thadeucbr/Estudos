#!/bin/bash

#give permission for everything in the express-app directory

sudo chmod -R 777 /home/ec2-user/qr-code-api #Mudar o qr-code-api para o nome da pasta do seu projeto

#navigate into our working directory where we have all our github files

cd /home/ec2-user/qr-code-api #Mudar o qr-code-api para o nome da pasta do seu projeto

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
npm install

npm run build #Caso precise fazer o build antes e esteja configurado no package.json

cd /home/ec2-user/qr-code-api/dist #Mudar para o caminho do arquivo de execução do seu projeto, index, app, server, etc.
#start our node app in the background
node server.js > app.out.log 2> app.err.log < /dev/null &  #Mudar o server.js para o arquivo inicializador ex: app, index, server, etc.