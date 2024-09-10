let img = document.querySelectorAll('.imglist-item img');
let imgshow = document.querySelector('.product-info_imgbig img');

// slide detail
    img.forEach((e)=>{
       
        e.addEventListener('click',()=>{
            imgshow.src = e.src;
            if(imgshow.src === e.src)
            {
                e.parentNode.classList.add("active");
            }
            //kiểm tra và xóa class active trong dom
            img.forEach((handle) =>{
                if(imgshow.src !== handle.src)
                    {
                        //console.log(1)
                        handle.parentNode.classList.remove("active");
                    }
            })
          
        });
    })

    $(document).ready(function(){
        $('#toggle').click(function() {
            $('#nav').slideToggle();
        });
        // Hiển thị form đăng nhập
        $(".login-btn").click(function(){
            $(".modal").toggle("fast","linear",function(){
                $(".modal").show();
            });
        });
        //đóng form đăng nhập
        $(".close").click(function(){
            $(".modal").toggle("fast","linear",function(){
                $(".modal").hide();
            });
        });
        // $(".detail_product").on("click",(e) => {
        //     console.log(e.target.offsetParent.dataset);
        //     show_product(e);    
        // })
        //hiển thị sản phẩm theo id
        // function show_product(e){
        //     data = e.target.offsetParent.dataset;
        //     // console.log($data['id']);
            
           
        //         $.ajax({
        //             method:"POST",
        //             url:data.route,
        //             data:{
        //                 data:data
        //             },
        //             headers: {
        //                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //            },
        //         }).done((e)=>{
        //             console.log(e)
        //             location.href = 
        //         })
            
        // }
        //end xử lý thay đổi tình trạng sản phẩm
    });

 

