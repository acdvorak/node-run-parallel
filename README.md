# @acdvorak/run-parallel

CLI alias for `npm-run-all --parallel --aggregate-output --continue-on-error`.

## Install

```sh
npm i -D @acdvorak/run-parallel
```

## Usage

```sh
run-parallel "lint:*"
run-parallel clean:*
run-parallel fmt:rs fmt:ts
```

## Notes

- Forwards all arguments to
  [`npm-run-all`](https://www.npmjs.com/package/npm-run-all).
- Always applies `--parallel --aggregate-output --continue-on-error`.
