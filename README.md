# ROT47

[![Greenkeeper badge](https://badges.greenkeeper.io/ddhhz/ROT47.svg)](https://greenkeeper.io/)
Node Tool for ROT47 https://rot47.net


### NPM

#### Installation
`$ npm i rot47 --save`

#### Usage
```
var rot47 = require('rot47')  
rot47('abc')  
-> '234'
```

#### CLI Installation
`$ npm i rot47 -g`

#### CLI Usage
```
$ rot47 "abc"
234

$ rot47 file.txt
...

$ gzip -d -c file.txt | base64 -D | rot47 > orig.txt
```


## Author
[**Wei He**](https://whe.me)  [_&#103;&#105;&#116;&#104;&#117;&#098;&#064;&#119;&#101;&#105;&#115;&#112;&#111;&#116;&#046;&#099;&#111;&#109;_](mailto:&#103;&#105;&#116;&#104;&#117;&#098;&#064;&#119;&#101;&#105;&#115;&#112;&#111;&#116;&#046;&#099;&#111;&#109;)
