var AppView = Backbone.View.extend({

  el: '#app',

  // events: {    //NEVER TESTED
  //   'click form input': 'handleClick'
  // },

  initialize: function() {
    this.videos = new Videos();
    this.render(); //ADDED
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
