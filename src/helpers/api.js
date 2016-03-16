import request from 'superagent';
import _ from 'lodash';
import q from 'q';

export function get (url, mockCall) {
  const deferred = q.defer();

  if (mockCall) {
    console.error('MOCKED CALL', url);
    deferred.resolve({ success: 'true' });
    return deferred.promise;
  }

  request
    .get(url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        return deferred.reject(_.isObject(res.text) ? JSON.parse(res.text) : res.text);
      }

      deferred.resolve(JSON.parse(res.text));
    });

  return deferred.promise;
}

export function post (url, data, mockCall) {
  const deferred = q.defer();

  if (mockCall) {
    console.error('MOCKED CALL', url);
    deferred.resolve({ success: 'true' });
    return deferred.promise;
  }

  request
    .post(url)
    .send(data)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        return deferred.reject(_.isObject(JSON.parse(res.text)) ? JSON.parse(res.text) : res.text);
      }

      deferred.resolve(JSON.parse(res.text));
    });

  return deferred.promise;
}

export default {
  post: post,
  get: get
};
