eventsApp.factory("eventData",
    function ($resource) {
        var resource = $resource("Event/:id", { id: "@id" });

        return {
            getEvent: function () {
                return resource.get({ id: 2 });

            },
            save: function (event) {
                event.id = 999;
                return resource.save(event);
            }

        };
    });

