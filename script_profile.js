$(document).ready(function() {

    
    var readURL_1 = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic_1').attr('src', e.target.result);
                bannerImage = document.getElementById('pic1');
                localStorage.setItem("pic1", bannerImage.src);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload_1").on('change', function(){
        readURL_1(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload_1").click();
    });


    var readURL_2 = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic_2').attr('src', e.target.result);
                bannerImage_2 = document.getElementById('pic2');
                console.log(bannerImage_2.src);
                localStorage.setItem("pic2", bannerImage_2.src);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload_2").on('change', function(){
        readURL_2(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload_2").click();
    });



    var readURL_3 = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic_3').attr('src', e.target.result);
                bannerImage = document.getElementById('pic3');
                localStorage.setItem("pic3", bannerImage.src);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload_3").on('change', function(){
        readURL_3(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload_3").click();
    });




    var readURL_4 = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic_4').attr('src', e.target.result);
                bannerImage = document.getElementById('pic4');
                localStorage.setItem("pic4", bannerImage.src);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload_4").on('change', function(){
        readURL_4(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload_4").click();
    });

});