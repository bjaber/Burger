var connection = require("./connection")

function print(num){

  var arr =[];
  for (var i =0; i<num; i++){

    arr.push("?")
  }

  return arr.toString();

}

function Tosql(ob){
var arr = [

]
 for(var key in ob){
 arr.push(key +"=" +ob[key]);
 }
 return arr.toString();

}

var orm ={
all: function(tableInput, cb){
var queryRequest = "SELECT * FROM" + tableInput + ";";

connection.query(queryRequest, function(err,result){

if(err){
  throw err
}
cb(result)

});

}


},

create: function (table,cols,vals,cb){
var query ="INSERT INTO" + table;

queryRequest+= "(";
queryRequest+= cols.toString();
queryRequest+=")"
queryRequest+="VALUES ("
queryRequest+= printQuestionMarks(vals.length);
queryRequest =+")";

console.log(queryRequest);

connection.query(queryRequest,vals,function(err,result){

  if(error){

    throw error;
  }
  
cb(result);
});

update: function(table,objColVals, condition,cb){
var queryRequest ="UPDATE"+ table;

queryRequest+="SET";
queryRequest+= objColVals(objColVals);
queryRequest+="WHERE";
queryRequest+= condition;

console.log(queryRequest);

connection.query(queryRequest,function(error,result){
if(error){
  throw error;
}
cb(result);



});

};
module.exports =orm;