//Builder

// Produto
class Lanche {
    constructor() {
        this.nome = null;
        this.pao = false;
        this.carne = false;
        this.queijo = false;
        this.salada = false;
        this.molho = false;
        this.descricao = "Lanche configurado"; 
    }

    showDetails() {
        console.log(`
    ${this.descricao}:
    Nome: ${this.nome}
    Pão: ${this.pao ? "Sim" : "Não"}
    Carne: ${this.carne ? "Sim" : "Não"}
    Queijo: ${this.queijo ? "Sim" : "Não"}
    Salada: ${this.salada ? "Sim" : "Não"}
    Molho: ${this.molho ? "Sim" : "Não"}
    `);
    }
}

// Método Builder
class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setNome(nome) {
        this.lanche.nome = nome;
        return this;
    }

    addPao() {
        this.lanche.pao = true;
        return this;
    }

    addCarne() {
        this.lanche.carne = true;
        return this;
    }

    addQueijo() {
        this.lanche.queijo = true;
        return this;
    }

    addSalada() {
        this.lanche.salada = true;
        return this;
    }

    addMolho() {
        this.lanche.molho = true;
        return this;
    }

    setDescricao(descricao) {
        this.lanche.descricao = descricao;
        return this;
    }

    build() {
        return this.lanche;
    }
}

// Director → Lanches pré-definidos
class LancheDirector {
    static buildSimples() {
        return new LancheBuilder()
            .setNome("X-Burger")
            .addPao()
            .addCarne()
            .setDescricao("Lanche Simples")
            .build();
    }

    static buildCompleto() {
        return new LancheBuilder()
            .setNome("X-Salada")
            .addPao()
            .addCarne()
            .addQueijo()
            .addSalada()
            .addMolho()
            .setDescricao("Lanche Completo")
            .build();
    }

    static buildVegano() {
        return new LancheBuilder()
            .setNome("Vegano")
            .addPao()
            .addSalada()
            .addMolho()
            .setDescricao("Lanche Vegano")
            .build();
    }
}

// Uso
const simples = LancheDirector.buildSimples();
const completo = LancheDirector.buildCompleto();
const vegano = LancheDirector.buildVegano();

const custom = new LancheBuilder()
    .setNome("X-Bacon")
    .addPao()
    .addCarne()
    .addQueijo()
    .addMolho()
    .setDescricao("Lanche Personalizado")
    .build();

simples.showDetails();
completo.showDetails();
vegano.showDetails();
custom.showDetails();
