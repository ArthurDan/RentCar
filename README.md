# PROJET RentCar

## Prérequis

Pour le déploiement, vous aurez seulement besoin de Node.js sur votre environnement.

### Node.js

[Node](http://nodejs.org/) est vraiment facile à installer et inclut maintenant [NPM](https://npmjs.org/) . Vous devriez être en mesure d'exécuter la commande suivante après la procédure d'installation ci-dessous.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Installation de Node sur OS X

Vous devez utiliser un terminal. Sur OS X, vous pouvez trouver le terminal par défaut dans `/Applications/Utilities/Terminal.app`.

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

Pour designer le site, nous avons utilisé la librairie React [MDBootstrap](https://mdbootstrap.com/react/) basée sur [Bootstrap 4](https://getbootstrap.com/) sans utilisation de Jquery. Elle permet d'utiliser de nombreux composants utiles et personnalisables au développement du site.

##### La structure

La page d'accueil se compose de deux composants : le composant `navBar` situé en haut de la fenêtre affiché en permanance et le composant `grille` affiché par défaut sur la page d'accueil qui répertorie les dernières annonces postées sur le site.

Lorsque l'utilisateur séléctionne une annonce de la page d'accueil, le site le redirige vers un nouveau composant grâce à une route qui affiche les détails de l'annonce séléctionnée.

###### La navBar

La navbar possède 5 bouttons, chacun faisant appel à un formulaire sous forme de modal :

`Nous contacter` : formulaire permettant à l'utilisateur de contacter les administrateurs du site en précisant son nom, son email, le sujet du message ainsi que le contenu du message.

`S'inscrire`: formulaire permettant à l'utilisateur de se créer un compte pour déposer des annonces de locations ou pour pouvoir louer un véhicule. Il est demandé de préciser le nom, l'email, une confirmation de l'email ainsi que le mot de passe.

`Se connecter` : formulaire permettant à l'utilisateur de se connecter à son compte en précisant son email et son mot de passe.

`Louer une voiture`: formulaire permettant à l'utilisateur de rechercher des annnonces de location de voiture suivant des critères précis : sa localisation et la durée de location voulue.

`Louer sa voiture`: formulaire permettant à l'utilisateur de poster son annonce de location de véhicule en précisant la marque, le modèle, son année de production, son kilométrage, le prix par journée de location, la durée de location ainsi qu'une photo à importer représentant le véhicule concerné.

##### Le transfert de données

Le transfert de données s’effectue grâce à l’utilisation du  `fetch`. Avec cette fonction on décrit la méthode que l’on veut prendre (`POST`) que l’on va envoyer sur une url voulue. Les données sont envoyées sous forme de `JSON` et sont récupérées par le serveur.

---

#### Le BACK END

##### L'API

Dans le backend on va retrouver deux api `userDB` et `annonceDB`, dans ces api on va pouvoir faire appel à toutes les fonctions d’ajout, de connexion, de suppression et autre que l’on aura besoin dans les routes gérées par le server.

##### Les Routes

Pour pouvoir gérer les routes de manière efficace on va utiliser `express`.

Les routes vont nous permettre de gérer les données reçues par le Front et de faire la liaison avec la base de données.

On va retrouver des routes pour toutes les actions snécessitant un accés a la base de données telles que le register, le login, le delete etc.


