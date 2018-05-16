const convert = list => {
  return list.length === 0 ? {} : list.reduce((acc, [a, b]) => {
    return Array.isArray(b) ? ({...acc, [a]: convert(b)}) : ({...acc, [a]: b});
  }, {});
};

export default convert;

convert([]); // => {}
convert([['key', 'value']]); // { key: 'value' }
convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }

convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
]);
// { key: { key2: 'anotherValue' }, key2: 'value2' }
