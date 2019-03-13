var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);
  var data = null;
  var bigThingTp = {
  //'_id':'',
  'index':null,
  'guid':'',
  'isActive':false,
  'balance':null,
  'picture':'',
  'age':null,
  'eyecolor':'',
  'name':{
            'fisrt':'',
            'last':''
          },
  'company':'',
  'email':'',
  'phone':'',
  'address':'',
  'about':'',
  'registered':'',
  'latitude':'',
  'longitude':'',
  'tags':'[]',
  'range':'[]',
  'friends':'',
  'greeting':'',
  'favoriteFruit':''

};

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {
    /*
    empModel.xyz( (err, docs)=>{
      return res.status(200).json(docs);
    });
    */
  });// all


  return router;
}

module.exports = initEmployee;
