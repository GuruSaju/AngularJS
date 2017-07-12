app.controller("page3Controller",function($scope){
	$scope.tableData=[{sNo:1,data:'Page 3'},{sNo:2,data:'Page 3'},{sNo:3,data:'Page 3'},{sNo:4,data:'Page 3'},{sNo:5,data:'Page 3'}]
	
});
app.directive("tableGrid",function(){
		return{
				template:'<table><tr><th>SL.NO</th><th>Data</th></tr><tr ng-repeat="val in tableData"><td>{{val.sNo}}</td><td>{{val.data}}</td></tr></table>'
		}
})