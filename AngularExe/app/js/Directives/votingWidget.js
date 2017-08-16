"use strict";

eventsApp.directive("votingWidget",
    function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/templates/directives/VotingWidget.html",
            scope: {
                upvote: "&",
                downvote: "&",
                count: "="
            }

        };
    })