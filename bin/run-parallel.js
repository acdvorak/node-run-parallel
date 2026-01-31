#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { delimiter, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const here = dirname(fileURLToPath(import.meta.url));
const localBin = join(here, '../node_modules/.bin');
const env = { ...process.env };
env.PATH = env.PATH ? `${localBin}${delimiter}${env.PATH}` : localBin;

const result = spawnSync(
  'npm-run-all',
  ['--parallel', '--aggregate-output', '--continue-on-error', ...args],
  {
    stdio: 'inherit',
    shell: true, // Resolve npm-run-all(.cmd) on Windows
    env,
  },
);

process.exit(result.status ?? 1);
