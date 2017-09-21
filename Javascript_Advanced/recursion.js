let animalKingdom = [
  {
    id: 'animals',
    parent: null
  }, {
    id: 'mammals',
    parent: 'animals'
  }, {
    id: 'cats',
    parent: 'mammals'
  }, {
    id: 'dogs',
    parent: 'mammals'
  }, {
    id: 'cocaine',
    parent: 'cats'
  }, {
    id: 'sherlock',
    parent: 'cats'
  }, {
    id: 'toby',
    parent: 'dogs'
  }, {
    id: 'cerberus',
    parent: 'dogs'
  }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories.filter(c => c.parent === parent)
  .forEach(c => node[c.id] = makeTree(categories, c.id));

  return node;
}

console.log(JSON.stringify(makeTree(animalKingdom, null), null, 1));
