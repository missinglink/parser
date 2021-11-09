const Classification = require('./RegionClassification');

module.exports.tests = {};

module.exports.tests.constructor = (test) => {
  test('constructor', (t) => {
    let c = new Classification();
    t.true(c.public);
    t.equals(c.label, 'region');
    t.equals(c.confidence, 1.0);
    t.deepEqual(c.meta, {});
    t.end();
  });
};

module.exports.all = (tape, common) => {
  function test(name, testFunction) {
    return tape(`RegionClassification: ${name}`, testFunction);
  }

  for (var testCase in module.exports.tests) {
    module.exports.tests[testCase](test, common);
  }
};
