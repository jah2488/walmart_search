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
    actions: {
        search: function () {
            var url = 'https://sheltered-earth-7471.herokuapp.com/walmart/search?apikey=t5k2mrf5py2s5nsgd3yg4usd&query=';
            Ember.$.getJSON(url + this.get('query')).then(function (data) {
                console.log(data);
                console.table(data);
                this.set('results', data);
            });
        }
    }
});
