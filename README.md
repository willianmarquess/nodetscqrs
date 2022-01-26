# Cliente API - Node, Typescript, Express, CQRS Pattern

![GitHub repo size](https://img.shields.io/github/repo-size/willianmarquess/nodetscqrs?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/willianmarquess/nodetscqrs?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/willianmarquess/nodetscqrs?style=for-the-badge)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Nodejs >= 6.9

Para executar o projeto siga os seguintes passos:
1. npm install
2. npm start
3. abra no navegador http://localhost:3000/cliente (deve retornar uma lista de clientes)

## Motivação 	:thought_balloon:

O projeto foi desenvolvido para fins didáticos, promovendo uma prática nos estudos sobre S.O.L.I.D e CQRS Pattern utilizando a plataforma NodeJs com Typescript.
A ideia foi desenvolver uma API utilizando orientação a objetos, seguindo os conceitos do S.O.L.I.D

1. S (Princício da responsabilidade única) - Desenvolver classes e métodos que tenham somente um propósito.
2. O (Princípio aberto fechado) - Desenvolver classes que possam estender comportamentos de outras classes sem modificar a classe pai.
3. L (Princípio da substituição de Liskov) - Desenvolver classes pai que possam ser substituíveis por suas classes filhas.
4. I (Princípio da Segregação de Interface) - Desenvolver interfaces específicas e buscando não utilizar interfaces genéricas.
5. D (Princípio da Inversão de Dependencia) - Desenvolver as classes fazendo com que sempre dependam de abstrações e não de implementações.

## CQRS Pattern

O CQRS significa Separação das Operações de Comando e de Consulta, um padrão que separa as operações de leitura e atualização de um armazenamento de dados. A implementação do CQRS em seu aplicativo pode maximizar o desempenho, a escalabilidade e a segurança. A flexibilidade criada pela migração para o CQRS permite ao sistema evoluir melhor ao longo do tempo e impede que os comandos de atualização causem conflitos de mesclagem no nível de domínio.
referência: https://docs.microsoft.com/pt-br/azure/architecture/patterns/cqrs

<img src="https://miro.medium.com/max/1400/1*9PIFrsO4_ZGes2uTXCVTgQ.png" >
referência: https://henriquesd.medium.com/the-command-and-query-responsibility-segregation-cqrs-pattern-16cb7704c809



