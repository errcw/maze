// Maze representation and generation.
var Mazes = (function() {
    function Cell() {
        this.up = true;
        this.down = true;
        this.left = true;
        this.right = true;
    }

    function Maze(width, height) {
        this.width = width;
        this.height = height;

        this.cells = [];
        for (var i = 0; i < width * height; i++) {
            this.cells[i] = new Cell();
        }

        this.at = function(row, column) {
            return this.cells[row * this.width + column];
        }
    }

    function eller(w, h) {
        return new Maze(w, h);
    }

    return {
        generate: function(width, height) {
            return eller(width, height);
        }
    }
})();
