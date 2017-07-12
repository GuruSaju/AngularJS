var app =angular.module("calModule",[]);
app.controller("Calculate",Calculate);

function Calculate(){
   

    this.process = function(){
        console.log("button clicked");
        var n1= parseFloat(this.num1);
        var n2= parseFloat(this.num2);
        if(this.selectedOp === "+"){
            this.output=n1 + n2;
        }
        else if(this.selectedOp === "-"){
            this.output=n1 - n2;
        }
        else if(this.selectedOp === "*"){
            this.output=n1 * n2;
        }
        else if(this.selectedOp === "/"){
            this.output=n1 / n2;
        }

    }
    this.buttonClicked = function(op){
        this.selectedOp=op;
    }
}