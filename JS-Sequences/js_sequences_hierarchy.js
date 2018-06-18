//Реализуйте и экспортируйте по умолчанию функцию select, которая возвращает список нод в соответствии с запросом. 
//Запрос это список из имен тегов, в котором каждый следующий тег это тег, вложенный в предыдущий. 
//Порядок, в котором ноды возвращаются - не важен.

import { l, length, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, is, toString as htmlToString, hasChildren, children, reduce } from 'hexlet-html-tags'; // eslint-disable-line

const select = (query, list) => {

  const inner = (currQueryList, currList) => { 
    return reduce((item, acc) => {

      if (is(head(currQueryList), item)) {
        if (isEmpty(tail(currQueryList))) {
          return hasChildren(item) ? concat(inner(currQueryList, children(item)), concat(l(item), acc)) : concat(acc, l(item));
        }
        return hasChildren(item) ? concat(acc, inner(tail(currQueryList), children(item))) : acc;
      }

      if (is(head(query), item)) {
        return hasChildren(item) ? concat(acc, inner(tail(query), children(item))) : acc;
      }
      return hasChildren(item) ? concat(acc, inner(query, children(item))) : acc;

    }, l(), currList);
  };

  return inner(query, list);
};

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('div', l(node('a', l(node('div', l(node('p', l(node('span', 'text'))))))))));
const dom11 = append(dom10, node('h1', 'prolog'));
const dom = append(dom11, node('p', 'is about logic'));


length(select(l('p', 'ul', 'li'), dom)) === 2;
length(select(l('div', 'div', 'p'), dom)) === 1;
length(select(l('div', 'p'), dom)) === 3;
length(select(l('div', 'a'), dom)) === 1;
length(select(l('ul'), dom)) === 2;
length(select(l('div'), dom)) === 5;
