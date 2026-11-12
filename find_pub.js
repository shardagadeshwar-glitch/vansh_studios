const fs = require('fs');
const text = fs.readFileSync('C:\\Users\\gt\\.gemini\\antigravity\\brain\\5cb1af1c-2ed5-480c-9887-760877583f56\\.system_generated\\steps\\661\\output.txt', 'utf8');

// Find json
const jsonStart = text.indexOf('{');
if (jsonStart !== -1) {
  try {
    const data = JSON.parse(text.slice(jsonStart));
    console.log('Site name:', data.name);
    console.log('Published deploy id:', data.published_deploy ? data.published_deploy.id : 'none');
    console.log('Published deploy title:', data.published_deploy ? data.published_deploy.title : 'none');
    console.log('Published deploy url:', data.published_deploy ? data.published_deploy.ssl_url : 'none');
  } catch (e) {
    console.log('Parse error:', e.message);
  }
}
