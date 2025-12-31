import { App, Modal, Setting } from "obsidian";

export class YoutubeLinkModal extends Modal {
    result: string;
    onSubmit: (result: string) => void;

    constructor(app: App, onSubmit: (result: string) => void) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.createEl("h2", { text: "유튜브 링크 삽입" });

        new Setting(contentEl)
            .setName("유튜브 링크")
            .setDesc("삽입할 유튜브 동영상 링크를 입력하세요.")
            .addText((text) =>
                text.setPlaceholder("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                    .onChange((value) => {
                        this.result = value;
                    }));

        new Setting(contentEl)
            .addButton((button) =>
                button.setButtonText("삽입")
                    .setCta()
                    .onClick(() => {
                        this.close();
                        this.onSubmit(this.result);
                    }));
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}


