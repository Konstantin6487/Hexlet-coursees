//Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный массив.

const flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  }
  else if (!Array.isArray(first)) {
    return [first, ...flatten(rest)];
  }
  return [...flatten(first), ...flatten(rest)];
};

const list = [1, 2, [3, 5], [[4, 3], 2]];

flatten(list);
// [1, 2, 3, 5, 4, 3, 2]
