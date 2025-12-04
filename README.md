# Minimaliste Telemedicine Controversy Site

Ce projet est une application React construite avec Vite et Tailwind CSS.

## Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

## Installation

Pour installer toutes les dépendances nécessaires au projet, exécutez la commande suivante à la racine du projet :

```bash
npm install
```

Cela installera les paquets listés dans `package.json`, y compris :
- React et React DOM
- Vite
- Tailwind CSS et ses dépendances (PostCSS, Autoprefixer)
- Lucide React (icônes)
- Motion (animations)
- Radix UI (composants d'interface)

Si vous rencontrez des erreurs de types TypeScript, vous pouvez installer les définitions de types manquantes avec :

```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

## Lancement

Pour lancer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse indiquée dans le terminal (généralement `http://localhost:5173` ou `http://localhost:3000`).

## Structure du Projet

- `components/` : Contient les composants React de l'application (Header, Hero, Timeline, etc.).
- `styles/` : Contient les fichiers CSS globaux (`globals.css`).
- `main.tsx` : Point d'entrée de l'application.
- `App.tsx` : Composant principal.
- `vite.config.ts` : Configuration de Vite.
- `tailwind.config.js` : Configuration de Tailwind CSS (si présent, sinon géré par PostCSS/Vite).
- `postcss.config.js` : Configuration de PostCSS.
- `tsconfig.json` : Configuration TypeScript.

## Dépannage

Si vous rencontrez des problèmes d'affichage ou d'erreurs :

1.  **Erreurs de style (Tailwind)** : Assurez-vous que `postcss.config.js` est présent et configuré correctement avec `@tailwindcss/postcss`.
2.  **Erreurs TypeScript (JSX element implicitly has type 'any')** : Redémarrez votre éditeur de code (VS Code) après avoir installé les dépendances. Assurez-vous que `tsconfig.json` est présent.