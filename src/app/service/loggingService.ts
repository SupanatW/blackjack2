import { LoggingListener } from './loggingListener';

export class LoggingService {
  static logListeners: LoggingListener[] = [];
  static subscribe(listener: LoggingListener) {
    this.logListeners.push(listener);
  }
  static log(str: string) {
    this.logListeners.forEach(l => {l.log(str); });
  }
}
