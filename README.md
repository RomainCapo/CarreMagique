# Carre Magique

* Goupe : A3
* Classe : INF3dlma

# Étudiants :

* Jonas Freiburghaus [@JonasFreibur](https://github.com/JonasFreibur)
* Romain Capocasale [@RomainCapo](https://github.com/RomainCapo)
* Vincent Moulin [@dicksor](https://github.com/dicksor)

5ème semestre du Bachelor

## Description

Réalisation d'un carré aux bordures blanches sur fond noir. Les différentes propriétés du carré peuvent être modifiées à l'aide des sliders présent sur la page web.
Il est possible de modifier la largeur du carre, l'épaisseur de la bordure du carré et l'angle de rotation du carré.
Il est également possible de déplacer le carré avec la souris en effectuant un clic sur le canvas.
Le carré a été réalisé uniquement à partir de 4 vertexs fixes(représentant le carré noir en fond). Le carré avec les bordures blanches a été réalisé uniquement à l'aide des fragments shader.

## Description de la formule mathématique pour la représentation du carré

1. Calcul des coordonnées du fragment shader par rapport au centre.
2. Transformation en coordonnées polaires.
3. Soustraction de l'angle.
4. Formule mathématique représentant un carré en coordonnées polaires. La formule indique si un pixel donné se trouve en dehors ou à l'intérieur du carré. Il suffit après de coloré le pixel en fonction de son emplacement.
