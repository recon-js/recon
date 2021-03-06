recon-config
============

Recon configuration management.

*Part of [Recon: Code Intelligence for React](https://github.com/lystable/recon)*

### Configuration

All projects hoping to use Recon should have a `.reconrc` file at their root.

- `context` - Where should we search for files (default `process.cwd()`)
- `files` *(required)* - [Glob](https://en.wikipedia.org/wiki/Glob_(programming)) pattern telling which files
recon should parse. This should be pretty much all js files in your application which are likely to
be used by or use a component. It is recommended to exclude any meta files such as tests.
- `resolve` - Namespace to help recon resolve require/import paths correctly
  - `roots` - An array of paths (relative to working directory) from which to resolve paths.
  Eg. `require('components/button')` and `roots: [core]` would look in `core/components/button`
  - `extensions` - An array of extensions to include when resolving paths without an explicit extension.
  Default: `['.js', '.jsx']`
- `ignore` - Regex to exclude paths from being parsed (default `/node_modules/`)
  - Note: atm we don't support flags, pr's welcome!

##### Example configuration

```json
{
  "context": "src",
  "files": "**/!(*-test|*-tests|*.manifest).js*",
  "resolve": {
    "roots": [
      "core",
      ""
    ]
  },
  "ignore": "/node_modules/"
}
```

> Note: If you make changes to your project config file you must restart your `recon` cli!
