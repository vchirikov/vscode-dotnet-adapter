import { spawn, ChildProcess, SpawnOptions } from 'child_process';

export default class Command {
    public childProcess: ChildProcess;

    public exitCode: Promise<number>;

    private exitCodeRelease?: (exitCode: number) => void;

    constructor(command: string, args: ReadonlyArray<string>, { env, ...options }: SpawnOptions) {
        this.childProcess = spawn(command, args, { ...options, env: { ...process.env, ...env }});
        this.exitCode = new Promise((resolve, reject) => {
            this.childProcess.on('close', resolve);
            this.childProcess.on('error', reject);
            this.exitCodeRelease = resolve;
        });
    }

    onData(handler: (data: any) => void) {
        this.onStdOut(handler);
        this.onStdErr(handler);
    }

    onStdOut(handler: (data: any) => void) {
        this.childProcess.stdout!.on('data', handler);
    }

    onStdErr(handler: (data: any) => void) {
        this.childProcess.stderr!.on('data', handler);
    }

    dispose() {
        this.childProcess.stdout?.removeAllListeners();
        this.childProcess.stderr?.removeAllListeners();
        if (!this.childProcess.killed) this.childProcess.kill();
        if (this.exitCodeRelease) this.exitCodeRelease(-1);
    }
}