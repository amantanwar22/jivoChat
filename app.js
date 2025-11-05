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
        let randomIndex = Math.floor(Math.random() * responses.length);
        let reply = responses[randomIndex];

        $("#chatMessages").append(`<div class="agent message">${reply}</div>`);
        $("#chatMessages").scrollTop($("#chatMessages")[0].scrollHeight);//this 0 gives the first real dom not the object
}, 1000);

      }

    
      $("#sendBtn").click(sendMessage);

      
      $("#chatInput").keypress(function(e) {
        if (e.which === 13) sendMessage();
      });
    });