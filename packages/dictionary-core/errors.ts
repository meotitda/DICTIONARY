interface ErrorOptions {
  errorLine?: number;
  errorCursor?: number;
  errorLineStr?: string;
}

export class UndefinedLabelError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class DuplciatedError extends Error {
  constructor(message: string, options: ErrorOptions) {
    const { errorLine, errorCursor, errorLineStr } = options;
    super(
      `DuplciatedError(${errorCursor}:${errorLine}) ${message}\n${errorLineStr}`
    );
  }
}

export class DSyntaxError extends Error {
  constructor(message: string, options: ErrorOptions) {
    const { errorLine, errorCursor, errorLineStr } = options;
    super(
      `DSyntaxError(${errorCursor}:${errorLine}) ${message}\n${errorLineStr}`
    );
  }
}
