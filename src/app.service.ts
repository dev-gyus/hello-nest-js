import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly logger: Logger) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  postHello(testParam: number) {
    this.logger.log("testParam: " + testParam);
    this.logger.error("testParam: " + testParam);
    this.logger.warn("testParam: " + testParam);
    this.logger.debug("testParam: " + testParam);
    return "test완";
  }
}
