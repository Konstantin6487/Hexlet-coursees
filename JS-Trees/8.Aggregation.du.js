/*
Во многих операционных системах (Linux, MacOS) существует утилита du. Она умеет считать место в указанных файлах и директориях. 
Например так:

 tmp$ du -sh *
  0B    com.docker.vmnetd.socket
 10M    credo
4.0K    debug.mjs
  0B    filesystemui.socket
4.0K    index.php
 37M    node_modules
 88K    package-lock.json
 22M    taxdome

du.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию, а возвращает список вложенных узлов (директорий и файлов) и место которое они занимают. Размер файла задается в метаданных. Размер директории складывается из сумм всех размеров файлов находящихся внутри во всех подпапках. Сами папки размера не имеют.

    Обратите внимание на структуру результирующего массива. Каждый элемент - массив с двумя значениями, именем директории и размером файлов внутри.
    Результат отсортирован по размеру в обратном порядке. То есть сверху самые тяжелые, внизу самые легкие

*/

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

const du = tree => 
  tree.children.map(item => 
    [item.name, reduce((acc, node) => 
      node.type === 'file' ? node.meta.size + acc : acc, item, 0)]).slice()
        .sort((a, b) => b[1] - a[1]);
        
 du(tree);
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]
