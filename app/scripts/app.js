var WalmartSearch = window.WalmartSearch = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

WalmartSearch.IndexController = Ember.ArrayController.extend({
    results: [],
    actions: {
        search: function () {
            //var url  = 'https://sheltered-earth-7471.herokuapp.com/walmart/search?apikey=t5k2mrf5py2s5nsgd3yg4usd&query=';
            var url  = '/walmart/search?apikey=t5k2mrf5py2s5nsgd3yg4usd&query=';
            var that = this;
            Ember.$.getJSON(url + this.get('query')).then(function (data) {
                console.table(data);
                data = {
                    items: [
                        {
                        name: 'foo',
                        shortDescription: 'yo yo yo'}
                    ]
                };
                that.set('results', data);
            });
        }
    }
});
