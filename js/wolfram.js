//you need to paste your APPid in wolfram_process.php file.
function wolfram_fetch(input){
        $("#wolfram_question").text('');
        $("#wolfram_answer").text('');
        clear();
        show("wolfram");
        // making an ajax call to wolfram_process.php
        //wolfram_process.php is used to make a request to the wolfram api.
        /*PHP is used to make a request to the wolfram API because wolfram was only allowing me to make a call from a server. There can be many solutions to this
          this problem but I found this easiest.*/
        $.ajax({
          type:"GET",
          url:"php/wolfram_process.php",
          data:{question:input},
          success:function(text){
            magic_chime();
            $("#wolfram_question").append("Q : "+input);
            $("#wolfram_answer").append("A : "+text);
          }
        });
          // makes the answer dissapears after 15 seconds
        var timeout=  setTimeout(function(){
            home();
          }, 15000);
}
