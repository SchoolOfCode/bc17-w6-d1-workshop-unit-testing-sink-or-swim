import {test, expect} from 'vitest';

import {sum} from './sum.js';

test ("sum of numbers",() => {
  const result = sum(8, 9)  
    expect(result).toBe(17);
});