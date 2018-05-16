//Elements without children

const dfs = tree => {
  const [element, children] = tree;
  return !children ? undefined : children.map(dfs);
};

dfs(['A', 
      [
        ['B', [['E'], ['F']]],
        ['C'],
        ['D', [['G'], ['J']]],
      ]
]);

//[[ undefined, undefined ], undefined, [ undefined, undefined ]]
