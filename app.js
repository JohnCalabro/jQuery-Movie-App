const ratingMinMax =  $('#rating')
ratingMinMax.attr('min', '0').attr('max', '10')
 $('#title').attr('minlength', '2') //being ignored but max isn't, why?

$('#submit').on('click', function(e){
  e.preventDefault()
  console.log('clicked')
  const inputTitle = $('#title').val()
  const inputRating = $('#rating').val()

  
  console.log(ratingMinMax)
  console.log($('#movie-container'))
  const h2 = $("<h2></h2>")
  const h22 = $("<h2></h2>")
  const btn = $('<button></button>')
  
  console.log(ratingMinMax)
  btn.text('Remove Film')
  
  h2.text(inputTitle)
  h22.text(inputRating)
  console.log(h22)

  $('#movie-container').append(h2).append(h22).append(btn)
  


  btn.on('click', function(e){
    $(h2).remove()
    $(h22).remove()
    $(btn).remove()
  })
  
})
