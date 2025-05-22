import {Injectable, LoggerService, LogLevel} from "@nestjs/common";

@Injectable()
export class MyLogger implements LoggerService {
    log(message: any, ...optionalParams: any[]) {
        console.log(message, optionalParams);
    }
    error(message: any, ...optionalParams: any[]) {
        console.error(message, optionalParams);
    }
    warn(message: any, ...optionalParams: any[]) {
        console.warn(message, optionalParams);
    }
    debug(message: any, ...optionalParams: any[]) {
        console.debug(message, optionalParams);
    }
    verbose?(message: any, ...optionalParams: any[]) {
        throw new Error("Method not implemented.");
    }
    fatal?(message: any, ...optionalParams: any[]) {
        throw new Error("Method not implemented.");
    }
    setLogLevels?(levels: LogLevel[]) {
        throw new Error("Method not implemented.");
    }

}