/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var rows = solution.rows();
  var firstCase = solution.togglePiece(0, 0); //(x, y)
  console.log(solution.rows());
  if (n === 1) {
    //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution.rows();
  }
  for (var i = 1; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      solution.togglePiece(i, j);
      if (solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()) {
        solution.togglePiece(i, j);
      } 
    }
  }
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};  

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var array = [];
  var numOfLoops = 0;
  var findSolutions = function(increment) {
    if (increment === n) {
      array[increment - 1] = undefined;
      solutionCount++;
      return;
    }
    var i = increment; 
    for (var j = 0; j < n; j++) {
      array = array.slice(0, i + 1);
      if (!array.includes(j)) {
        array[i] = j;
        findSolutions(increment + 1);
      }
    }   
  };
  
  findSolutions(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount; 
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) { 
  debugger;
  var solution = new Board({n: n});
  if (n === 0 || n === 2 || n === 3) {
    return solution.rows();
  } else if (n === 1) {
    var firstCase = solution.togglePiece(0, 0);
    return solution.rows();
  } else {
    var rows = solution.rows();
    solution.togglePiece(0, 2);
    for (var i = 1; i < rows.length; i++) {
      for (var j = 0; j < rows.length; j++) {
        solution.togglePiece(i, j);
        if (solution.hasAnyQueensConflicts()) {
          solution.togglePiece(i, j);
        } 
      }
    }
  }
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};



  // var board = new Board({n: n});
  // for (var i = 0; i < n; i++) {
  //   var firstCase = board.togglePiece(0, i);
  //   for (var j = 1; j < board.rows().length; j++) {
  //     for (var k = 0; k < board.rows().length; k ++) {
  //       board.toggle(j, k);
  //       if (board.hasAnyRooksConflicts()) {
  //         board.togglePiece(j, k);
  //       } else {
  //         for (var l = j + 1; l < board.rows().length; l++) {
  //           for (var m = 0; m < board.rows().length; m ++) {
  //             board.toggle(l, m);
  //             if (board.hasAnyRooksConflicts()) {
  //               board.togglePiece(l, m);
  //              } else {
  //               solutionCount += 1;
  //               board.togglePice(j, k);
  //              }
  //           }
  //         }
  //       }
  //     }
  //   }

  // var solutionN = findNRooksSolution(n);
  
  // for (var i = n; i > 1; i--) {
  //   solutionCount = solutionCount * i; 
  // }
