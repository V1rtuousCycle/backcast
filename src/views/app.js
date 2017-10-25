var AppView = Backbone.View.extend({

  el: '#app',

  // events: {    //NEVER TESTED
  //   'click form input': 'handleClick'
  // },

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('Godzilla');
    this.render(); //ADDED
  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
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
