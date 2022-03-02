## Curso Básico de Typescript

1- precisa ter o NVM e o Node instalados
2- criar o gitignore para node (existem sites na net)
3- criar o projeto node (npm init -y)
4- instalar localmente o typescript (colocar no package.json/devDependencies ou npm i typescript -D)
5- configurar o ambiente para rodar o projeto:
    5.1- para rodar o ts (npm i ts-node -D)
    5.2- instalar o coderunner
    5.3- criar a pasta de config do code (.vscode)
    5.4- criar arquivo de configuracoes locais do code (.vscode/settings.json)
    5.5- configurar code-runner { "code-runner.executorMap": { "typescript": "npx ts-node --files --transpile-only", }}
    5.6- instalacao do eslint extensao e no npm (npm i eslint -D)
    5.6- instalar outras dependencias de lint
        (npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D)
    5.7- criar o arquivo .eslint.js na raiz e colar este código :
        module.exports = {
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 11,
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint'],
            rules: {},
        };
    5.8- instalar a extensao no code e configurar o prettier:
        (npm i prettier eslint-config-prettier eslint-plugin-prettier -D)
    5.9- criar o arquivo .prettierrc.js na raiz e colocar o código abaixo
        module.exports = {
            semi: true,
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 80,
            tabWidth: 2,
        }
    5.10- colocar no settings do .vscode:
        // para o prettier salvar e corrigir
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    5.11- criar o projeto ts (npx tsc --init)
        (no tsconfig.json habilitar "lib": ["ESNext", "DOM"] e o "outDir": "./dist")
        (depois do objeto "compilerOptions", colocar a fonte fo codigo "include" :[ "./src" ]
    5.12- instalar editorConfig for VsCode extensao e criar arquivo .editorconfig na raiz com o botao direito.
        adicionar esse codigo:
        root = true

        [*]
        indent_style = space
        indent_size = 4
        end_of_line = lf
        charset = utf-8
        trim_trailing_whitespace = true
        insert_final_newline = true
        end_of_line = lf

6- para compilar o projeto ts (npx tsc)


Outros:
    - extencoes uteis:
        reload na barra de status (do vscode)
        gitLens
        docker
        material icons theme
