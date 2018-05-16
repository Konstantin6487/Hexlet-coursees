//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.

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

const map = (fn, tree) => {
  const { children, meta, name, type } = tree;
  const newName = fn(tree);
  if (newName.type === "directory") {
    return { ...newName, children: children.map(c => map(fn, c))};
  }
  return newName;
};

map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
