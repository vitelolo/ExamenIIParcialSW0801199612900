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


router.get('//all', function( req, res, next) {
      employeeModel.getEmployees(
          function(err, docs){
            if(err) {
              console.log(err);
              return res.status(500).json({error:"No funcionó"});
            }
            return res.status(200).json(docs);
          }
);



router.get('/byid/:id', (req, res, next)=>{
  employeeModel.getEmployeesById(req.params.id, (err, Doc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"Error al obtener el Thing"});
          }
          return res.status(200).json(Doc);
        } );
      });



router.get('/bycompany/:company', (req, res, next)=>{
        employeeModel.getEmployeesByCompany((req.params.comp || '').split('_'), (err, docs)=>{
                if(err){
                  console.log(err);
                  return res.status(500).json({"error":"No se encontro"});
                }else{
                  return res.status(200).json(docs);
                }
          } );
});



router.get('/bytags/:tag', (req, res, next)=>{
  employeeModel.getEmployeesByTag((req.params.tag || '').split('_'), (err, docs)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"No se encontro"});
          }else{
            return res.status(200).json(docs);
          }
    } );
});



router.put('/addtags/:id', (req, res, next)=>{
  employeeModel.addEmployeeATag((req.body.tags || '').split('|'), req.params.id, (err, rsult)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se puede actualizar "});
    }
    return res.status(200).json(rsult);
  });
});





router.post('/new', function(req, res, next){
  var _thingsData = Object.assign({} , bigThingTp, req.body);
  var dateT = new Date();
  var dateD = new Date();
  dateD.setDate(dateT.getDate()+ 3);
  _thingsData.fcIng = dateT;
  _thingsData.due = dateD;
 // _thingsData._id = uuidv4();
  // Mongo Model
  employeeModel.addNewEmployee(_thingsData, (err, newEpml)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se puede agregar"});
    }
    return res.status(200).json(newEmpl);
  });



  router.delete('/delete/:Id', function(req, res, next){
        var _id = req.params.id;
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
