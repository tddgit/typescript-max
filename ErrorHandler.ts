export class ErrorHandler {
    constructor(public messageBox: any, protected httpClient: any) {}
    wrapError(err: Error, publicResponse: string, severity: number) {
        let error = {
            originalError: err,
            publicResponse,
            severity,
        };
        if (severity < 5) {
            this.handleWarning('Warning', publicResponse);
        } else {
            this.handleError('Critical Error', publicResponse);
        }
    }

    private handleWarning(header: string, content: string) {
        this.messageBox.show(header, content);
    }

    private handleError(header: string, content: string) {
        this.messageBox.show(header, content);
    }
}

export class ErrorLogger {
    private _endpoint: string = 'api/log';
    constructor(private _httpClient: any) {}

    logError(errorObject: unknown) {
        return this._httpClient.post(this._endpoint, errorObject);
    }
}

export class ErrorHandlerWithLogging extends ErrorHandler {
    constructor(
        public messageBox: any,
        protected httpClient: any,
        public logger: ErrorLogger
    ) {
        super(messageBox, httpClient);
    }

    wrapError(err: Error, publicResponse: string, severity: number) {
        // this.logger = new ErrorLogger(this.httpClient);
        return this.logger.logError(err).then(() => {
            console.log('Error logged');
            super.wrapError(err, publicResponse, severity);
        });
    }
}
