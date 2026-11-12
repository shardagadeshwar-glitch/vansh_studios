const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:\\Users\\gt\\.gemini\\antigravity\\brain\\5cb1af1c-2ed5-480c-9887-760877583f56\\.system_generated\\logs\\transcript.jsonl')
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.step_index >= 630 && obj.step_index <= 660) {
      const summary = obj.tool_calls && obj.tool_calls[0] ? (obj.tool_calls[0].toolSummary || obj.tool_calls[0].CommandLine) : (obj.content ? obj.content.slice(0, 100) : '');
      console.log(`[${obj.step_index}] ${obj.type}: ${summary}`);
    }
  } catch(e) {}
});
