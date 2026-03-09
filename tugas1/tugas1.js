$(document).ready(function(){
            $(".sembunyi").hide();

            $("#login").click(function(a){
                a.preventDefault();

                $(".sembunyi").hide();

                var user = $("#user").val();
                var pass = $("#pw").val();

                if(user === "admin" && pass === "admin123"){
                    alert("Login berhasil");
                    window.location.href="dashboard.html";
                } else {
                    if(user !== "admin"){
                        $("#user-error").show();
                    }
                    if(pass !== "admin123"){
                        $("#pw-error").show();
                    }
                }
            });
        });