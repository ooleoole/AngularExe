eventsApp.factory("eventData",
    function ($resource) {
        return {
            getEvent: function (eventId) {
                return $resource("Event/Get/:id", { id: "@id" }).get({ id: eventId });

            },
            setId: function () {
               return  $resource("Event/GetLastId").get();

            },
            save: function (event) {
                return $resource("Event/Post/:id", { id: "@id" }).save(event);
            },
            getAllEvents:function() {
                return $resource("Event/GetAll").query();
            }

        };
    });

