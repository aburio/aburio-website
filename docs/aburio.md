Aburio est le système de design des projets d'Arthur Burnichon. Il décline, en plus net, le portfolio www.abur.io : une page blanche, du texte presque noir, un jaune pour l'action principale, un gris pour l'action secondaire, un bleu pour les titres, des angles adoucis et des filets.

## Principes

- **À plat.** Aucune ombre, aucun dégradé, aucune carte bordée. Le contenu repose directement sur `page` ; on sépare avec un filet `divider` de 1px ou avec de l'espace (`space-5`).
- **Adouci, pas rond.** Boutons, champs et médias prennent `radius-md` ; les tags `radius-sm` ; les surfaces flottantes `radius-lg`, le plafond. Jamais de pilule. Le bloc de titre de section reste carré (`radius-none`) : c'est la signature.
- **Trois rôles, trois couleurs.** `primary` (jaune) est l'action principale, `secondary` (gris) l'action secondaire, `headline` (bleu) le bloc de titre de section. Ne les échange jamais : pas de bouton `headline`, pas de titre `primary`.
- **Des tokens nommés par leur rôle.** Un token dit ce qu'il représente (`primary`, `text`, `divider`), jamais sa teinte. Choisis-le pour son rôle : si la couleur change, le nom reste juste.
- **Une colonne.** Le contenu tient dans une colonne centrée de 960px maximum, gouttière `space-3`. Les médias se placent à gauche sur un tiers, le texte à droite sur deux tiers ; tout s'empile sous 768px.

## Couleur

- Texte courant en `text` sur `page`. Texte secondaire en `text-muted`. `text-faint` uniquement sur `page`, pour les métadonnées.
- Liens dans le texte en `link`, soulignés. N'utilise pas `headline` pour du texte : il est réservé au bloc de titre.
- `headline-text` sur `headline` atteint tout juste 4,5:1 : ne l'emploie qu'à partir de 20px en graisse 500.
- `surface` porte le code et les encarts ; `surface-strong` les emplacements vides. Les tags n'ont pas de fond : un contour `divider` et un texte `text-muted`.
- `danger` n'apparaît que pour une erreur de champ, toujours avec un message écrit.
- Le thème sombre inverse `page` et `text` et assombrit `secondary` ; `primary` et `headline` restent identiques, et le texte sur `primary` reste `primary-text`.

## Typographie

- Tout est en `sans` (Hanken Grotesk, chargée depuis Google Fonts ; repli `system-ui`, la pile du site d'origine). `mono` (JetBrains Mono) sert au code et aux valeurs techniques seulement.
- Un seul `display` par page, suivi d'un `subtitle` en `text-muted`.
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

## Iconographie

- Le site d'origine utilise Font Awesome 6 Free (solid et brands). Le système n'embarque aucun fichier d'icône : charge Font Awesome dans le projet consommateur.
- Icône à gauche du libellé, écart `space-2`, même couleur que le texte, même taille que le corps du libellé.
- Aucun logo n'existe : écris « Aburio » ou le nom du projet en `display`. Ne dessine pas de marque.

## États

- Focus clavier : contour plein de 2px en `focus`, décalé de 2px. Ne le retire jamais.
- Désactivé : opacité 0,65, curseur par défaut.
- Survol : `primary-hover` pour le bouton primaire, `secondary-hover` pour le bouton secondaire, `text` pour les liens.
- Mouvement : transitions de couleur de 150ms, rien d'autre. Respecte `prefers-reduced-motion`.

## Composants

Les composants sont du CSS seul, préfixé `ab-`, dans `components/bundle.css`. Ils lisent les variables de `tokens.css` et fonctionnent avec n'importe quel framework.

- `Button` — `.ab-btn`, `.ab-btn--secondary`, `.ab-btn--sm`, `.ab-btn--block`
- `Link` — `.ab-link`
- `Tag` — `.ab-tag`, `.ab-tag--accent`
- `SectionHeading` — `.ab-section`
- `Card` — `.ab-card` et `.ab-rule`
- `Field` — `.ab-field`
