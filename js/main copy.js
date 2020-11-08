

$(document).ready(function () {
    //owl-crousel blog 
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: true
    });

    var result1;
    $.ajax(
        {
            url: "http://localhost:3000/posts",
            success: function (result) {
                result1 = result;
                console.log(result1);
            },
            error: function (err) {
                console.log(err);
            }
        })
    $('#searchtitle').keyup(() => {
        var input, filter, ul, li, a, i;
        input = $("#searchtitle");
        filter = input.val().toLowerCase();
        console.log(filter);
        document.getElementById('text').innerText="";
        for (i = 0; i < result1.length; i++) 
        {
            
            // debugger;
            if (input.val() != "")
             {
               
                txtValue = result1[i].title;
                
                if (txtValue.toLowerCase().indexOf(filter) > -1) 
                {

                   
                    console.log(result1[i].title);
                    let imge = document.createElement('a');
                    imge.href="#";
                    imge.innerHTML=result1[i].title;
                    let titleid= result1[i].id;
                    imge.id="anchor-Tag";

                    imge.onclick=(()=>{
                        // if () {
                            
                        // }
                        // running code used for 
                        $.ajax(
                            {
                                
                                // var titleid = result1[i].id;
                                url: "http://localhost:3000/posts/"+titleid,
                                success: function (result)
                                 {
                                    result1 = result;
                                    // console.log(result1);
                                   // $('.site-title').hide();
                                    // var poara = document.createElement('p');
                                    // poara.innerText = result1.Content;
                                    // $('newwindow').append(poara);
                                    // $("").load("http://localhost:3000/posts/"+titleid);
                                    localStorage.setItem("searchObj", JSON.stringify(result));
                                    if(sessionStorage.getItem('user')!=null)
                                    {
                                    window.open('demo.html');
                                    }
                                    else
                                    {
                                        alert("Please Login First !!!");
                                        window.open('index.html');
                                    }
                                },
                                error: function (err) {
                                    console.log(err);
                                }
                            })
                            
                        });

                        $('#text').append(imge);

                        
                    
                    }    

            }

        }
    });
});