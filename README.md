# Naming language generator

This is code for generating a 'naming language', using the algorithm behind [@unchartedatlas][uncharted]. For more details, see [these notes][notes].

### npm Package

This language generator can be required into your web project.  To install with npm:

```
npm install --save naming-language
```

Then where you need to use it,

```
var lang = require('naming-language');

...

var basicLanguage = lang.makeBasicLanguage();
var orthoLanguage = lang.makeOrthoLanguage();
var randomLanguage = lang.makeRandomLanguage();
var randomName = lang.makeName(randomLanguage);
```

[uncharted]: https://twitter.com/unchartedatlas
[notes]: http://mewo2.com/notes/naming-language/
