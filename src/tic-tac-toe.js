class TicTacToe {
    constructor() {
        this.MatrSize = 3;
        this.currentPlayer = 'x';
        this.matrix = [[, , ,], [, , ,], [, , ,]];
    }

    // возвращает текущего игрока
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }
    // должен правильно обновить состояние класса (изменить текущего игрока, обновить хранилище меток и т. д.)
    nextTurn(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] === undefined) {
            this.matrix[rowIndex][colIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'o') ? 'x' : 'o';
        }
    }

    // вернет true если игра закончена
    isFinished() {
        if (this.noMoreTurns() === true || this.getWinner() !== null) {
            return true;
        }
        return false;
    }

    // определить победителя (возвращает х или о)  x or o
    getWinner() {
        let oCount = 0;
        let xCount = 0;
        // по горизонтали
        for (let i = 0; i < this.MatrSize; i++) {
            oCount = 0;
            xCount = 0;
            for (let j = 0; j < this.MatrSize; j++) {
                if (this.matrix[i][j] === 'o') {
                    oCount++;
                }
                if (this.matrix[i][j] === 'x') {
                    xCount++;
                }
            }
            if (xCount === this.MatrSize) {
                return 'x';
            } else if (oCount === this.MatrSize) {
                return 'o';
            }
        }
        // по вертикали
        for (let i = 0; i < this.MatrSize; i++) {
            oCount = 0;
            xCount = 0;
            for (let j = 0; j < this.MatrSize; j++) {
                if (this.matrix[j][i] === 'o') {
                    oCount++;
                }
                if (this.matrix[j][i] === 'x') {
                    xCount++;
                }
            }
            if (xCount === this.MatrSize) {
                return 'x';
            } else if (oCount === this.MatrSize) {
                return 'o';
            }
        }
        // по диагонали
        oCount = 0;
        xCount = 0;
        for (let i = 0; i < this.MatrSize; i++) {
            if (this.matrix[i][i] === 'o') {
                oCount++;
            }
            if (this.matrix[i][i] === 'x') {
                xCount++;
            }
        }
        if (xCount === this.MatrSize) {
            return 'x';
        } else if (oCount === this.MatrSize) {
            return 'o';
        }
        // по второй диагонали
        oCount = 0;
        xCount = 0;
        for (let i = 0; i < this.MatrSize; i++) {
            if (this.matrix[this.MatrSize - 1 - i][i] === 'o') {
                oCount++;
            }
            if (this.matrix[this.MatrSize - 1 - i][i] === 'x') {
                xCount++;
            }
        }
        if (xCount === this.MatrSize) {
            return 'x';
        } else if (oCount === this.MatrSize) {
            return 'o';
        }
        return null;
    }

    // не осталось больше ходов - true
    noMoreTurns() {
        for (let i = 0; i < this.MatrSize; i++) {
            for (let j = 0; j < this.MatrSize; j++) {
                if (this.matrix[i][j] !== 'o' && this.matrix[i][j] !== 'x') {
                    return false;
                }
            }
        }
        return true;
    }

    // не осталось больше ходов и нет победителя (все клетки заполнены) - true иначе false
    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        // if (rowIndex === 0 || colIndex === 0) {
        //     return null;
        // }
        return this.matrix[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
