# Coding style
  - https://github.com/airbnb/javascript
  - https://standardjs.com/
  - https://github.com/google/eslint-config-google
  - https://www.npmtrends.com/eslint-config-airbnb-vs-eslint-config-google-vs-standard
  - Tools: eslint, prettier
# Debugging

## Web pages in browser console
  - (Chrome/Edge/Firefox) -> F12 / Ctrl(Cmd) + J

## Node
  - Run ts-node and break on first line: 
    - `node --inspect-brk -r ts-node/register session5/5-classes.ts`
  - Open `chrome://inspect` or `edge://inspect`
  - Click the Configure button and ensure your target host and port are listed
  - Click "Open dedicated DevTools for Node"
