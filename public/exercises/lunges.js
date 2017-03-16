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
      $(".descrip").append(description1 + "<p>Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position.</p><p>Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground.</p><p>Using mainly the heel of your foot, push up and go back to the starting position as you exhale.</p><p>Repeat the movement for the recommended amount of repetitions and then perform with the left leg.)</p>")
      $(".muscles").append("<p>Primary Muscles: " + musclesPrimeName + "</p><p>Secondary Muscles: " + musclesSecName + "</p>")
    }
  }
})
