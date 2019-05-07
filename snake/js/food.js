(function(){
  var boxList = [];
  function Food(map, options) {
    options = options || {};
  
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.left = options.left || 20;
    this.top = options.top || 20;
    this.color = options.color || 'green';
    this.map = map;
  }
  
  Food.prototype.render = function() {
    var div = '';
    
    for(var i = boxList.length - 1; i >= 0; i--) {
      this.map.removeChild(boxList[i])
      boxList.splice(i, 1)
    }
  
    div = document.createElement('div');
    boxList.push(div)
  
    this.left = Tools.random(0, this.map.offsetWidth / this.width - 1) * this.width;
    this.top = Tools.random(0, this.map.offsetHeight / this.height - 1) * this.height;
  
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.left + 'px';
    div.style.top = this.top + 'px';
    div.style.position ='absolute';
    div.style.backgroundColor = this.color;
  
    this.map.appendChild(div);
  }

  window.Food = Food;
})()
