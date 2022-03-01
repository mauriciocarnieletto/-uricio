export interface Execution {
  description: string;
  test: () => Promise<void>;
}

type ExecutionStatus = {
  isExecuted: boolean;
  isSucceeded: boolean;
  initialTime: number;
  endTime: number;
};

export class TestExecutionContext {
  private _executions: Execution[] = [];
  private _executionStatus: ExecutionStatus[] = [];

  push(microContext: Execution) {
    this._executions.push(microContext);
  }

  get executions() {
    return this._executions;
  }
}
