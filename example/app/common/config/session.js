'use strict';

module.exports = {
  name: 'thinkjs',
  type: 'file',
  secret: 'ZTL5GDQH',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
}