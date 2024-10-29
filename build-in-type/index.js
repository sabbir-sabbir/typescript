var MyData;
(function (MyData) {
    MyData["TheData"] = "READ_DATQ";
    MyData["TheData2"] = "DELETE_DATQ";
})(MyData || (MyData = {}));
;
console.log(MyData.TheData);
