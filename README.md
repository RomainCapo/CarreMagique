# Infographie
## Labo 1

Groupe :
* A3

Classe :
* INF3dlma

Étudiants :
* Jonas Freiburghaus
* Vincent Moulin
* Romain Capocasale

## Description

Réalisation d'un carré au bordure blanche sur fond noir. Les différentes propriétés du carré peuvent être modifié à l'aide des sliders présent sur la page web.
Il est possible de modifier la largeur du carre, l'epaisseur des bordures du carré et l'angle du carré.
Il est égalment possible de déplacer le carré avec la souris en effectuant un clic sur le canvas.
Le carré à été réalisé uniquement à partir de 4 vertexs fixes(représentant le carré noir en fond). Le carré avec les bordures blanches à été réalisé uniquement à l'aide des fragments shader.

## Description de la forumle mathématique pour la représentation du carré
1. Calcul des coordonnées du fragments shader par rapport au centre.
2. Transformation en coordonnées polaires.
3. Soustraction de l'angle.
4. Formule mathématique représentant un carré en coordonnées polaires. La formule indique si un pixel donné se trouve en dehors ou à l'intérieur du carré. Il suffit àprès de coloré le pixel en fonction de son emplacement.

