# Orbital Goldbach Predictor

Ce site Web prédit les paires (p, q) de la conjecture de Goldbach pour un nombre pair donné E, à l'aide d'une estimation analytique de l'écart premier optimal :

> **δ(E) ≈ √E · loglog(E) / log(E)**

Cette formule est dérivée d'une modélisation probabiliste de la distribution des nombres premiers. Pour chaque E, le prédicteur :

1. Calcule δ(E) et une version corrigée plus précise.
2. Cherche toutes les paires (p, q) telles que **p + q = E** et que **p** et **q** soient premiers.
3. Affiche les paires les plus proches du centre E/2, à une distance inférieure ou égale à δ(E).

### Objectif

Ce projet démontre qu'une **formule prédictive robuste** peut guider efficacement la recherche des paires de Goldbach, même pour des nombres élevés (jusqu'à 10¹⁰ sur ce site).

### Auteur

Bahbouhi Bouchaib — Chercheur indépendant en mathématiques, Nantes (France)

### Statut

Ce site est une vitrine expérimentale. Un second site étendra bientôt cette méthode à des valeurs encore plus grandes.
