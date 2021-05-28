const compose = (...functions) =>
  x => functions.reduceRight((acc, fn) => fn(acc), x)


const pipe = (...functions) =>
  x => functions.reduce((acc, fn) => fn(acc), x)


export {compose, pipe}