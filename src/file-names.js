const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const hashTable = {};
  const result = [];

  for (const name of names) {
    if (!hashTable[name]) {
      // name is unique, add it to the result array
      result.push(name);
      hashTable[name] = 1;
    } else {
      // name already exists, append (k) to the end
      const newName = `${name}(${hashTable[name]})`;
      result.push(newName);
      hashTable[name]++;
      hashTable[newName] = 1;
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
