import test from './mockApi/basicExample';

export default {
  local: {
    '/mock': () => ({ data: {} }),
    '/mock-error':  () => ({ message: 'deu ruim', status: '404' }),
    '/test-mock': () => test.returnTestOk(),
    '/test-mock-error': () => test.returnTestError()
  },
  external: {
    'http://bla.com/bla': () => ({ data: {} }),
    'http://bla.com/bla-error': () => ({ error: 'bla' }),
  },
};
