const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:\\Users\\gt\\.gemini\\antigravity\\brain\\5cb1af1c-2ed5-480c-9887-760877583f56\\.system_generated\\logs\\transcript.jsonl')
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      console.log(`[Step ${obj.step_index}] USER: ${obj.content ? obj.content.replace(/\n/g, ' ').slice(0, 180) : ''}`);
    }
  } catch(e) {}
});
