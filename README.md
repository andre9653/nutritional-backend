# Projeto pessoal de um backend para consultas de alimentos e suas informações nutricionais

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)
- [NestJS](https://nestjs.com/)

## Instalação do banco de dados

Para instalar o banco de dados, é necessário ter o docker instalado na máquina. Após isso, basta executar o comando abaixo:

```bash
 sudo docker pull mysql
```

Após isso, é necessário criar um container com o banco de dados. Para isso, execute o comando abaixo:

```bash
sudo docker run --name mysql-name -e MYSQL_ROOT_PASSWORD= -d mysql:latest
```

O nome do container e a senha do root devem ser setadas em um arquivo `.env` de acordo com o arquivo `.env.example`.

Cheque se o container está ativo com o comando:

```bash
sudo docker ps
```

Caso não esteja, execute o comando:

```bash
sudo docker exec -it mysql-name bash
```

A proxima etapa é saber o IP do container. Para isso, execute o comando:

```bash
sudo docker inspect mysql-name | grep IPAddress
```

O IP do container deve ser setado no arquivo `.env` de acordo com o arquivo `.env.example`.

Na pasta `sql` contem os arquivos para popular o banco de dados. Para isso, execute o comando:
