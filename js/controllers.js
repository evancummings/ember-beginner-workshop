App.StoriesEditController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			this.get("content").save().then(
				this.transitionToRoute("stories.show")
			);
		},
		didSave: function(story) {
			this.transitionToRoute("stories.show");
		},
		cancel: function() {
			this.get("content").rollback();
			this.transitionToRoute("stories.show");
		}
	}
});