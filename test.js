import test from 'ava'
import * as iteratee from '.'

const iterable = [1, 3, 43, 5]

test('forEach: iterate n ** 2', async t => {
  const actual = []
  await iteratee.forEach(iterable, n => actual.push(n ** 2), 100)
  t.deepEqual(actual, [1, 9, 1849, 25])
})

test('forEach: total', async t => {
  let actual = 0
  await iteratee.forEach(iterable, n => actual += n, 100)
  t.is(actual, 52)
})

test('map: don\'t give delay value', async t => {
  const actual = await iteratee.map(iterable, n => n ** 2)
  t.deepEqual(actual, [1, 9, 1849, 25])
})

test('map', async t => {
  const actual = await iteratee.map(iterable, n => n ** 2, 100)
  t.deepEqual(actual, [1, 9, 1849, 25])
})

test('reduce', async t => {
  const actual = await iteratee.reduce(iterable, (a, b) => a + b, null, 100)
  t.is(actual, 52)
})

test('reduce: give initial value', async t => {
  const actual = await iteratee.reduce(iterable, (a, b) => a + b, 1, 100)
  t.is(actual, 53)
})

{
  const iterable = [4, 2, 2, 8]

  test('reduceRight', async t => {
    const actual = await iteratee.reduceRight(iterable, (a, b) => a / b)
    t.is(actual, 0.5)
  })

  test('reduceRight: give initial value', async t => {
    const actual = await iteratee.reduce(iterable, (a, b) => a / b, 32)
    t.is(actual, 0.25)
  })
}

test('throws: not iterable', async t => {
  t.throws(() => iteratee.forEach(null, (a, b) => a + b), TypeError, 'Cannot convert undefined or null to object')
})

test('throws: not func', async t => {
  t.throws(() => iteratee.forEach([], null), TypeError, 'null is not a function')
})
