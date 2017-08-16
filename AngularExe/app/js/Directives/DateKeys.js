"use strict";

eventsApp.directive("dateKeys", function () {
    return {
        restrict: "A",
        link: function ($scope, element, attrs, controller) {
            element.on("keydown",
                function (event) {
                    if (isForwadSlashKeyCode(event.keyCode) ||
                        isNavigationKeyCode(event.keyCode) ||
                        isNumerciKeyCode(event.keyCode)) {
                        return true;
                    }
                    return false;
                });
        }
    }

    function isNumerciKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
            || (event.keyCode >= 96 && event.keyCode <= 105);
    };

    function isForwadSlashKeyCode(keyCode) {
        return (event.keyCode === 191 || event.keyCode === 111);
    }

    function isNavigationKeyCode(keyCode) {
        switch (keyCode) {
            case 8:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 45:
            case 46:
                return true;
            default:
                return false;


        }

    }
})