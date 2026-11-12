const https = require('https');
const token = 'nfp_HJQKMTMBqc5na2TdQdULn9HHwv6yNwsW5c94';
const siteId = '8afb0d02-9871-41dd-82e2-8a74e2e5f5e8';

const req = https.request({
  hostname: 'api.netlify.com',
  path: `/api/v1/sites/${siteId}/deploys`,
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
}, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      console.log('Total deploys found:', json.length);
      json.forEach((d, i) => {
        console.log(`[${i}] ID: ${d.id} | Created: ${d.created_at} | State: ${d.state} | Title: ${d.title || ''} | URL: ${d.deploy_ssl_url || d.ssl_url || d.url}`);
      });
    } catch(e) {
      console.error(e);
    }
  });
});
req.end();
