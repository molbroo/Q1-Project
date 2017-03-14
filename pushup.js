$(document).ready(function(){
  getExerciseInfo()
  function getExerciseInfo(){
    var description1 = []
    var musclesPrimary = []
    var musclesSecondary = []
    var musclesPrimeName = []
    var musclesSecName = []
    var url = "https://wger.de/api/v2/"
    $.get(url + "exercise/195/")
    .then(function(data){
      description1.push(data.description)
      musclesPrimary.push(data.muscles)
      musclesSecondary.push(data.muscles_secondary)
      $.get(url + "muscle/" + musclesPrimary)
      .then(function(data){
        musclesPrimeName.push(data.name)
      })
      $.get(url + "muscle/" + musclesSecondary)
      .then(function(data){
         musclesSecName.push(data.name)
      })
      console.log(musclesSecName)
      console.log(musclesPrimeName)
      updatePage(description1, musclesPrimeName, musclesSecName)
    })
    function updatePage(description1, musclesPrimeName, musclesSecName){
      $(".descrip").append(description1)
      $(".muscles").append("<p>Primary Muscles: " + musclesPrimeName + "</p><p>Secondary Muscles: " + musclesSecName + "</p>")
    }
  }
})
