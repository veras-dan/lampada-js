# Lâmpada JS

Manipulando imagens com JS

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 - [Git](https://git-scm.com).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

## Rodando localmente

Clone o projeto:

```bash
  git clone https://veras-dan/lampada-js/
```

Entre no diretório do projeto:

```bash
  cd lampada-js
```
---

___

## Teste
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

## Melhor solução

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

<br>

## Contribuindo

Contribuições são sempre bem-vindas!

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)
 
## Autores

<a href="https://github.com/veras-dan">
 <img style="border-radius: 50%;" src="https://media.discordapp.net/attachments/891798888594436199/980284436954357780/perfil_dan.jpg?width=406&height=406" width="100px;" alt="foto"/>
 <br />
 <sub><b>Dan Veras</b></sub></a> <a href="https://github.com/veras-dan" title="">🚀</a>
 <br />

---
  [![Twitter Badge](https://img.shields.io/badge/-@veras_dan-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/veras_dan)](https://twitter.com/veras_dan) [![Linkedin Badge](https://img.shields.io/badge/-Danilo_Veras-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/verasdanilo/)](https://www.linkedin.com/in/verasdanilo/) 
  [![Gmail Badge](https://img.shields.io/badge/-dveras1623@gmail.com-FF3333?style=flat-square&logo=gmail&logoColor=white&link=mailto:dveras1623@gmail.com)](mailto:dveras1623@gmail.com)


## Suporte

Para suporte, mande um email para dveras1623@gmail.com.
