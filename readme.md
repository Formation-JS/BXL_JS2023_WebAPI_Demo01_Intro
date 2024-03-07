# Demo Web API 01 - Intro
Mise en place d'une Web API simple avec express en ESM

## Packages
Dépendences
- express: Le framework pour créer le serveur
- express-async-errors: Gestion du await/async
- dotenv: Permet de charger un fichier d'environnement
- morgan: Logger de requete
- chalk: De la couleurs dans le terminal 💖

Dépendences de dev
- nodemon: Outils de dev pour relancer le serveur

## ESM vs CommonJS
Les imports
```js
// CommonJS
const demo = require('modules/demo');

// ESM (En debut de fichier !)
import demo from 'module/demo.js';
```

Les exports 
```js
// CommonJS
module.exports = demo;

// ESM
export const message = 'Hello World';
export function getNumber() { return 42; }

export default demo;
```

Pour utiliser l'ESM dans le projet, il est necessaire d'ajouter dans le fichier "package.json" la ligne suivante
```json
"type": "module"
```