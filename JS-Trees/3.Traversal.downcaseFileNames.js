/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход директорию, приводит имена всех файлов в этой директории к нижнему регистру и возвращает ее наружу.

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
*/

/* if type === 'file'

const dfs = tree => {
  const { children, meta, name, type } = tree;
  if (type === "file") {
    return { children, meta, name: name.toLowerCase(), type }
  }
  return { children: children.map(dfs), meta, name, type }
};
*/

//if type === 'directory'

const dfs = tree => {
  const { children, meta, name, type } = tree;
  if (type === 'directory') {
    return { children: children.map(dfs), meta, name, type };
  }
  return { meta, name: name.toLowerCase(), type};
};

export default dfs;
