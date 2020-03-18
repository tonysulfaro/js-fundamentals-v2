function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      log('my name is ${name}')
    }
  }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']

var suspectsList = []

_.each(suspects, function(name) {
  const suspectObj = CreateSuspectObjects(name)
  suspectsList.push(suspectObj)
})
