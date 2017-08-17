eventsApp.directive("greeter",
    function () {
        return {
            restrict: "E",
            replace: false,
            template: " <a class='btn btn-block' ng-click='greeter()'>Say Hello</a>",
            controller: "@",
            name: "ctrl"
        }
    });