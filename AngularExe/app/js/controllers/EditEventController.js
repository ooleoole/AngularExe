"use strict";

eventsApp.controller("EditEventController",
    function EditEventController($scope, eventData) {
        $scope.cancelEdit = function () {
            window.location = "";
        };
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                eventData.setId().$promise.then(function(result) {
                    event.id = result.id + 1;
                    eventData.save(event).$promise
                        .then(function(response) { console.log("success", response) })
                        .catch(function(response) { console.log("failure", response) });
                });

            };
            
        }
    }
);