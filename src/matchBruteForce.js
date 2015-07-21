/**
 * Brute Force method for finding matching rows or columns
 * */
var MatchBruteForce = (function () {
    'use strict';
    var CONST_MIN_STREAK = 3,
        matrix = [],
        totalRows = 0,
        totalColumns = 0;

    return {
        init: init,
        get345: get345,
        getCol345: bruteCol345,
        getRow345: bruteRow345
    };

    function init(newMatrix) {
        matrix = newMatrix;
        totalRows = matrix.length;
        totalColumns = matrix[0].length;
    }

    function get345() {
        return bruteRow345().concat(bruteCol345());
    }

    function bruteCol345() {
        var found = [],
            streakCol = 0;

        for (var col = 0; col < totalColumns; col++) {
            // reset streak
            streakCol = 0;
            var lastVal = 0,
                streakStartCoords = [-1, -1],
                streakEndCoords = [-1, -1];
            for (var row = 0; row < totalRows; row++) {
                if (lastVal === matrix[row][col]) {
                    streakCol++;
                } else {
                    // if had streak going
                    if (streakCol >= CONST_MIN_STREAK) {
                        found.push(
                            {
                                'a': streakStartCoords,
                                'b': streakEndCoords
                            }
                        );
                    }
                    lastVal = matrix[row][col];
                    streakCol = 1;
                    streakStartCoords = [row, col];
                    streakEndCoords = [-1, -1];
                }
                if (streakCol >= CONST_MIN_STREAK) {
                    streakEndCoords = [row, col];
                    if (row === totalRows - 1) {
                        found.push(
                            {
                                'a': streakStartCoords,
                                'b': streakEndCoords
                            }
                        );
                    }
                }
            }
        }
        return found;
    }

    function bruteRow345() {
        var found = [],
            streakRow = 0;

        for (var row = 0; row < totalRows; row++) {
            // reset streak
            streakRow = 0;
            var lastVal = 0,
                streakStartCoords = [-1, -1],
                streakEndCoords = [-1, -1];
            for (var col = 0; col < totalColumns; col++) {
                if (lastVal === matrix[row][col]) {
                    streakRow++;
                } else {
                    // if had streak going
                    if (streakRow >= CONST_MIN_STREAK) {
                        found.push(
                            {
                                'a': streakStartCoords,
                                'b': streakEndCoords
                            }
                        );
                    }
                    lastVal = matrix[row][col];
                    streakRow = 1;
                    streakStartCoords = [row, col];
                    streakEndCoords = [-1, -1];
                }
                if (streakRow >= CONST_MIN_STREAK) {
                    streakEndCoords = [row, col];
                    if (col === totalColumns - 1) {
                        found.push(
                            {
                                'a': streakStartCoords,
                                'b': streakEndCoords
                            }
                        );
                    }
                }
            }
        }
        return found;
    }
});

/* Exported functions */
module.exports = {
    MatchBruteForce: MatchBruteForce
};