require("@testing-library/jest-dom/extend-expect");

//import { expect, jest, test } from "@jest/globals";

//import "@testing-library/jest-dom";

//import "@testing-library/jest-dom/extend-expect";

const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
