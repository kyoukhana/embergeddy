/* /app.js
 */

window.App = Ember.Application.create({
    LOG_TRANSITIONS: true // Log routing transitions
});


App.Router.map(function() {
    this.route("tester", { path: "/tester" });
});

App.anotherRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('tester');
    }
});