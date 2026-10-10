import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,        // 10 concurrent virtual users
  duration: '10s', // 10-second test window
};

export default function () {
  const res = http.get('http://localhost:3000/server-side');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body contains SSR Demo': (r) => r.body.includes('SSR Demo'),
  });
  sleep(1);
}