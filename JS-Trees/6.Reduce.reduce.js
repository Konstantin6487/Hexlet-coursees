//Реализуйте и экспортируйте по умолчанию функцию-редьюсер обрабатывающую файловые деревья.

const tree = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'CONFIG.json', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'eTc',
        type: 'directory',
      },
      { meta: {}, name: 'HOSTS', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };


const reduce = (fn, tree, acc) => {
  const { children, meta, name, type } = tree;
  const newAcc = fn(acc, tree);
  if (type === 'file') {
    return newAcc;  
  }
  return children.reduce((iAcc, n) => reduce(fn, n, iAcc), newAcc);
};

reduce((acc, n) => acc + 1, tree, 0); //6
