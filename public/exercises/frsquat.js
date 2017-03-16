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
    $.get(url + "exercise/191/")
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
      $(".descrip").append(description1 + "<p>Grasp barbell from rack or clean barbell from floor with overhand open grip, slightly wider than shoulder width. Position barbell chest high with back arched. Place bar in front of shoulders with elbows placed forward as high as possible and finger under bar to each side With heels hip width or slightly wider, position feet outward at approximately 45°.</p><p>Descend until knees and hips are fully bent or until thighs are just past parallel to floor. Knees travel outward in direction of toes. Extend knees and hips until legs are straight. Return and repeat</p>")
      $(".muscles").append("<p>Primary Muscles: " + musclesPrimeName + "</p><p>Secondary Muscles: " + musclesSecName + "</p>")
    }
  }
})
