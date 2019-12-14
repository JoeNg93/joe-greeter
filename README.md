# Joe Greeter

An example npm package

## Scripts lifecycle

**prepare**: Run before package is packed and published and on local `npm install`

**prepublishOnly**: Run before **prepare** and only on `npm publish`

**preversion**: Run before bumping a new package version

**version**: Run after new version has been pumped and before Git commit about version bump is made.

**postversion**: Run after the Git commit about version bump is made.

## Commands

`npm publish`: Publish the package. Will run `prepare` -> `prepublishOnly`

`npm version patch`: Bump patch version, will run `preversion` -> `version` -> `postversion`

`npm version minor`: Bump minor version, will run `preversion` -> `version` -> `postversion`

`npm version major`: Bump major version, will run `preversion` -> `version` -> `postversion`
