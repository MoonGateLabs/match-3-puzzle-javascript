var Assert = require('chai').assert,
    Match = require('matchBruteForce');

console.log('\nstarting matchBruteForce ...\n');

(function () {
    var curTest = '';
    try {
        //[Test]
        (function () {
            curTest = 'get345 3x3';
            // arrange
            var match = new Match(),
                matrix = [
                    [1, 1, 1],
                    [2, 3, 1],
                    [5, 4, 1]
                ],
                expected = [
                    {
                        'a': [0, 0],
                        'b': [0, 2]
                    },
                    {
                        'a': [0, 2],
                        'b': [2, 2]
                    }
                ];

            match.init(matrix);

            // act
            var result = match.get345();

            // assert
            Assert.deepEqual(result, expected);
            console.log(curTest + ':PASSED');
        }());

        //[Test]
        (function () {
            curTest = 'get345 4x4';
            // arrange
            var match = new Match(),
                matrix = [
                    [1, 1, 1, 4],
                    [2, 3, 1, 3],
                    [2, 3, 1, 2],
                    [5, 4, 1, 5]
                ],
                expected = [
                    {
                        'a': [0, 0],
                        'b': [0, 2]
                    },
                    {
                        'a': [0, 2],
                        'b': [3, 2]
                    }
                ];

            match.init(matrix);

            // act
            var result = match.get345();

            // assert
            Assert.deepEqual(result, expected);
            console.log(curTest + ':PASSED');
        }());

        //[Test]
        (function () {
            curTest = 'get345 7x7';
            // arrange
            var match = new Match(),
                matrix = [
                    [1, 1, 1, 3, 2, 2, 2],
                    [2, 3, 4, 5, 1, 1, 2],
                    [2, 4, 4, 4, 4, 1, 2],
                    [2, 3, 3, 3, 1, 4, 3],
                    [2, 3, 5, 3, 1, 4, 3],
                    [2, 3, 2, 3, 1, 4, 3],
                    [5, 5, 5, 5, 5, 5, 5]
                ],
                expected = [
                    {
                        'a': [0, 0],
                        'b': [0, 2]
                    },
                    {
                        'a': [0, 4],
                        'b': [0, 6]
                    },
                    {
                        'a': [2, 1],
                        'b': [2, 4]
                    },
                    {
                        'a': [3, 1],
                        'b': [3, 3]
                    },
                    {
                        'a': [6, 0],
                        'b': [6, 6]
                    },
                    {
                        'a': [1, 0],
                        'b': [5, 0]
                    },
                    {
                        'a': [3, 1],
                        'b': [5, 1]
                    },
                    {
                        'a': [3, 3],
                        'b': [5, 3]
                    },
                    {
                        'a': [3, 4],
                        'b': [5, 4]
                    },
                    {
                        'a': [3, 5],
                        'b': [5, 5]
                    },
                    {
                        'a': [0, 6],
                        'b': [2, 6]
                    },
                    {
                        'a': [3, 6],
                        'b': [5, 6]
                    }
                ];

            match.init(matrix);

            // act
            var result = match.get345();

            // assert
            Assert.deepEqual(result, expected);
            console.log(curTest + ':PASSED');
        }());

    } catch (e) {
        console.log(curTest + ':FAILED \n\t', e.message);
        console.log('\t EXPECTED\n', e.expected);
        console.log('\t ACTUAL\n', e.actual);
    }
    console.log('DONE -_-');
})();