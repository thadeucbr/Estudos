# Deploy automatico github > aws

Passo a passo para configurar deploy automático na aws a partir da main

Video de origem: https://www.youtube.com/watch?v=Buh3GjHPmjo

Canal: https://www.youtube.com/channel/UCmXgDWSnHMmuDzfB5TKK-XQ

Autor: https://github.com/felixyu9

## 1 - Configurar Roles no IAM do AWS

![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/01.png?raw=true)

### Configurar EC2 Code Deploy Role
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/1-1.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/1-2.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/1-3.png?raw=true)

### Configurar Code Deploy Role
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/2-1.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/2-1-2.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/2-2.png?raw=true)

## 2 - Criar a instancia no EC2
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/03.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-1.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-2.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-3.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-4.png?raw=true)

### Colar esse codigo no user data
```
#!/bin/bash
sudo yum -y update
sudo yum -y install ruby
sudo yum -y install wget
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto

```
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-5.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-6.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/3-7.png?raw=true)

## 3 - Configurar CodeDeploy
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/04.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-1.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-2.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-3.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-4.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-5.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-6.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/4-7.png?raw=true)

## 4 - Configurar pipeline
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/5-1.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/5-2.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/5-3.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/5-4.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/5-5.png?raw=true)
![alt text](https://github.com/thadeucbr/Aws-Code-Deploy/blob/main/Images/5-6.png?raw=true)

## 5 - Configurando o projeto

1. Copie o arquivo appspec.yml disponivel nesse repositório para a pasta raiz do seu projeto (mesmo nivel do package.json)
2. Copie a pasta scripts disponivel nesse repositório para a pasta raiz do seu projeto
3. Realize as modificações necessárias nos scripts, modificando o nome do projeto, parametros de execução, etc.
