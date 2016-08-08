import DS from 'ember-data';

export default DS.Model.extend({
  storeName: DS.attr('string'),
  storeNumber: DS.attr('number'),
  lastVisit: DS.attr('date')
});
