# PROJET RentCar

## Prérequis

Pour le développement, vous aurez seulement besoin de Node.js sur votre environnement.

### Node.js

[Node](http://nodejs.org/) est vraiment facile à installer et inclut maintenant [NPM](https://npmjs.org/) . Vous devriez être en mesure d'exécuter la commande suivante après la procédure d'installation ci-dessous.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Installation de Node sur OS X

Vous devrez utiliser un Terminal. Sur OS X, vous pouvez trouver le terminal par défaut dans `/Applications/Utilities/Terminal.app`.

Veuillez installer [Homebrew](http://brew.sh/) si ce n'est déjà fait avec la commande suivante.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Si tout va bien, vous devriez éxécuter

    brew install node

#### Installation de Node sous Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Installation de Node sous Windows

Allez sur le [site officiel Node.js](http://nodejs.org/) & télécharger le logiciel d'installation.
Assurez-vous également que la variable `git` soit dans votre PATH, `npm` pourrait en avoir besoin.

---

## Installation du projet

    $ git clone https://github.com/ArthurDan/RentCar
    $ cd RentCar
    $ npm install

## Démarrer et regarder

    $ npm start

---

## Présentation du projet

#### React : Les composants et leur rôle

##### Le design

Pour designer le site, nous avons utiliser la libraire React [MDBootstrap](https://mdbootstrap.com/react/) basée sur [Bootstrap 4](https://getbootstrap.com/) sans utilisation de Jquery. Elle permet d'utiliser de nombreux composants utiles et personnalisables au développement du site.

##### La structure

La page d'accueil se compose de deux composants : le composant `navBar` situé en haut de la fenêtre affiché en permanance et le composant `grille` affiché par défaut sur la page d'accueil qui répertorie les dernières annonces postées sur le site.

###### La navBar

La navbar possède 5 bouttons, chacun faisant appel à formulaire sous forme de modal:
+`Nous contacter` : formulaire permettant à l'utilisateur de contacter les administrateurs du site en précisant son nom, son email, le sujet du message ainsi que le contenu du message.
+`S'inscrire`: formulaire permettant à l'utilisateur de se créer un compte pour déposer des annonces de locations ou pour pouvoir louer un véhicule. Il est demandé de préciser le nom, l'email, une confirmation de l'email ainsi que le mot de passe.
+`Se connecter` : formulaire permettant à l'utilisateur de se connecter à son compte en précisant son email et son mot de passe.
+`Louer une voiture`: 


