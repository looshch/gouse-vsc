# [gouse-vsc](https://marketplace.visualstudio.com/items?itemName=looshch.gouse)
A missing quickfix for ‘declared but not used’ errors in Go which uses
idiomatic `_ = notUsedVar` and leaves a TODO comment.
![a demo gif](https://raw.githubusercontent.com/looshch/gouse/master/demo.gif)

## Dependencies
[`gouse`](https://github.com/looshch/gouse) is required.
```
go install github.com/looshch/gouse@latest
```

## Usage
“gouse: Toggle ‘declared but not used’ errors” command toggles the errors in a file.
