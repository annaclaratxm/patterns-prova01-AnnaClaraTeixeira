class LightButton {
    render() {
        return "Botão branco criado!";
    }
}

class DarkButton {
    render() {
        return "Botão preto criado!";
    }
}

class ButtonFactory {
    createButton() {
        throw new Error("Método abstrato deve ser implementado");
    }
}

class LightButtonFactory extends ButtonFactory {
    createButton() {
        return new LightButton();
    }
}

class DarkButtonFactory extends ButtonFactory {
    createButton() {
        return new DarkButton();
    }
}

const buttonFactories = {
    light: new LightButtonFactory(),
    dark: new DarkButtonFactory(),
};

class ButtonApp {
    constructor(factory) {
        this.button = factory.createButton();
    }

    render() {
        console.log(this.button.render());
    }
}

function main() {
    const themes = ["light", "dark"];

    themes.forEach((theme) => {
        console.log(`\n>> Fábrica de botões selecionada: ${theme} <<`);
        const factory = buttonFactories[theme];
        if (!factory) throw new Error("Tema não suportado");

        const app = new ButtonApp(factory);
        app.render();
    });
}

main();
