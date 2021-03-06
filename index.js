
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
// Nous créons un objet de type Express. 
var app = express(); 
 
//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router(); 
var data = [
    {
      "id": 1,
      "name": "youness",
      "email": "youness@gmail.com",
      "age": 27
    },
    {
      "id": 2,
      "name": "asmae",
      "email": "asmae@gmail.com",
      "age": 21
    },
    {
      "id": 3,
      "name": "user 3",
      "email": "user1@gmail.com",
      "age": 21
    },
    {
      "id": 4,
      "name": "user 4",
      "email": "user1@gmail.com",
      "age": 21
    },
    {
      "id": 5,
      "name": "user 5",
      "email": "user1@gmail.com",
      "age": 21
    }
  ];


app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

// Je vous rappelle notre route (/piscines).  
myRouter.route('/users')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
.get(function(req,res){ 
   //   res.json({message : "Liste toutes les piscines de Lille Métropole", methode : req.method});
      res.json(data)

})
//POST
.post(function(req,res){
      res.json({message : "Ajoute une nouvelle piscine à la liste", methode : req.method});
})
//PUT
.put(function(req,res){ 
      res.json({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
})
//DELETE
.delete(function(req,res){ 
res.json({message : "Suppression d'une piscine dans la liste", methode : req.method});  
}); 
 
// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  
 
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
});
