import { Command } from "./command";

export class Invoker {
    private command!: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    executeCommand(): void {
        this.command.execute();
    }
}
