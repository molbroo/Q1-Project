$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
  $('.scrollspy').scrollSpy();
  var days = ""
  $(".days-workout").click(function(){
    days = $(this).text()
    console.log(days)
    getPlan()


    $(".Day-1").empty()
    $(".Day-2").empty()
    $(".Day-3").empty()
    $(".Day-4").empty()
    $(".one").empty()
    $(".two").empty()
    $(".three").empty()
    $(".four").empty()
  })
  function getPlan() {
    var name1 = []
    var name2 = []
    var name3 = []
    var name4 = []
    var name5 = []
    var name6 = []
    var name7 = []
    var name8 = []
    var name9 = []
    var name10 = []
    var name11 = []
    var name12 = []
    var name13 = []
    var name14 = []
    var name15 = []
    var name16 = []

    var picture1 = []
    var picture2 = []
    var picture3 = []
    var picture4 = []
    var picture5 = []
    var picture6 = []
    var picture7 = []
    var picture8 = []
    var picture9 = []
    var picture10 = []
    var picture11 = []
    var picture12 = []
    var picture13 = []
    var picture14 = []
    var picture15 = []
    var picture16 = []
    var url = "https://galvanize-cors.herokuapp.com/https://wger.de/api/v2/"
    if (days === "One"){
      $.get(url + "exercise/111/")
      .then(function(data){
        name1.push(data.name)
        $.get(url + "exerciseimage/?exercise=111")
        .then(function(data) {
          picture1.push(data.results[1].image)
          console.log(picture1)
          updatePage(picture1, name1)
          $.get(url + "exercise/192/")
          .then(function(data){
            name2.push(data.name)
            $.get(url + "exerciseimage/?exercise=192")
            .then(function(data){
              picture2.push(data.results[1].image)
              console.log(picture2)
              updatePage2(picture2, name2)
              $.get(url +"exercise/181/")
              .then(function(data){
                name3.push(data.name)
                $.get(url + "exerciseimage/?exercise=181")
                .then(function(data){
                  picture3.push(data.results[1].image)
                  console.log(picture3)
                  updatePage3(picture3, name3)
                })
              })
            })
          })
        })
      })
      function updatePage(picture1, name1){
        $(".Day-1").append("<h1>Monday</h1>")
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture1 +"'><span class='card-title'>1</span><a href = 'exercises/squats.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name1 + "</h3><h3>5x5</h3></div></div></div>")
      }
      function updatePage2(picture2, name2){
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class  = 'exercises' src='" + picture2 +"'><span class='card-title'>1</span><a href = 'exercises/bench.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name2 + "</h3><h3>5x5</h3></div></div></div>")
      }
      function updatePage3(picture3, name3){
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class  = 'exercises' src='" + picture3 +"'><span class='card-title'>1</span><a href = 'exercises/chinup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name3 + "</h3><h3>5 x failure</h3></div></div></div>")
      }
    }
    else if (days === "Two"){
      $.get(url + "exercise/111/")
      .then(function(data){
        name1.push(data.name)
        $.get(url + "exerciseimage/?exercise=111")
        .then(function(data) {
          picture1.push(data.results[1].image)
          console.log(picture1)
          updatePage(picture1, name1)
          $.get(url + "exercise/192/")
          .then(function(data){
            name2.push(data.name)
            $.get(url + "exerciseimage/?exercise=192")
            .then(function(data){
              picture2.push(data.results[1].image)
              console.log(picture2)
              updatePage2(picture2, name2)
              $.get(url +"exercise/181/")
              .then(function(data){
                name3.push(data.name)
                $.get(url + "exerciseimage/?exercise=181")
                .then(function(data){
                  picture3.push(data.results[1].image)
                  console.log(picture3)
                  updatePage3(picture3, name3)
                  $.get(url + "exercise/105/")
                  .then(function(data){
                    name4.push(data.name)
                    console.log(name4)
                    $.get(url + "exerciseimage/?exercise=109")
                    .then(function(data){
                      picture4.push(data.results[0].image)
                      console.log(picture4)
                      updatePage4(picture4, name4)
                      $.get(url + "exercise/119")
                      .then(function(data){
                        name5.push(data.name)
                        $.get(url + "exerciseimage/?exercise=119")
                        .then(function(data){
                          picture5.push(data.results[1].image)
                          console.log(picture5)
                          updatePage5(picture5, name5)
                          $.get(url + "exercise/109")
                          .then(function(data){
                            name6.push(data.name)
                            $.get(url + "exerciseimage/?exercise=109")
                            .then(function(data){
                              picture6.push(data.results[1].image)
                              console.log(picture6)
                              updatePage6(picture6, name6)
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
      function updatePage(picture1, name1){
        $(".Day-1").append("<h1>Monday</h1>")
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture1 +"'><span class='card-title'>1</span><a href = 'exercises/squats.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name1 + "</h3><h3>5x5</h3></div></div></div>")
      }
      function updatePage2(picture2, name2){
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class  = 'exercises' src='" + picture2 +"'><span class='card-title'>1</span><a href = 'exercises/bench.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name2 + "</h3><h3>5x5</h3></div></div></div>")
      }
      function updatePage3(picture3, name3){
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class  = 'exercises' src='" + picture3 +"'><span class='card-title'>1</span><a href = 'exercises/chinup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name3 + "</h3><h3>5 x failure</h3></div></div></div>")
      }
      function updatePage4(picture4, name4){
        $(".Day-2").append("<h1>Wednesday</h1>")
        $(".two").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture4 +"'><span class='card-title'>1</span><a href = 'exercises/dl.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name4 + "</h3><h3>5x5</h3></div></div></div>")
      }
      function updatePage5(picture5, name5){
        $(".two").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture5 +"'><span class='card-title'>1</span><a href = 'exercises/press.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name5 + "</h3><h3>5x5</h3></div></div></div>")
      }
      function updatePage6(picture6, name6){
        $(".two").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture6 +"'><span class='card-title'>1</span><a href = 'exercises/rows.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name6 + "</h3><h3>5x5</h3></div></div></div>")
      }
    }
    else if (days === "Three"){
      $.get(url + "exercise/111/")
      .then(function(data){
        name1.push(data.name)
        $.get(url + "exerciseimage/?exercise=111")
        .then(function(data) {
          picture1.push(data.results[1].image)
          console.log(picture1)
          updatePage(picture1, name1)
          $.get(url + "exercise/119/")
          .then(function(data){
            name2.push(data.name)
            $.get(url + "exerciseimage/?exercise=119")
            .then(function(data){
              picture2.push(data.results[1].image)
              console.log(picture2)
              updatePage2(picture2, name2)
              $.get(url +"exercise/105/")
              .then(function(data){
                name3.push(data.name)
                $.get(url + "exerciseimage/?exercise=109")
                .then(function(data){
                  picture3.push(data.results[0].image)
                  console.log(picture3)
                  updatePage3(picture3, name3)
                  $.get(url + "exercise/111/")
                  .then(function(data){
                    name4.push(data.name)
                    $.get(url + "exerciseimage/?exercise=111")
                    .then(function(data){
                      picture4.push(data.results[1].image)
                      console.log(picture4)
                      updatePage4(picture4, name4)
                      $.get(url + "exercise/192")
                      .then(function(data){
                        name5.push(data.name)
                        $.get(url + "exerciseimage/?exercise=192")
                        .then(function(data){
                          picture5.push(data.results[1].image)
                          console.log(picture5)
                          updatePage5(picture5, name5)
                          $.get(url + "exercise/109")
                          .then(function(data){
                            name6.push(data.name)
                            $.get(url + "exerciseimage/?exercise=109")
                            .then(function(data){
                              picture6.push(data.results[1].image)
                              console.log(picture6)
                              updatePage6(picture6, name6)
                              $.get(url + "exercise/111")
                              .then(function(data){
                                name7.push(data.name)
                                $.get(url + "exerciseimage/?exercise=111")
                                .then(function(data){
                                  picture7.push(data.results[1].image)
                                  console.log(picture7)
                                  updatePage7(picture7, name7)
                                  $.get(url + "exercise/119")
                                  .then(function(data){
                                    name8.push(data.name)
                                    $.get(url + "exerciseimage/?exercise=119")
                                    .then(function(data){
                                      picture8.push(data.results[1].image)
                                      console.log(picture8)
                                      updatePage8(picture8, name8)
                                      $.get(url + "exercise/181")
                                      .then(function(data){
                                        name9.push(data.name)
                                        $.get(url + "exerciseimage/?exercise=181")
                                        .then(function(data){
                                          picture9.push(data.results[1].image)
                                          console.log(picture9)
                                          updatePage9(picture9, name9)
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
      function updatePage(picture1, name1){
        $(".Day-1").append("<h1>Monday</h1>")
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture1 +"'><span class='card-title'>1</span><a href = 'exercises/squats.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name1 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage2(picture2, name2){
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture2 +"'><span class='card-title'>1</span><a href = 'exercises/press.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name2 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage3(picture3, name3){
        $(".one").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture3 +"'><span class='card-title'>1</span><a href = 'exercises/dl.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name3 + "</h3><h3>1x5</h3></div></div></div>")
      }
      function updatePage4(picture4, name4){
        $(".Day-2").append("<h1>Wednesday</h1>")
        $(".two").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture4 +"'><span class='card-title'>1</span><a href = 'exercises/squats.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name4 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage5(picture5, name5){
        $(".two").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture5 +"'><span class='card-title'>1</span><a href = 'exercises/bench.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name5 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage6(picture6, name6){
        $(".two").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture6 +"'><span class='card-title'>1</span><a href = 'exercises/rows.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name6 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage7(picture7, name7){
        $(".Day-3").append("<h1>Friday</h1>")
        $(".three").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture7 +"'><span class='card-title'>1</span><a href = 'exercises/squats.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name7 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage8(picture8, name8){
        $(".three").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture8 +"'><span class='card-title'>1</span><a href = 'exercises/press.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name8 + "</h3><h3>3x5</h3></div></div></div>")
      }
      function updatePage9(picture9, name9){
        $(".three").append("<div class='col s6 m4'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture9 +"'><span class='card-title'>1</span><a href = 'exercises/chinup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h3>" + name9 + "</h3><h3>3 x failure</h3></div></div></div>")
      }
    }
    else {
      $.get(url + "exercise/111/")
      .then(function(data){
        name1.push(data.name)
        $.get(url + "exerciseimage/?exercise=111")
        .then(function(data) {
          picture1.push(data.results[1].image)
          console.log(picture1)
          updatePage(picture1, name1)
          $.get(url + "exercise/113/")
          .then(function(data){
            name2.push(data.name)
            $.get(url + "exerciseimage/?exercise=113")
            .then(function(data){
              picture2.push(data.results[1].image)
              console.log(picture2)
              updatePage2(picture2, name2)
              $.get(url +"exercise/209/")
              .then(function(data){
                name3.push(data.name)
                $.get(url + "exerciseimage/?exercise=109")
                .then(function(data){
                  picture3.push(data.results[0].image)
                  console.log(picture3)
                  updatePage3(picture3, name3)
                  $.get(url + "exercise/154/")
                  .then(function(data){
                    name4.push(data.name)
                    $.get(url + "exerciseimage/?exercise=154")
                    .then(function(data){
                      picture4.push(data.results[1].image)
                      console.log(picture4)
                      updatePage4(picture4, name4)
                      $.get(url + "exercise/181")
                      .then(function(data){
                        name5.push(data.name)
                        $.get(url + "exerciseimage/?exercise=181")
                        .then(function(data){
                          picture5.push(data.results[1].image)
                          console.log(picture5)
                          updatePage5(picture5, name5)
                          $.get(url + "exercise/192")
                          .then(function(data){
                            name6.push(data.name)
                            $.get(url + "exerciseimage/?exercise=192")
                            .then(function(data){
                              picture6.push(data.results[1].image)
                              console.log(picture6)
                              updatePage6(picture6, name6)
                              $.get(url + "exercise/109")
                              .then(function(data){
                                name7.push(data.name)
                                $.get(url + "exerciseimage/?exercise=109")
                                .then(function(data){
                                  picture7.push(data.results[1].image)
                                  console.log(picture7)
                                  updatePage7(picture7, name7)
                                  $.get(url + "exercise/195")
                                  .then(function(data){
                                    name8.push(data.name)
                                    $.get(url + "exerciseimage/?exercise=195")
                                    .then(function(data){
                                      picture8.push(data.results[1].image)
                                      console.log(picture8)
                                      updatePage8(picture8, name8)
                                      $.get(url + "exercise/105")
                                      .then(function(data){
                                        name9.push(data.name)
                                        $.get(url + "exerciseimage/?exercise=109")
                                        .then(function(data){
                                          picture9.push(data.results[0].image)
                                          console.log(picture9)
                                          updatePage9(picture9, name9)
                                          $.get(url + "exercise/113")
                                          .then(function(data){
                                            name10.push(data.name)
                                            $.get(url + "exerciseimage/?exercise=113")
                                            .then(function(data){
                                              picture10.push(data.results[1].image)
                                              console.log(picture10)
                                              updatePage10(picture10, name10)
                                              $.get(url + "exercise/191")
                                              .then(function(data){
                                                name11.push(data.name)
                                                $.get(url + "exerciseimage/?exercise=191")
                                                .then(function(data){
                                                  picture11.push(data.results[1].image)
                                                  console.log(picture11)
                                                  updatePage11(picture11, name11)
                                                  $.get(url + "exercise/154")
                                                  .then(function(data){
                                                    name12.push(data.name)
                                                    $.get(url + "exerciseimage/?exercise=154")
                                                    .then(function(data){
                                                      picture12.push(data.results[1].image)
                                                      console.log(picture12)
                                                      updatePage12(picture12, name12)
                                                      $.get(url + "exercise/181")
                                                      .then(function(data){
                                                        name13.push(data.name)
                                                        $.get(url + "exerciseimage/?exercise=181")
                                                        .then(function(data){
                                                          picture13.push(data.results[1].image)
                                                          console.log(picture13)
                                                          updatePage13(picture13, name13)
                                                          $.get(url + "exercise/119")
                                                          .then(function(data){
                                                            name14.push(data.name)
                                                            $.get(url + "exerciseimage/?exercise=119")
                                                            .then(function(data){
                                                              picture14.push(data.results[1].image)
                                                              console.log(picture14)
                                                              updatePage14(picture14, name14)
                                                              $.get(url + "exercise/109")
                                                              .then(function(data){
                                                                name15.push(data.name)
                                                                $.get(url + "exerciseimage/?exercise=109")
                                                                .then(function(data){
                                                                  picture15.push(data.results[1].image)
                                                                  console.log(picture15)
                                                                  updatePage15(picture15, name15)
                                                                  $.get(url + "exercise/195")
                                                                  .then(function(data){
                                                                    name16.push(data.name)
                                                                    $.get(url + "exerciseimage/?exercise=195")
                                                                    .then(function(data){
                                                                      picture16.push(data.results[0].image)
                                                                      console.log(picture16)
                                                                      updatePage16(picture16, name16)
                                                                    })
                                                                  })
                                                                })
                                                              })
                                                            })
                                                          })
                                                        })
                                                      })
                                                    })
                                                  })
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
      function updatePage(picture1, name1){
        $(".Day-1").append("<h1>Monday</h1>")
        $(".one").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture1 +"'><span class='card-title'>1</span><a href = 'exercises/squats.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name1 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage2(picture2, name2){
        $(".one").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture2 +"'><span class='card-title'>1</span><a href = 'exercises/lunges.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name2 + "</h4><h4>3x8</h4></div></div></div>")
      }
      function updatePage3(picture3, name3){
        $(".one").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture3 +"'><span class='card-title'>1</span><a href = 'exercises/stiffdl.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name3 + "</h4><h4>3x8</h4></div></div></div>")
      }
      function updatePage4(picture4, name4){
        $(".one").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture4 +"'><span class='card-title'>1</span><a href = 'exercises/legcurls.html'class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name4 + "</h4><h4>3x12</h4></div></div></div>")
      }
      function updatePage5(picture5, name5){
        $(".Day-2").append("<h1>Tuesday</h1>")
        $(".two").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture5 +"'><span class='card-title'>1</span><a href = 'exercises/chinup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name5 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage6(picture6, name6){
        $(".two").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture6 +"'><span class='card-title'>1</span><a href = 'exercises/bench.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name6 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage7(picture7, name7){
        $(".two").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture7 +"'><span class='card-title'>1</span><a href = 'exercises/rows.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name7 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage8(picture8, name8){
        $(".two").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture8 +"'><span class='card-title'>1</span><a href = 'exercises/pushup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name8 + "</h4><h4>3 x failure</h4></div></div></div>")
      }
      function updatePage9(picture9, name9){
        $(".Day-3").append("<h1>Thursday</h1>")
        $(".three").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture9 +"'><span class='card-title'>1</span><a href = 'exercises/dl.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name9 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage10(picture9, name9){
        $(".three").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture10 +"'><span class='card-title'>1</span><a href = 'exercises/lunges.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name10 + "</h4><h4>3x8</h4></div></div></div>")
      }
      function updatePage11(picture11, name11){
        $(".three").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture11 +"'><span class='card-title'>1</span><a href = 'exercises/frsquat.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name11 + "</h4><h4>3x8</h4></div></div></div>")
      }
      function updatePage12(picture12, name12){
        $(".three").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture12 +"'><span class='card-title'>1</span><a href = 'exercises/legcurls.html'class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name12 + "</h4><h4>3x12</h4></div></div></div>")
      }
      function updatePage13(picture13, name13){
        $(".Day-4").append("<h1>Friday</h1>")
        $(".four").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture13 +"'><span class='card-title'>1</span><a href = 'exercises/chinup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name13 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage14(picture14, name14){
        $(".four").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture14 +"'><span class='card-title'>1</span><a href = 'exercises/press.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name14 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage15(picture15, name15){
        $(".four").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture15 +"'><span class='card-title'>1</span><a href = 'exercises/rows.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name15 + "</h4><h4>3x5</h4></div></div></div>")
      }
      function updatePage16(picture16, name16){
        $(".four").append("<div class='col s6 m3'><div class='card hoverable'><div class='card-image'><img class = 'exercises' src='" + picture16 +"'><span class='card-title'>1</span><a href = 'exercises/pushup.html' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><h4>" + name16 + "</h4><h4>3 x failure</h4></div></div></div>")
      }
    }
  }
})
