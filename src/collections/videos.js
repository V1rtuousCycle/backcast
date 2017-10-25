var Videos = Backbone.Collection.extend({

  initialize: function() {
    this.search('Godzilla');
  },

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      }
    });
  },

  parse: function(response) {
    return response.items;
  }
});
