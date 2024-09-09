const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('Rue Montmartre', [
    { street: 'Rue Montmartre' }
  ])

  assert('123 Rue Montmartre, Paris', [
    { housenumber: '123' }, { street: 'Rue Montmartre' }, { locality: 'Paris' }
  ])

  assert('Rue de Paris', [
    { street: 'Rue de Paris' }
  ])

  assert('Rue de la Paix', [
    { street: 'Rue de la Paix' }
  ])

  assert('Boulevard du Général Charles De Gaulle', [
    { street: 'Boulevard du Général Charles De Gaulle' }
  ])

  assert('11 Boulevard Saint Germains', [
    { housenumber: '11' }, { street: 'Boulevard Saint Germains' }
  ])

  assert('Rue Saint Anne', [
    { street: 'Rue Saint Anne' }
  ])

  assert('Boulevard Charles De Gaulle', [
    { street: 'Boulevard Charles De Gaulle' }
  ])

  assert('Allée Victor Hugo', [
    { street: 'Allée Victor Hugo' }
  ])

  assert('Avenue Aristide Briand', [
    { street: 'Avenue Aristide Briand' }
  ])

  assert('Rue Henri Barbusse Paris France', [
    { street: 'Rue Henri Barbusse' }, { locality: 'Paris' }, { country: 'France' }
  ])

  assert('Rue du Général Leclerc Dunkerque France', [
    { street: 'Rue du Général Leclerc' }, { locality: 'Dunkerque' }, { country: 'France' }
  ])

  assert('Avenue de Sainte Rose de Lima', [
    { street: 'Avenue de Sainte Rose de Lima' }
  ])

  assert('Rue du Capitaine Galinat Marseille France', [
    { street: 'Rue du Capitaine Galinat' }, { locality: 'Marseille' }, { country: 'France' }
  ])

  assert('Rue Jean Baptiste Clément', [
    { street: 'Rue Jean Baptiste Clément' }
  ])

  assert('Mery Sur Oise', [
    { locality: 'Mery Sur Oise' }
  ])

  assert('Méry Sur Oise', [
    { locality: 'Méry Sur Oise' }
  ])

  assert('Méry-Sur-Oise', [
    { locality: 'Méry-Sur-Oise' }
  ])

  assert('Mery-Sur-Oise', [
    { locality: 'Mery-Sur-Oise' }
  ])

  assert('4 Cité Du Cardinal Lemoine 75005 Paris', [
    { housenumber: '4' }, { street: 'Cité Du Cardinal Lemoine' }, { postcode: '75005' }, { locality: 'Paris' }
  ])

  assert('32 Rue Du 4 Septembre', [
    { housenumber: '32' }, { street: 'Rue Du 4 Septembre' }
  ])

  assert('12 Cité Roland Garros', [
    { housenumber: '12' }, { street: 'Cité Roland Garros' }
  ])

  assert(`Rue de l'Amiral Galache, Toulouse`, [
    { street: `Rue de l'Amiral Galache` }, { locality: 'Toulouse' }
  ])

  assert(`Rue de l'Inspecteur Alles Paris`, [
    { street: `Rue de l'Inspecteur Alles` }, { locality: 'Paris' }
  ])

  assert(`Rue de l'Empereur Julien Paris`, [
    { street: `Rue de l'Empereur Julien` }, { locality: 'Paris' }
  ])

  assert(`Rue de l'Adjudant Réau Paris`, [
    { street: `Rue de l'Adjudant Réau` }, { locality: 'Paris' }
  ])

  assert(`10 Boulevard Saint-Germains Paris`, [
    { housenumber: '10' }, { street: `Boulevard Saint-Germains` }, { locality: 'Paris' }
  ])

  assert(`Paris 75000, France`, [
    { locality: 'Paris' }, { postcode: '75000' }, { country: 'France' }
  ])

  // https://github.com/pelias/parser/pull/141#issuecomment-895230721
  assert(`Esplanade de la Liberté`, [{ street: 'Esplanade de la Liberté' }])
  assert(`Esplanade du Géneral de Gaulle`, [{ street: 'Esplanade du Géneral de Gaulle' }])
  assert(`Esplanade Méditerranée`, [{ street: 'Esplanade Méditerranée' }])

  // bis/ter housenumber prefixes
  assert(`1 bis Av. Amélie, 92320 Châtillon, France`, [
    { housenumber: '1 bis' },
    { street: 'Av. Amélie' },
    { postcode: '92320' },
    { locality: 'Châtillon' },
    { country: 'France' }
  ])
  assert(`1 ter Av. Amélie, 92320 Châtillon, France`, [
    { housenumber: '1 ter' },
    { street: 'Av. Amélie' },
    { postcode: '92320' },
    { locality: 'Châtillon' },
    { country: 'France' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`address FRA: ${name}`, testFunction)
  }

  testcase(test, common)
}
