export interface Execution {
  description: string;
  test: () => Promise<void>;
}

export class TestExecutionContext {
  private _executions: Execution[] = [];

  push(microContext: Execution) {
    this._executions.push(microContext);
  }
  get executions() {
    return this._executions;
  }
}
