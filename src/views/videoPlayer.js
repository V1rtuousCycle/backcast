var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },


  render: function() {
    console.log(this.model);
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
        return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
