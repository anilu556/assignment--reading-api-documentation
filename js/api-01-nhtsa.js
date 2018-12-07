/*
  API #1 - NHTSA Product Information Catalog Vehicle Listing
          https://vpic.nhtsa.dot.gov/api/
*/

//========================================================================
//  (1) How many *total car makes* are registered with the NHTSA?
//     - https://vpic.nhtsa.dot.gov/api/[path/to/data]

const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json')
  .then(function(serverRes){
    const apiData = serverRes.body
    // note, put your answer on the dom element for this porblem
    answerElement_nhtsa_1.innerHTML = serverRes.body.Count

  })


//========================================================================
//  (2) How many *Chevrolet models* are registered with the NHTSA?
//
//     - https://vpic.nhtsa.dot.gov/api/[path/to/data]
//     - Hint: models for make

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/chevrolet?format=json')
.then(function(modelRes){
   var data = modelRes.body

answerElement_nhtsa_2.innerHTML = data.Count;

})



//========================================================================
//  (3) What are the *vehicle types* that Nissan has?
//      - Hint: vehicle types for make by name

const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')
var vehicles = []

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
.then(function(res){

     var data = res.body.Results

data.forEach(function(types){
  vehicles.push(types.VehicleTypeName)

answerElement_nhtsa_3.innerHTML = vehicles;
  });
});



//========================================================================
//  (4) Which are the *models* that exist for Toyota trucks in 2017?
//      - Hint: models for make, year and vehicle type

const answerElement_nhtsa_4 = document.getElementById('nhtsa-4')
var trucks = []

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
.then(function (res){

  var data = res.body.Results

  data.forEach(function(types){
    trucks.push(types.Model_Name)

answerElement_nhtsa_4.innerHTML = trucks;    
  })

});
