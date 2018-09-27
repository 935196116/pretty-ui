(function () {
    window.TaskQuery = function () {
        var _ready = function () { }
        var taskCx = 0
        var taskQuery = []
        var params = []
        this.create = function () {
            return this
        }
        this.push = function (task) {
            taskQuery.push(task)
        }
        this.run = function () {
            taskCx = 0
            for (var i = 0; i < taskQuery.length; i++) {
                params.push(null)
            }
            this.do()
            return this
        }
        this.do = function () {
            var i = taskCx
            var that = this
            if (i < taskQuery.length && i >= 0) {
                taskQuery[i].next(function (param) {
                    params[i] = param
                    taskCx++
                    that.do()
                })
            }
            else {
                _ready(params)
            }
        }
        this.ready = function (doFunc) {
            _ready = doFunc || function () { }
        }
    }

    window.TaskHandel = {
        create: function (doFunc) {
            return new function () {
                this.ready = function (params) {
                    var params = params || null
                    doFunc(params)
                    return this
                }
            }
        },
    }

    window.Task = function () {
        this.create = function (doFunc) {

            this._task = doFunc || function () { }

            return this
        }
        this.next = function (doFunc) {
            this._next = doFunc || function () { }
            this._task(TaskHandel.create(this._next))
        }
        this._next = function () { }
        this._task = function () { }
    }
})()