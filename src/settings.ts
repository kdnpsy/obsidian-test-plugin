import {App, PluginSettingTab, Setting} from "obsidian";
import MyPlugin from "./main";

export interface MyPluginSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}


export class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
        const { containerEl } = this;
        containerEl.empty();
        new Setting(containerEl)
            .setName("Sample Setting")
            .setDesc("This is a sample setting.")
            .addText(text => text.setPlaceholder("Enter something..."));
    }
}
