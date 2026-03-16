$(document).ready(function(){
    $(".hasil").hide();

    $("#hitung").click(function(e){
        e.preventDefault();

        let barang = $("#barang").val();
        let tanggal = $("#tanggal").val();
        let harga = parseInt($("#harga").val()) ||0 ;
        let jumlah = parseInt($("#jumlah").val()) || 0;
        let ppn = parseInt($("#ppn").val())|| 0;
        let pph = parseInt($("#pph").val()) || 0;
        
        if(barang === ""){
            alert("Nama barang harus diisi!");
            return;
        }
        if(tanggal === ""){
            alert("Tanggal wajib diisi!");
            return;
        }
        if(jumlah < 1){
            alert("Jumlah barang minimal 1!");
            return;
        }
        if(harga === 0){
            alert("harga tidak boleh kosong");
            return;
        }

        let subtotal = (harga*jumlah);

        $("#hasil-subtotal").text(subtotal); 

        let nilaipph = Math.ceil(subtotal*(pph/100));
        
        $("#nilai-pph").text(nilaipph);

        let totalsebelumppn = subtotal-nilaipph

        let nilaippn = 0;
        if(totalsebelumppn > 5000000){
            nilaippn = Math.ceil(subtotal * (ppn/100));
        }else{
            alert("PPn tidak dihitung karena nilai bayar tidak terpenuhi");
        }
        
        $("#nilai-ppn").text(nilaippn);

        let totalbayar = (subtotal - nilaipph)+nilaippn;

        $("#total-bayar").text(totalbayar);

        $(".hasil").show();

    });

    $(("#reset")).click(function(){
        $(".hasil").hide();
    });
});