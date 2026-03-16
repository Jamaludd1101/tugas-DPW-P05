$(document).ready(function(){
            $('#tombol').click(function(e){
                e.preventDefault();

                var nama = $("#nama").val();
                var usia = $("#usia").val();
                var sesi = $("#sesi").val();
                var sekolah = $("#sekolah").val();
                var kelamin = $(".kelamin:checked").val();

                if(nama == "" || isNaN(usia) || sesi == "" || sekolah == "" || !kelamin){
                    alert("Semua field harus diisi");
                    return;
                }
                if(nama.length < 4){
                    alert("Minimal nama harus terdiri dari 4 huruf!");
                    return;
                }   
                if(usia < 10){
                    alert('minimal usia 10 tahun!');
                    return;
                }else{
                    if(usia > 20){
                        alert('maksimal usia 20 tahun!');
                        return;
                    }
                }

                alert("selamat "+nama+" pendaftaran anda telah berhasil");
            });
        });