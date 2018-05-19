//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку.

const mkdir = (name, children = [], meta = {}, type = "directory" ) => ({children, meta, name, type});
const mkfile = (name, meta = {}, type = "file") => ({meta, name, type});

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

const flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  }
  if (!Array.isArray(first)) {
    return [first, ...flatten(rest)];
  }
  return [...flatten(first), ...flatten(rest)];
};

const findFilesByName = (root, substr) => {
  const iter = (n, dirName) => {
    const wrightPaths = dirName.join('/');
    if (n.type === 'file' && n.name.includes(substr)) {
      return wrightPaths;
    }
    if (n.type === 'directory' && !n.children || n.type === 'file') {
      return [];
    }
    return n.children.reduce((acc, value) => 
      [...flatten(acc), iter(value, [wrightPaths, value.name])], []);
  };
  return iter(root, [root.name])
    .filter(p => !Array.isArray(p))
        .map(p => p.slice(1));
};

findFilesByName(tree, 'co');
// => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
