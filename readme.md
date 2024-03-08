# Demo Web API 01 - Intro
Mise en place d'une Web API simple avec express en ESM

## Packages
Dépendences
- express: Le framework pour créer le serveur
- express-async-errors: Gestion du await/async
- dotenv: Permet de charger un fichier d'environnement
- morgan: Logger de requete
- chalk: De la couleurs dans le terminal 💖
- yup: Validateur de données

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

## Les méthodes (verbe) des Web API (Standard du RestFull)

- GET

  Objectif : Récuperation d'une ressource. \
  Reponse du serveur :
  - 200 Success
  - 404 Not Found

- POST

  Objectif : Création de ressource (ou Authentification). \
  Reponse du serveur :
  - 201 Created  /  200 Success
  - 422 Unprocessable Content

- PUT

  Objectif : Création ou mise à jour d'une ressource. \
  Reponse du serveur :
  - 201 Created  /  204 No Content
  - 404 Not Found
  - 422 Unprocessable Content


- PATCH

  Objectif : Effectuer une mise à jour partielle d'une ressource. \
  Reponse du serveur :
  - 204 No Content
  - 404 Not Found


- DELETE

  Objectif : Suppression d'un ressource. \
  Reponse du serveur :
  - 204 No Content
  - 404 Not Found

















