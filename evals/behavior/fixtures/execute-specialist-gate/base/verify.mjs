import { readFileSync } from 'node:fs';

const contract = JSON.parse(readFileSync('provider-contract.json', 'utf8'));
if (contract.lookupVersion !== 2) throw new Error('Lookup contract v2 is required');
