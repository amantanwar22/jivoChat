$(document).ready(function() {
      const responses = [
        "Sure, I can help with that!",
        "Could you tell me a bit more?",
        "Thanks for reaching out!",
        "I’ll check that for you."
      ];

      
      $("#chatButton").click(function() {
        $("#chatWindow").toggle();
      });

    
      function sendMessage() {
        const msg = $("#chatInput").val().trim();
        if (!msg) return;

        $("#chatMessages").append('<div class="user message">' + msg + '</div>');
        $("#chatInput").val('');

        setTimeout(function() {
  
  $("#chatMessages").append('<div class="agent message typing-indicator"><span></span><span></span><span></span></div>');
  $("#chatMessages").scrollTop($("#chatMessages")[0].scrollHeight);
  
  setTimeout(function() {
    
    $(".typing-indicator").remove();
    
   
    let randomIndex = Math.floor(Math.random() * responses.length);
    let reply = responses[randomIndex];
    $("#chatMessages").append(`<div class="agent message">${reply}</div>`);
    $("#chatMessages").scrollTop($("#chatMessages")[0].scrollHeight);
  }, 1500);
}, 1000);

      }

    
      $("#sendBtn").click(sendMessage);

      
      $("#chatInput").keypress(function(e) {
        if (e.which === 13) sendMessage();
      });
    });