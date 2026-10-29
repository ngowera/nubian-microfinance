import assert from 'node:assert/strict';
import { validateDetails } from '../lib/loan.ts';
const valid={kind:'personal',name:'Test Applicant',phone:'+265 888 123 456',amount:'250000',business:''};
assert.equal(validateDetails(valid),'');
for(const override of [{amount:'-1'},{amount:'Infinity'},{amount:'1e10'},{amount:'1.234'},{phone:'abc'},{name:'x'},{kind:'business',business:''}])assert.notEqual(validateDetails({...valid,...override}),'');
assert.equal(validateDetails({...valid,kind:'business',business:'Test Shop'}),'');
console.log('Personal and business validation checks passed.');
