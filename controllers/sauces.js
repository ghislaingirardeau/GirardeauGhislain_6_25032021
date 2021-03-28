const { json } = require('body-parser');
const sauces = require('../schemas/sauces')

exports.listesauces = (req, res, next) => {
    sauces.find()
    .then(sauces => res.status(200).json({sauces}))
    .catch(() => res.status(404).json({message: "impossible de recuperer les sauces"}))
}

exports.createSauce = (req, res, next) => {
    const sauceOject = req.body
    const sauce = new sauces({
        ...sauceOject,
        likes: 0,
        dislikes: 0
    });
   
   res.status(201).json({sauce})
 
};

exports.updatesauce = (req, res, next) => {

}

exports.deletesauce = (req, res, next) => {

}

/* sauce.save()
    .then((sauce) => res.status(201).json({sauce}))
    .catch(() => res.status(401).json({message: "La sauce n'a pas été créer"})) */

    /* Possible probleme du a l'image, c'est pour cela que le body n'apparait pas */