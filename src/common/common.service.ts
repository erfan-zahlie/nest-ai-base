import { Injectable } from '@nestjs/common';
import pRetry from 'p-retry';
import pThrottle from 'p-throttle';

@Injectable()
export class CommonService {

  handleRetry(fn, number: number) {
    return pRetry(fn, {
      minTimeout: 1000,
      factor: 2,
      retries: number,
      onFailedAttempt: (error) =>
        console.error(
          `Retry: ${error.attemptNumber}, Left: ${error.retriesLeft}`,
          error.error.message,
        ),
    });
  }

  handleThrottle(
    fn,
    config: {
      numberOfRequests: number;
      perSecond: number;
    },
  ) {
    const throttle = pThrottle({
      limit: config.numberOfRequests,
      interval: config.perSecond * 1000,
    });
    return throttle(fn);
  }
  
}
