const { TextDecoder, TextEncoder } = require("node:util");

require("@testing-library/jest-dom");

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
