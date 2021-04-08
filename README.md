# Cook Bank

## Projet html

Voici mon petit project HTML, CSS et JS !

** IMPORTANT !!!**

Je n'ai pas été prudent concernant la manière de récuperer les données des recettes, il faut donc quelques prerequis pour qu'il fonctionne bien:
- Utiliser Firefox
- se rendre sur `about:config`
- Changer la règle `privacy.file_unique_origin` à `false` (temporairement)

Ceci est du au fait que pour des raison de confort, j'ai utilisé l'extention Live Server de VSCode, qui simule un serveur, et qui ne se comporte donc pas comme juste des fichiers statiques

Toutes mes excuses pour ce petit probleme

## Structure

Mon projet suis la structure suivante:
- Les fichiers `.html` et les données sont dans le dossier racine
- les autres éléments, tel que les scripts `.js`, les feuilles de styles `.css` ou les images, sont dans le dossier src

Chaque fichier html est lié aux fichier script et de style principaux, contenant ce qui est nécéssaire au fonctionnement de toutes les pages. ces fichiers sont [`index.js`](./src/scripts/index.js) et [`style.css`](./src/stylesheets/style.css).

Chaque fichier a également sa propre feuille de style ou script, pour eviter de surcharger un seul fichier à chaque fois

## Fonts

Les polices utilisées sont [Dosis](https://fonts.google.com/specimen/Dosis?query=dosis) et [Lobster](https://fonts.google.com/specimen/Lobster?preview.text=Cook%20Bank&preview.text_type=custom).

## Pages dynamiques

Certaines pages n'ont pas une structure statique et sont générées en fonction des [données](./recettes.json) grâce a Javascript