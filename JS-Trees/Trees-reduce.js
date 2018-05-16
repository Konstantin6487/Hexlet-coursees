const reduce = (f, tree, acc) => {
  const newAcc = f(acc);
  const [name, children] = tree;
  if (!children) {
    return newAcc;
  }
  return children.reduce((acc, value) => reduce(f, value, acc), newAcc);
};

const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

reduce(acc => acc + 1, tree, 0);
