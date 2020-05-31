---
title: Comment ajouter un plot ?
subtitle: Ajouter une figure interactive Bokeh dans une page static Hugo
comments: false
---

# Prerequis

* **Bokeh** : Il faut être a l'aise avec python, du moins suffisamment pour utiliser Bokeh.

Et c'est tout.

# Méthode

## 1. Générer une figure 
Le plus simple pouvant être

```python
from bokeh.plotting import figure
p = figure()
p.circle([1,2], [3,4])
```

## Exporter la figure
Nous suivant la méthode des [_autoload scripts_](https://docs.bokeh.org/en/latest/docs/user_guide/embed.html#autoload-scripts).
Deux choses seront exporté :

   1. la balise `<script>` a mettre dans la page
   2. le fichier Java Script chargé par la balise.

Avec Hugo, les fichier `*.js` sont stocké dans `static/js`.
Lors de la génération du site, ils sont accessible dans `/js/` (la racine `static` n'apparait plus).

Ainsi, si le fichier JS est nomé `figure2.js`, alors l'exportation se fait ainsi:

```python
from bokeh.resources import CDN
from bokeh.embed import autoload_static

js, tag = autoload_static(p, CDN, "/js/figure2.js")
```

avec `p` la figure crée précédement, `js` le contenu à mettre dans `"/js/figure2.js"` et `tag` la balise à mettre dans la page.

## Sauvegarder automatiquement le fichier
Si le script python est exécuté depuis un chemin proche du site hugo, alors le fichier `"/js/figure2.js"` peut être directement écrit

```python
jsname = "<path to>/static/js/figure2.js"

with open(jsname, "w") as f:
    f.write(js)
```

Pour la balise, puisqu'elle doit être intégré dans la page, le faire automatiquement peut être dangereux et inutilement complex.

Afficher simplement le code à utiliser avec `print(tag)` et collez le dans le fichier Markdown, par exemple comme :

```Markdown
Du text avant la figure2
<script src="/js/figure2.js" id="5ad5a4f2-00d8-4860-baf4-83cd1fb8ffdf"></script>
Du text après la figure2
```
L'`id` est important, il devrat être mis à jours si la figure est modifiée.

