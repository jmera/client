import JSONAPISerializer from 'ember-data/serializers/json-api';
import DS from 'ember-data';

export default JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: { embedded: 'always' },
    address: { embedded: 'always' }
  }
});
