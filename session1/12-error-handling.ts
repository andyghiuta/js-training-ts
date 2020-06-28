try {
  // code...
} catch (err) {
  // error handling
} finally {
  // all
}

// extending error
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError'; // (different names for different built-in error classes)
  }
}

const parseJson = (json: string) => {
  if (!json) {
    throw new ValidationError('JSON is required');
  }
  JSON.parse(json);
};

const tryParseJson = (json: string) => {
  try {
    parseJson(json);
  } catch (e) {
    // rethrow if needed
    if (e.name === 'ValidationError') {
      // show a nice error message to the user
    } else if (e.name === 'SyntaxError') {
      console.log(e.name); // SyntaxError
      console.log(e.message); // Unexpected token b in JSON at position 2
    } else {
      throw e;
    }
  }
};
tryParseJson(null);
tryParseJson('{ bad json o_O }');
