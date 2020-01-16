var require("express");
var router = express.router();

var burger = require("../models/burger.js")



router.get("/", function (request,response){

  response.redirect("/burgers");
});

router.get("/burgers/create", function(request,results){

  burger.create(requst.body.burger_name, function(result){
    console.log(result);

    results.redirect("/")


  });
})


router.put("burgers/:id", function(request,response){
burger.update(request.params.id,function(results){

console.log(result + "it worked");

});


});

module.exports = router;
