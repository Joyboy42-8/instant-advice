# InstantAdvice

**InstantAdvice** est une application web interactive qui fournit des conseils inspirants à l’utilisateur et permet de gérer ses favoris facilement. L’application utilise React, Framer Motion pour les animations et le `localStorage` pour conserver les favoris.

---

## 📝 Fonctionnalités

- **Affichage de conseils** : L’application affiche un conseil par défaut dès le chargement.
- **Générer un nouveau conseil** : Un bouton **Get Advice** permet de générer un nouveau conseil aléatoire.
- **Ajouter aux favoris** : Chaque conseil peut être ajouté aux favoris avec un bouton **Like**.
- **Page Favorites** : Une page dédiée `/favorites` affiche tous les conseils favoris sauvegardés dans le `localStorage`.
- **Animations** : Les boutons et liens sont animés avec **Framer Motion** pour une expérience utilisateur fluide et interactive.

---

## 📦 Technologies utilisées

- **React** : Frontend
- **React Router** : Navigation entre les pages
- **Framer Motion** : Animations des boutons et transitions
- **React Toastify** : Notifications lors de l’ajout/suppression de favoris
- **Lucide React ** : Icones
- **localStorage** : Stockage persistant des conseils favoris
- **CSS / Tailwind / DaisyUI ** : Style et layout

---

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-utilisateur/InstantAdvice.git
cd InstantAdvice
npm install
npm start
```

L’application sera disponible sur http://localhost:3000.

## 📱 Utilisation

- Cliquez sur **Get Advice** pour obtenir un nouveau conseil.
- Cliquez sur **Like** pour ajouter le conseil actuel à vos favoris.
- Rendez-vous sur la page **Favorites** pour voir tous vos conseils favoris et les supprimer si besoin.
- Toutes les actions sont accompagnées de notifications et animations pour une meilleure expérience utilisateur.

---

## 🎨 Démo visuelle

*(Ajoutez ici un GIF ou screenshot de l’application si disponible)*

---

## 🛠️ Personnalisation

- Vous pouvez modifier les animations des boutons en ajustant les propriétés de **Framer Motion** dans les composants.
- Les favoris sont stockés dans le **localStorage**, vous pouvez donc récupérer ou réinitialiser les données selon vos besoins.

---

## 💡 Idées futures

- Ajouter une fonctionnalité de **recherche** parmi les conseils favoris.
- Permettre le **partage d’un conseil** sur les réseaux sociaux.
- Ajouter un **thème sombre** avec toggle.

---

## 📄 Licence

MIT License © 2025 - Joyboy42-8

> Ce projet est ouvert aux contributions. Même si c’est un petit projet, tout développeur peut proposer des améliorations ou des fonctionnalités supplémentaires.

