"use strict";

var eventsApp = angular.module("eventsApp", ["ngSanitize", "ngResource", "ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when("/newEvent",
            {
                templateUrl: "templates/NewEvent.Html",
                controller: "EditEventController"
            });

        $routeProvider.when("/events",
            {
                templateUrl: "templates/EventList.html",
                controller: "EventListController"
            });
        $routeProvider.when("/events/:eventId",
            {
                foo: "bar",
                templateUrl: "templates/EventDetails.html",
                controller: "EventController",
                resolve: {
                    event: function ($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when("/sampleDirectives",
            {
                templateUrl: "templates/SampleDirectives.html",
                controller: "SampleDirectiveController"

            });

        $routeProvider.otherwise({ redirectTo: "/events" });
        $locationProvider.html5Mode(true);
    });

