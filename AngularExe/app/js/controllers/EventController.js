"use strict";

eventsApp.controller("EventController",
    function EventController($scope, eventData) {

        $scope.sort = "-upVoteCount";

        eventData.getEvent().$promise.then(function (event) {
            $scope.event = event;
            console.log(event);
        }).catch(
            function (response) {
                $console.log(response);
            }
        );

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });