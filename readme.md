## terminal-log [![Build Status](https://travis-ci.org/joegesualdo/terminal-log-node.svg?branch=master)](https://travis-ci.org/joegesualdo/terminal-log-node)
> Pretty terminal logging.

## Install
```
$ npm install --save @joegesualdo/terminal-log 
```

![example](https://raw.github.com/joegesualdo/terminal-log-node/master/example.png)
## Usage
```javascript
import log from ('@joegesualdo/terminal-log')

log.warn("Warn")
log.error("Error")
log.success("Success")
```

## Test
```
$ npm test
```
## API
### `warn(message)`

| Name | Type | Description |
|------|------|-------------|
| message | `String` | Message |

```javascript
import log from ('@joegesualdo/terminal-log')

log.warn("Warn")
```

### `error(message)`

| Name | Type | Description |
|------|------|-------------|
| message | `String` | Message |

```javascript
import log from ('@joegesualdo/terminal-log')

log.error("Error")
```

### `success(message)`

| Name | Type | Description |
|------|------|-------------|
| message | `String` | Message |

```javascript
import log from ('@joegesualdo/terminal-log')

log.success("Success")
```

## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
