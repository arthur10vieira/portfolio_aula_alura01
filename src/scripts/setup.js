$(function(){
    setup.instancia();
});


var setup = {
    instancia: function(){
        var that = this;
        that.eventos();
    },
    eventos: function() {
        $('body').on("dragstart", function(){
            return false;
        })
        $('body').on("contextmenu", function(){
            return false;
        })
        $('body').on("mousedown", function(){
            return false;
        })
    }
}