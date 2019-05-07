(function() {
    var bodyList = []

    function Snake(map, options) {
        options = options || {};
        // 蛇每一节的宽度
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.direction = 'right';
        this.map = map;
        // console.log(map);

        this.body = [
            { x: 4, y: 2, color: 'red' },
            { x: 3, y: 2, color: 'blue' },
            { x: 2, y: 2, color: 'blue' }
        ]
    }

    Snake.prototype.render = function() {
        // 删除旧的蛇
        for (var i = bodyList.length - 1; i >= 0; i--) {
            this.map.removeChild(bodyList[i]);
            bodyList.splice(i, 1);
        }

        // 渲染新的蛇
        for (var i = 0, len = this.body.length; i < len; i++) {
            var div = document.createElement('div');
            bodyList.push(div)

            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.position = 'absolute';
            div.style.backgroundColor = this.body[i].color;

            div.style.left = this.body[i].x * this.width + 'px';
            div.style.top = this.body[i].y * this.height + 'px';
            // console.log(this.map);

            this.map.appendChild(div);
        }
    }

    Snake.prototype.move = function(food) {
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        switch (this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
        }

        var foodX = food.left,
            foodY = food.top,
            headX = this.body[0].x * this.width,
            headY = this.body[0].y * this.height;

        if (foodX === headX && foodY === headY) {
            food.render();
            // 值类型(简单类型) 引用类型(复杂数据类型  arr obj)   的  区别
            this.body.push({
                x: this.body[this.body.length - 1].x,
                y: this.body[this.body.length - 1].y,
                color: 'blue'
            })
        }
    }

    window.Snake = Snake;
})()