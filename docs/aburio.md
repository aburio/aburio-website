Aburio est le système de design des projets d'Arthur Burnichon. Il décline, en plus net, le portfolio www.abur.io : une page blanche, du texte presque noir, un jaune pour l'action principale, un gris pour l'action secondaire, un bleu pour les titres, des angles adoucis et des filets.

## Principes

- **Texte à plat, médias en relief.** Le texte repose directement sur `page`, sans carte ni encadré : on le sépare avec un filet de 1px ou avec de l'espace. Seuls les médias (captures, photos, vidéos) prennent du relief, dans un `Frame` : bordure `border-subtle`, coins `radius-lg`, ombre `shadow-rest`, qui passe à `shadow-raised` au survol. Jamais de dégradé, jamais d'ombre sur un bloc de texte ou un bouton.
- **Adouci, pas rond.** Boutons, champs et vignettes prennent `radius-md` ; les tags `radius-sm` ; les médias encadrés et les surfaces flottantes `radius-lg`, le plafond. Jamais de pilule. Le bloc de titre de section reste carré (`radius-none`) : c'est la signature.
- **Trois rôles, trois couleurs.** `primary` (jaune) est l'action principale, `secondary` (gris) l'action secondaire, `headline` (bleu) le bloc de titre de section. Ne les échange jamais : pas de bouton `headline`, pas de titre `primary`.
- **Des tokens nommés par leur rôle.** Un token dit ce qu'il représente (`primary`, `text`, `divider`), jamais sa teinte. Choisis-le pour son rôle : si la couleur change, le nom reste juste.
- **Une colonne, des rangées.** Le contenu tient dans une colonne centrée de `layout-max` (1120px), gouttière `space-5`. Une liste de projets est une suite de rangées séparées par un filet `border-subtle` : média à gauche (5 parts), texte à droite (6 parts), tout s'empile quand la place manque. Les sections sont espacées d'un rythme unique, de 48px sur mobile à 96px à partir de 1200px de large, sans marge supplémentaire sous le hero.

## Couleur

- Texte courant en `text` sur `page`. Texte secondaire en `text-muted`. `text-faint` uniquement sur `page`, pour les métadonnées.
- Liens dans le texte en `link`, soulignés. N'utilise pas `headline` pour du texte : il est réservé au bloc de titre.
- `headline-text` sur `headline` atteint tout juste 4,5:1 : ne l'emploie qu'à partir de 20px en graisse 500.
- `surface` porte le code, les encarts et le survol d'une rangée ; `surface-strong` les emplacements vides. Les tags n'ont pas de fond : un contour `divider` et un texte `text-muted`.
- `border-subtle` dessine les filets entre rangées, la bordure des médias et celle de l'en-tête. `divider` reste pour le filet sous un titre de section et le contour des tags.
- `inverse` et `inverse-text` font une bande en couleurs inversées (`Band`), une seule par page, pour l'appel au contact. Les boutons y gardent leurs couleurs.
- `shadow-rest` et `shadow-raised` ne s'appliquent qu'aux médias encadrés.
- `danger` n'apparaît que pour une erreur de champ, toujours avec un message écrit.
- Le thème sombre inverse `page` et `text` et assombrit `secondary` ; `primary` et `headline` restent identiques, et le texte sur `primary` reste `primary-text`.

## Typographie

- Tout est en `sans` (Hanken Grotesk, auto-hébergée ou chargée depuis Google Fonts ; repli `system-ui`, la pile du site d'origine). `mono` (JetBrains Mono) sert au code et aux valeurs techniques seulement.
- Un seul `display` par page : la phrase du hero ou le titre d'une étude de cas. Il est fluide, de 38 à 60px. Le nom et le titre de la personne se placent au-dessus, sur une ligne, en `subtitle`.
- Les titres de projet dans une liste sont en gras, de 24 à 34px ; le chiffre clé d'un projet en gras 20px.
- Les numéros d'ordre (« 01 / 05 ») sont en `mono`, `text-faint`.
- Les titres de section sont en `title`, capitales, dans le bloc bleu. Les titres de carte en `heading`, casse de phrase.
- Les libellés de bouton sont en `label`, en capitales. Rien d'autre n'est en capitales, hors titres de section.
- Les tags sont en `tag-text`, `text-muted`, casse d'origine du mot (« Scale up », « UX », « C/C++ »).

Feuille à charger : `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;700&display=swap`

## Ton

- Première personne, direct, orienté résultat : « I rebuilt the ordering algorithm and the tool around it », « 98% of replenishment orders automated ». Chiffre ce qui peut l'être.
- Phrases complètes, casse de phrase pour les titres : « Automated replenishment web app », pas « Automated Replenishment Web App ».
- Boutons : un verbe ou un nom court, en capitales par le style (« Show more », « Project details », « GitHub »).
- Pas d'emoji dans l'interface. Pas de point d'exclamation.
- Mots à éviter : « spearheaded », « thrive », « passionate », « innovative », « leverage ». Pas de phrase de conclusion générique.
- L'anglais est la langue du site d'origine ; garde une seule langue par produit.

## Liens et actions

- Une icône seule ne dit pas où va un lien. Chaque action a un libellé écrit.
- Aller vers une page du site : `Cta`, libellé écrit souligné en `primary` et flèche vers la droite (« Read the case study »). La flèche avance au survol.
- Quitter le site : un `Link` qui nomme la destination (« Visit descombe.com », « View on GitHub ») suivi de l'icône de sortie (`arrow-up-right-from-square`).
- Dans un hero, une action principale (`Button` primaire, « See my work ») et au plus une secondaire.
- Une rangée entière peut être cliquable : le lien du titre la couvre, et son `Cta` reste visible comme indication.

## Iconographie

- Le site d'origine utilise Font Awesome 6 Free (solid et brands). Le système n'embarque aucun fichier d'icône : charge Font Awesome dans le projet consommateur.
- Icône à gauche du libellé, écart `space-2`, même couleur que le texte, même taille que le corps du libellé.
- Aucun logo n'existe : écris « Aburio » ou le nom du projet en `display`. Ne dessine pas de marque.

## États

- Focus clavier : contour plein de 2px en `focus`, décalé de 2px. Ne le retire jamais.
- Désactivé : opacité 0,65, curseur par défaut.
- Survol : `primary-hover` pour le bouton primaire, `secondary-hover` pour le bouton secondaire, `text` pour les liens.
- Mouvement : transitions de couleur de 150ms ; un média encadré se soulève de 3px au survol (300ms) ; la flèche d'un `Cta` avance de 4px. À l'arrivée sur une page, les éléments du hero montent de 16px en fondu, l'un après l'autre. Tout mouvement s'arrête avec `prefers-reduced-motion`.

## Composants

Les composants sont du CSS seul, préfixé `ab-`, dans `components.css`. Ils lisent les variables de `tokens.css` et fonctionnent avec n'importe quel framework.

- `Button` — `.ab-btn`, `.ab-btn--secondary`, `.ab-btn--sm`, `.ab-btn--block`
- `Link` — `.ab-link`
- `Tag` — `.ab-tag`, `.ab-tag--accent`
- `SectionHeading` — `.ab-section`
- `Card` — `.ab-card` et `.ab-rule`
- `Field` — `.ab-field`
- `Frame` — `.ab-frame`, `.ab-frame--sm` (vignette en `radius-md`), et `.ab-lift` sur le conteneur cliquable qui soulève le cadre au survol
- `Cta` — `.ab-cta` et `.ab-cta__arrow`
- `Band` — `.ab-band`
