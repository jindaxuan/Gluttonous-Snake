(function(){
  function Game(map) {
    this.snake = new Snake(map);
    this.food = new Food(map);
    this.map = map;
  }
  Game.prototype.start = function() {
    this.snake.render();
    var that = this,
      flag = '';

    flag = setInterval(function(){
      that.snake.move(that.food);
      that.snake.render();

      var maxX = that.map.offsetWidth / that.snake.width,
        maxY = that.map.offsetHeight / that.snake.height,
        snakeX = that.snake.body[0].x,
        snakeY = that.snake.body[0].y;

      if( snakeX < 0 || snakeX >= maxX ) {
        alert('你真好，你出去了');
        clearInterval(flag);
      }
      if( snakeY < 0 || snakeY >= maxY ) {
        alert('你真好，你出去了');
        clearInterval(flag);
      }

    },150)

    document.addEventListener('keydown', function(e) {
      switch(e.keyCode) {
        case 37:
          that.snake.direction = 'left';
          break;
        case 38:
          that.snake.direction = 'top';
          break;
        case 39:   
          that.snake.direction = 'right';
          break;
        case 40:  
          that.snake.direction = 'bottom';
          break;
      }
    }, false)

    
    this.food.render();
  }

  window.Game = Game;
})()
