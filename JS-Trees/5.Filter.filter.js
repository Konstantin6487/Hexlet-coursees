//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

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

const filter = (fn, tree) => {
  if (!fn(tree)) {
    return null;
  }
  const { children, meta, name, type } = tree;
  if (type === "file") {
    return tree;
  }
  return { children: children.map(c => filter(fn, c)).filter(v => v), meta, name, type};
};

filter(n => n.type === 'directory', tree).toSource();

/*
({
    children: [
      {
        children: [
          {
            children: [{
              children: [],
              meta: {},
              name: 'conf.d',
              type: 'directory',
            }],
            meta: {},
            name: 'nginx',
            type: 'directory',
          },
          {
            children: [],
            meta: {},
            name: 'consul',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'etc',
        type: 'directory',
      },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  });
*/
