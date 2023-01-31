# Change Log

All notable changes to the "105-vscode" extension will be documented in this file.


## [Unreleased]

## [0.0.1] - 2023-01-21
### Added
- Syntax Highlighting for Impcore

## [0.0.2] - 2023-01-22
### Added
- Extension icon and Impcore file icon

## [0.0.3] - 2023-01-23
### Fixed
- Although a single `;` is a comment in Impcore, we conventionally use `;;`, so I've changed the extension to use `;;` instead of `;` for line comments. 

## [0.0.4] - 2023-01-30
### Fixed
- Make it so that pressing enter while writing an Impcore expression doesn't move the closing parentheses block to the line below the cursor. Parentheses will instead build up to the right of the cursor, as is idiomatic in Richard's demos.

