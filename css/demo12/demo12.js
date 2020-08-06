$(document).ready(function(){
    $("#click").click(function(){
      $(".left p").toggle();
      $(".list button").toggle();
      $(".list_seach").toggle();
      $("nav").toggleClass("reduction");
      $(".left").toggleClass("c");
    });
  });
$(document).ready(function(){
    $("#txt").keyup(function(){
        var text=$("#txt").val();
        text=text.toUpperCase();
        var menu=$(".list .left p");
        var list=$(".list");
        console.log(menu);
        
        for(var i=0;i<menu.length;i++){
            var a=$(menu[i]).text();
            a=a.toUpperCase();
            if(a.indexOf(text)!=-1){
                $(list[i]).show();
            }
            else{
                $(list[i]).hide();
            }
            
        }
        
    });
});
$(document).ready(function(){
    $(".list").click(function(){
        var list=$(this).find('p').text();
        $('#more').html(list);

        $('main .show_hide').hide();        
        var a="";
        a='#'+list;
        $("main "+a+"").show();


    });

});
$(document).ready(function () {
    $("#Foods").kendoGrid({
        dataSource: {
                    transport: {
                        read:"products.json"
                            
                    },
                    pageSize: 4

                },
                
                pageable: true,
                columns: [{
                    field: "name",
                    title: "Contact Name",
                    width: "20%"
                }, {
                    field: "type",
                    title: "Contact Title",
                    width: "20%"
                }, {
                    template: "<img src = images/#:data.image# style='height: 40%'>",
                    field: "image",
                    title: "Image",
                    width: "20%"
                }, {
                    template: "<p>$#:data.price#</p>",
                    field: "price",
                    width: "20%"
                },{
                    command: ["edit", "destroy"],
                    title: "&nbsp;",
                    width: "20%"
                }
            ],
                editable: "popup"
            });
});