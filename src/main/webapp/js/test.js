/**
 * Created by YoungMan on 2017/2/13.
 */
function test() {
    alert(test1());
}
function test1(){
    var date;
    $.ajax({
        url:"sys/menu/list",
        type:"POST",
        cache :"false",
        async:"false",
        success:function(data){
            date=data;
        }
    });
    return date;
}