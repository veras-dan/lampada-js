# 📌 Lâmpada JS

Manipulando imagens com JS

## 🛠 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

 - [`Git`](https://git-scm.com)
 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 💻 Rodando localmente

Clone o projeto:

```bash
  git clone https://veras-dan/lampada-js/
```

Entre no diretório do projeto:

```bash
  cd lampada-js
```
___

## 🧪 Teste
Utilizando a lingagem JavaScript para manipular alguns elementos dentro da pagina HMTL. Foi utilizado esse script inicial para realizar alguns testes e por em prática a linguagem.

    <script>
    function acendeLampada(){
        document.getElementById("luz").src = "assets/img/lampada-acesa.jpg";
    }

    function apagaLampada(){
        document.getElementById("luz").src = "assets/img/lampada-apagada.jpg";
    }

    function quebraLampda(){
        document.getElementById("luz").src = "assets/img/lampada-quebrada.jpg";
    }

    </script>

<br>

foi utilizado 3 imagens para este teste.

![lampada-apagada](assets/img/lampada-apagada.jpg)
![lampada-acesa](assets/img/lampada-acesa.jpg)
![lampada-quebrada](assets/img/lampada-quebrada.jpg)

<br>

___

## Melhorando o codigo

Foi feita uma melhora no codigo para uma melhor compreensão e leitura do mesmo. Nessa parte foi utilizada o if para identificar a mudança de cada elemento.

    var quebrada = false;
    function mudaLampada(tipo){
        if (tipo == 1){
            arquivo = "assets/img/lampada-acesa.jpg";
        }

        if (tipo == 2){
            arquivo = "assets/img/lampada-apagada.jpg";
        }

        if (tipo == 3){
            arquivo = "assets/img/lampada-quebrada.jpg";
            
        }
        
        if (!quebrada){
            document.getElementById("luz").src = arquivo;
            if (tipo == 3){
                quebrada = true;
            }
        }

<br>

___

## ✨ Melhor solução

Para finalizar e ter um redimento no código foi melhorado e o final foi esse utilizando concatenação.

    var quebrada = false;
    function mudaLampada(tipo){
        
        if (!quebrada){
            document.getElementById("luz").src = "assets/img/" + tipo + ".jpg";
            if (tipo == 'lampada-quebrada'){
                quebrada = true;
            }
        }
        
    }

<br>

___



## 📝 Contribuindo

> Contribuições são sempre bem-vindas! Caso tenha alguma dúvida confira este [`guia de como contribuir no GitHub`](./CONTRIBUTING.md).

## ✍🏻 Autores

<a href="https://github.com/veras-dan">
 <img style="border-radius: 50%;" src="https://media.discordapp.net/attachments/891798888594436199/980284436954357780/perfil_dan.jpg?width=100&height=100" width="60px;" alt="foto"/>
 <br />
 <sub><b>Dan Veras</b></sub></a>
 <br />

---

## 📖 Contatos 

Alguns canais para entrar em contato:

[![Discord Badge](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/Dan#5690)
[![Twitter Badge](https://img.shields.io/badge/Twitter-1ca0f1?style=for-the-badge&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/veras_dan)](https://twitter.com/veras_dan) 
[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/verasdanilo/)](https://www.linkedin.com/in/verasdanilo/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-FF3333?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:dveras1623@gmail.com)](mailto:dveras1623@gmail.com)

## 📝 Licença

Este projeto esta sobe a licença [`MIT licensed`](./LICENSE).


# 🔗 Referência

 - [`Gustavo Guanabara`](https://www.cursoemvideo.com/curso/html5/)