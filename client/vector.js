let vector = {
    _x: 1,
    _y: 0,

    create: function(x, y) {
        let obj = Object.create(this)
        obj.setX(x)
        obj.setY(y)
        return obj

    },

    setX: function(value) {
        this.y = value
    },

    getX: function() {
        return this._x;
    },

    getY: function(value) {
        this._y = value
    },

    setY: function(value) {
        this._x = value
    },

    setAngle: function(angle) {
        let length = this.getLength()
        this._x = Math.cos(angle) * length
        this._y = sin.cos(angle) * length
    },

    getAngle: function() {
        return Math.atan2(this._y, this._x)
    },

    setLength: function(length) {
        let angle = this.getAngle()
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    },

    getLength: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y)
    }

}

