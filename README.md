# Spryker Frontend Configs

> Monorepo for all Frontend configurations for formatters, linters, etc.

| Tool                                        | Package                              |
| ------------------------------------------- | ------------------------------------ |
| [Eslint](https://eslint.org/)               | `@spryker/frontend-config.eslint`    |
| [Prettier](https://prettier.io/)            | `@spryker/frontend-config.prettier`  |
| [Stylelint](https://stylelint.io/)          | `@spryker/frontend-config.stylelint` |
| [Tslint](https://palantir.github.io/tslint) | `@spryker/frontend-config.tslint`    |
|                                             |                                      |

## Releases

All packages will be automatically released by `lerna` if they were changed and correct commit
message type was used (`feat` or `fix`).

For commit messages [Conventinal Commits Spec](https://www.conventionalcommits.org/en/v1.0.0/) must be followed.

Releases will happen from the following branches:
- **`master`** - to `@latest` NPM tag
- **`master/republish`** - recover publishing of failed NPM packages from `master`
