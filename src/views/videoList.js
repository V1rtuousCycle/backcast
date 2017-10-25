var VideoListView = Backbone.View.extend({



  render: function() {
    console.log(this.collection);
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').append(
      this.collection.map(function (video) {
        return new VideoListEntryView({ model: video }).render().el;
      })
    )

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
