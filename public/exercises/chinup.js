/* global $ */
$(document).ready(function(){
  $(".button-collapse").sideNav()
  getExerciseInfo()
  function getExerciseInfo(){
    var description1 = []
    var musclesPrimary = []
    var musclesSecondary = []
    var musclesPrimeName = []
    var musclesSecName = []
    var url = "https://wger.de/api/v2/"
    $.get(url + "exercise/181/")
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
      $(".descrip").append(description1 + "<p>A chin-up begins with your palms facing your body. Grip the bar comfortably but firmly, with your hands spaced a few inches apart.</p><p>Raise your body until your chin is above the bar. Use your upper arm strength to lift your body toward the bar, stopping when your chin is above the bar. Your elbows will be fully bent. Bend your knees or cross your feet to distribute your weight more evenly.</p><p>Lower yourself back down. Using a slow, controlled motion, lower yourself until your arms are straight. This is the complete range of motion for a chin-up.</p>")
      $(".muscles").append("<p>Primary Muscles: " + musclesPrimeName + "</p><p>Secondary Muscles: " + musclesSecName + "</p>")
    }
  }
})
