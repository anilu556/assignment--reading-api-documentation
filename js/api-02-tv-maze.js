/*
  API #2 - TV Maze API
          https://www.tvmaze.com/api
*/


//========================================================================
//  (1) What is the *score* for the show Narcos?
//     - hint: you will need to use the 'Show Search'
//             and you'll need to format the query with spaces
//             between the word 'better-call-saul'

const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

request.get('http://api.tvmaze.com/search/shows?q=narcos')

.then(function(res){
  var data = res.body
  var score = data[0].score
answerElement_tvmaze_1.innerHTML = score

})

//========================================================================
//  (2) How many episodes have been made for 'The Simpsons'?
//    - hint: you will need to use the 'Show search' to query
//           and find the id for the show the-simpsons,
//           Nextyou will need to query the api's endpoint for 'Show episode list'


const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

request.get('http://api.tvmaze.com/search/shows?q=the-simpsons')

.then(function(res){
  var data = res.body
})

request.get('http://api.tvmaze.com/shows/83/episodes')

.then(function(episodes){
  var episodesNo = episodes.body

answerElement_tvmaze_2.innerHTML = episodesNo.length
})



//========================================================================
//  (3) How many shows has actor Andrew Lincoln (of the Walking Dead) appeared in?
//       - hint: you will need to get the id of the actor with a 'People Search'
//               in the query parameter, you will need to format the space with a dash ('andrew-lincoln')
//               next you will need to search the Cast Credits endpoint

const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request.get('http://api.tvmaze.com/people/10257/castcredits')

.then(function(andrew){

  var showsNo =  andrew.body

answerElement_tvmaze_4.innerHTML = showsNo.length

})

//========================================================================
//  (4) When was the premiere date for the 9th season of Friends?
//    - hint: you will need to use the 'Show search' to query
//           and find the id for the show Friends,
//           Nextyou will need to query the api's endpoint for 'Show seasons'

const answerElement_tvmaze_4 = document.getElementById('tvmaze-4')

request.get('http://api.tvmaze.com/shows/431/seasons')
.then(function (seasons){
  console.log(seasons)
  var dates = seasons.body
  var premiere = dates[8].premiereDate

  answerElement_tvmaze_3.innerHTML = premiere
})
