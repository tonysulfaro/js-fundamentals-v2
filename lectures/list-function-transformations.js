function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: function() {
      console.log('my name is ', name)
    }
  }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']

const suspectList = []

suspects.forEach(suspect => {
  console.log(CreateSuspectObjects(suspect))
  suspectList.push(CreateSuspectObjects(suspect))
})

console.log(suspectList)
