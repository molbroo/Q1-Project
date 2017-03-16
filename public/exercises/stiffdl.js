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
    $.get(url + "exercise/209/")
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
      $(".descrip").append(description1 + "<p>Grasp a bar using an overhand grip (palms facing down). You may need some wrist wraps if using a significant amount of weight.</p><p>Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.</p><p>Keeping the knees stationary, lower the barbell to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Inhale as you perform this movement.</p><p>Start bringing your torso up straight again by extending your hips until you are back at the starting position. Exhale as you perform this movement.</p><p>Repeat for the recommended amount of repetitions.</p><p>Caution: This is not an exercise that is recommended for people with lower back problems. Also, it needs to be treated with the utmost respect paying special attention not to round the back forward as you move the torso down; the back should always be straight. Finally, jerking motions or doing too much weight can injure your back.)</p>")
      $(".muscles").append("<p>Primary Muscles: " + musclesPrimeName + "</p><p>Secondary Muscles: " + musclesSecName + "</p>")
    }
  }
})
