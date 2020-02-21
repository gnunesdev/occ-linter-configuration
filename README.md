## :computer: Configuração do Visual Code + Linters:

O objetivo deste repositório é fornecer um guia simples para instação das bibliotecas e extensões necessárias para a devida formatação de código nos reposítorios de projetos OCC. Para mais informações e documentação, acesse o seguinte link: [OCC Enext](https://google.com.br/).

### ESLint

O Eslint é uma extensão para VS Code que é responsável por verificar o código javascript e apontar erros comuns e ou específicos baseado na sua configuração. É de extrema importância a instalação do mesmo para manter a padronização de código entre os times, mais informações podem ser encontradas na doc: [ESLint](https://eslint.org/)

#### Instalação

Você pode acessar o link da extensão: [ESLint](dbaeumer.vscode-eslint) de dentro do visual code, ou abrir a guia de extensões clicando no menu lateral ou apertando `Ctrl`+`Shit`+`X` e pesquisando por ESLint, uma vez aberto o link da extensão, basta clicar em `install`.

A configuração e regras que o ESLint irá seguir já está feita no repositório, portanto, apenas certifique-se que nas configurações do VS Code você tem a seguinte opção: 

```js
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

OBS: Para abrir as configurações do VS Code em formato de JSON, como no exemplo acima, basta abrir a ferramente de comandos com as teclas `Ctrl`+`Shif`+`P` e pesquisar pela opção: `Preferences: Open Settings (JSON)`.

### Prettier

Assim como o ESLint, o Prettier é uma extensão/biblioteca, o mesmo será responsável por garantir que todas as regras de formatação de código definidas no repositório sejam aplicadas corretamente. Além disso, integrando-o com o ESLint, temos a possiblidade de corrigir todos os problemas de um arquivo salvando-o com `Ctrl`+`S`, assim sempre temos a garantia que o código desenvolvido está seguindo os padrões definidos!

#### Instalação

Você pode seguir o mesmo processo de instalação do ESLint para instalar o Prettier. Uma vez instalado, você pode abrir 
as configurações do VS Code e colocar a seguinte opção para garantir que as regras serão aplicadas ao salvar o arquivo:

```js
"editor.formatOnSave": true
```

### EditorConfig

Assim como os demais, o EditorConfig é uma extensão que ajuda a definir o padrão de configurações específicas, como espaços entre caracteres, formatação de quebra de linha, dentre outras que variam entre S.O e IDE's.

Basta instalar a extensão do VS Code que as regras definidas no arquivo `.editorconfig` na raíz do projeto serão aplicadas.


## :memo: Informações

Esse guia está em desenvolvimento, quaisquer sugestões e/ou correções são bem vindas!.

---

Feito com ♥ by gnunesinf :D :wave: