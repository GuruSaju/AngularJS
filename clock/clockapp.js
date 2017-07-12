var app =angular.module("clockModule",[]);
app.controller("CurrentTime",FTime);

function FTime(){
    var date = new Date();
    this.currentTime=date.toTimeString();

    this.updateTime = function(){
        console.log("button clicked");
        var date = new Date();
        this.currentTime=date.toTimeString();
    }
}