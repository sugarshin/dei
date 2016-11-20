/**
 * forEach
 *
 * @param {Object[]} iterable
 * @param {Function} func
 * @param {number} [delay = 0]
 * @returns {Promise}
 */
const forEach = (iterable, func, delay = 0) => {
  checkFunc(func)
  const fulfilled = createFulfilled(delay)

  return arrayFrom(iterable).reduce((p, i, index, array) => {
    return p
      .then(fulfilled)
      .then(() => func(i, index, array))
  }, Promise.resolve())
}

/**
 * map
 *
 * @param {Object[]} iterable
 * @param {Function} func
 * @param {number} [delay = 0]
 * @returns {Promise}
 */
const map = (iterable, func, delay = 0) => {
  checkFunc(func)
  const fulfilled = createFulfilled(delay)

  return arrayFrom(iterable).reduce((p, i, index, array) => {
    return p
      .then(fulfilled)
      .then(ret => [...ret, func(i, index, array)])
  }, Promise.resolve([]))
}

/**
 * reduce
 *
 * @param {Object[]} iterable
 * @param {Function} func
 * @param {*} [initialValue]
 * @param {number} [delay = 0]
 * @returns {Promise}
 */
const reduce = (iterable, func, initialValue, delay = 0) => {
  checkFunc(func)
  const target = arrayFrom(iterable)
  const givenInitialValue = !isNil(initialValue)
  const fulfilled = createFulfilled(delay)

  return target.reduce((p, i, index, array) => {
    return p
      .then(fulfilled)
      .then(ret => !givenInitialValue && index === array.length - 1 ?
        ret :
        func(ret, array[!givenInitialValue ? index + 1 : index], index, array)
      )
  }, Promise.resolve(givenInitialValue ? initialValue : target[0]))
}

/**
 * reduceRight
 *
 * @param {Object[]} iterable
 * @param {Function} func
 * @param {*} [initialValue]
 * @param {number} [delay = 0]
 * @returns {Promise}
 */
const reduceRight = (iterable, func, initialValue, delay = 0) => {
  return reduce([...iterable].reverse(), func, initialValue, delay = 0)
}

module.exports = { forEach, map, reduce, reduceRight };

function createFulfilled(delay) {
  return ret => new Promise(resolve => setTimeout(() => resolve(ret), delay))
}

function checkFunc(func) {
  if (typeof func !== 'function') {
    throw new TypeError(`${func} is not a function`)
  }
}

function isNil(value) {
  return value === null || value === void 0
}

function arrayFrom(iterable) {
  try {
    return Array.from(iterable)
  } catch (e) {
    throw new TypeError(e)
  }
}
