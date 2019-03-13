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
*/        /// --------------------------------------------------------------Mongo Model funsion

      router.get('//all', function( req, res, next) {
        employeeModel.getEmployees(
          function(err, docs){
            if(err) {
              console.log(err);
              return res.status(500).json({error:"No funcionó"});
            }
            return res.status(200).json(docs);
          }
);        /// --------------------------------------------------------------Mongo Model funsion

/*
      GET       /byid/:id
      */

router.get('/byid/:id', (req, res, next)=>{
  employeeModel.getEmployeesById(req.params.id, (err, Doc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"Error al obtener el Thing"});
          }
          return res.status(200).json(Doc);
        } );
      });


      /*
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag*/
router.get('/bytags/:tag', (req, res, next)=>{
  employeeModel.getEmployeesByTag((req.params.tag || '').split('_'), (err, docs)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"No se encontro OBTS"});
          }else{
            return res.status(200).json(docs);
          }
    } );
});
      /*
      POST      /addtag/:id              tag
*/
router.put('/addtags/:id', (req, res, next)=>{
  employeeModel.addEmployeeATag((req.body.tags || '').split('|'), req.params.id, (err, rsult)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se puede actualizar el OBT"});
    }
    return res.status(200).json(rsult);
  });// end addTagsToThing
});// addtags



/*
      DELETE    /delete/:id
  */
  router.delete('/delete/:Id', function(req, res, next){
        var _thingId = req.params.thingId;
        employeeModel.removeEmployee(_Id, (err, result)=>{
          if(err){
            return res.status(500).json({"error":"No se pudo eliminar dato"});
          }
          return res.status(200).json(result);
        });
/*
      POST      /makeolder               age
   */



  return router;
}

module.exports = initEmployee;
