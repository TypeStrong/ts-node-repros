console.log('Some .ts code reproducing a bug');

import * as newrelic from 'newrelic';

console.log('>>> newrelic: ' + JSON.stringify(newrelic));

newrelic.noticeError(new Error('some error'));

console.log('the end');
