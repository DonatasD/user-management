import { NotFoundInterceptor } from './not-found.interceptor';

describe('TestInterceptor', () => {
  it('should be defined', () => {
    expect(new NotFoundInterceptor()).toBeDefined();
  });
});
