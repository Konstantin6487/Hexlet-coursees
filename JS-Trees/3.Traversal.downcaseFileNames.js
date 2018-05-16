/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход директорию, приводит имена всех файлов в этой директории к нижнему регистру и возвращает ее наружу.

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
const updatedTree = downcaseFileNames(tree);
*/

const dfs = tree => {
  const { children, meta, name, type } = tree;
  if (type === 'directory') {
    return { children: children.map(dfs), meta, name, type };
  }
  return { meta, name: name.toLowerCase(), type};
};

export default dfs;
