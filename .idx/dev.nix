{ pkgs, ... }: {
  # Define o canal de pacotes do Nix. "stable-24.05" é uma boa escolha.
  channel = "stable-24.05";

  # Lista os pacotes essenciais para o ambiente.
  packages = [
    pkgs.nodejs_20 # Precisamos do Node.js
    pkgs.pnpm       # E do pnpm, a ferramenta correta para este projeto.
  ];

  # Configurações do ambiente de desenvolvimento (IDX).
  idx = {
    # Extensões úteis do VS Code.
    extensions = [
      "esbenp.prettier-vscode" # Para formatação de código.
      "dbaeumer.vscode-eslint"  # Para identificar problemas no código.
    ];

    # Define o que acontece no ciclo de vida do workspace.
    workspace = {
      # Comandos que rodam TODA VEZ que o workspace inicia.
      onStart = {
        # Garante que as dependências do projeto sejam instaladas.
        # O `--prefix` aponta para a pasta correta do projeto.
        install-deps = "pnpm install --prefix 01-css-global";
      };
    };

    # Configura a aba de pré-visualização (Preview).
    previews = {
      enable = false;
      previews = {
        # A pré-visualização padrão que chamaremos de "web".
        web = {
          # Comando para iniciar o servidor de desenvolvimento.
          command = ["pnpm" "run" "dev" "--prefix" "01-css-global"];
          manager = "web";
        };
      };
    };
  };
}
