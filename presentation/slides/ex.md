### Webbtjänstanrop med XML

Tisdagen den 3 december

<small>Frontend-utveckling</small>

---

### Kursutvärdering

Ni ska ha fått ett meddelande från Bibbi

---

### Presentationer på torsdag eftermiddag

- Ska innehålla slides
  - Summera arbetet, sammanfatta vad ni har lärt er, samt visa upp produkten och intressant kod
- Ska vara på engelska

---

### “Frivillig” tenta?

Tentan påverkar inte betyget

---

### Introduktion


### XML är ett informationsutbytesformat

- XML är kort för Extensible Markup Language
- Kan strukturera vilken information som helst, precis som JSON
- Flera dokumentformat är XML-baserade
  - Exempel är XHTML (som var aktuellt innan HTML 5), bildformatet OpenDocument (som kan användas av LibreOffice och Office), och SVG (Scalable Vector Graphics)
- Nu för tiden används mestadels JSON istället


### SVG (Scalable Vector Graphics)

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" fill="#000" r="100" />
</svg>
```

<img src="modules/scalable-vector-graphics-svg/circle.svg" style="padding: 0.5em;">

<small>`standalone` har med så kallade DTD-filer att göra, och ställer i detta fallet in att programmet som tolkar filen ska kolla att Scalable Vector Graphics-reglerna är uppfyllda, och överlag sätta standardvärden och liknande från DTD-filen.</small>

Note:
DTD står för Document Type Declaration


### XML har tags, element, attribut och text

#### XML

```xml
<svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" fill="#000" r="100" />
</svg>
```

#### HTML5

```html
<svg height="200" width="200">
  <circle cx="100" cy="100" fill="#000" r="100"></circle>
</svg>
```


### Dokumentdeklaration

#### XML

```xml
<?xml encoding="UTF-8" version="1.0"?>
```

#### HTML5

```html
<!DOCTYPE html>
```

<small>Dokumentdeklarationer används för hela dokument, inte enskilda element eller “dokumentfragment”</small>

---

### Skicka XML med `fetch`


### Skicka XML: Sträng

#### JSON

```js
fetch('http://example.com/', {
  body: '{ "someKey": "someValue" }',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
})
```

#### XML

```js
fetch('http://example.com/', {
  body: '<someKey>someValue</someKey>',
  headers: {
    'Content-Type': 'application/xml'
  },
  method: 'POST'
})
```


### Skicka XML: Document Object Model

```js
const circle = document.createElementNS(null, 'circle')
circle.setAttribute('cx', 100)
circle.setAttribute('cy', 100)
circle.setAttribute('fill', '#000')
circle.setAttribute('r', 100)

const string = new XMLSerializer().serializeToString(circle)
```

```js
fetch('http://example.com/', {
  body: string,
  headers: {
    'Content-Type': 'application/xml'
  },
  method: 'POST'
})
```

<small>`<circle cx="100" cy="100" fill="#000" r="100"/>`</small>


### Ta emot XML med `fetch`

#### JSON

```js
fetch('http://example.com/')
  .then(response => response.json())
  .then(result => { console.log(result) })
```

#### XML

```js
fetch('http://example.com/')
  .then(response => response.text())
  .then(string => (new window.DOMParser()).parseFromString(
    string,
    "application/xml"
  ))
  .then(result => { console.log(result) })
```

---

### XML i Express


### Ta emot XML

#### JSON

```js
app.use(express.json())
```

#### XML

```
$ npm install express-xml-bodyparser
```

```js
const expressXmlBodyparser = require('express-xml-bodyparser')

app.use(expressXmlBodyparser())
```

<small>I båda fallen så finns det ett objekt i `request.body`</small>


### Element med text som innehåll

#### XML

```xml
<someKey>someValue</someKey>
```

#### Objekt

```json
{
  "somekey": "someValue"
}
```


### Element med ett element som innehåll

#### XML

```xml
<someKey>
	<someOtherKey>someOtherValue</someOtherKey>
</someKey>
```

#### Objekt

```json
{
  "somekey": {
    "someotherkey": [
      "someOtherValue"
    ]
  }
}
```


### Element med flera element som innehåll

#### XML

```xml
<someKey>
	<someOtherKey>someOtherValue</someOtherKey>
	<someOtherKey>someOtherValue</someOtherKey>
</someKey>
```

#### Objekt

```json
{
  "somekey": {
    "someotherkey": [
      "someOtherValue",
      "someOtherValue"
    ]
  }
}
```


### Element med text och element som innehåll

#### XML

```xml
<someKey>
	someValue
	<someOtherKey>someOtherValue</someOtherKey>
</someKey>
```

#### Objekt

```json
{
  "somekey": {
    "_": "someValue",
    "someotherkey": [
      "someOtherValue"
    ]
  }
}
```


### Element med attribut och med text som innehåll

#### XML

```xml
<someKey a="b" c="d">someValue</someKey>
```

#### Objekt

```json
{
  "somekey": {
    "_": "someValue",
    "$": {
      "a": "b",
      "c": "d"
    }
  }
}
```


### Skicka XML

#### JSON

```js
// { "hello": "world" }
response.send({ hello: 'world' })
```

#### XML

```
$ npm install xml
```

```js
const xml = require('xml')
```

```js
response.set('Content-Type', 'application/xml')

// <hello>world</hello>
response.send(xml([{ hello: 'world' }]))
```

---

### Sammanfattning

- XML är ett informationsutbytesformat, likt JSON
  - `fetch` och Document Object Model kan användas
  - `application/xml` motsvarar `application/json`
- XML i Express kräver bibliotek
  - `express-xml-bodyparser` är ett middleware som gör att en objektrepresentationen av informationen finns i `request.body`
  - `xml` är ett bibliotek som kan användas för att konvertera ett objekt till en sträng

---

### Feedback?

---

### “Frivillig” tenta

Tentan påverkar inte betyget
