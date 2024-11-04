# [gouse-vsc](https://marketplace.visualstudio.com/items?itemName=looshch.gouse)

Toggle ‘declared and not used’ errors in Go by using idiomatic `_ = notUsedVar`
and leaving a TODO comment.
![a demo gif](https://raw.githubusercontent.com/looshch/gouse/master/demo.gif)

## Dependencies

[`gouse`](https://github.com/looshch/gouse) is required.

```
go install github.com/looshch/gouse@latest
```

<!-- prettier-ignore -->
> [!CAUTION]
>
> Non-stable (archived) Go versions require older `gouse` version.
>
> | Go version   | gouse version |
> | -------------|---------------|
> | 1.21.0+      | 1.3.0+        |
> | 1.18–1.20.14 | 1.2.3         |

## Usage

“gouse: Toggle ‘declared and not used’ errors” command toggles the errors in a
file.
