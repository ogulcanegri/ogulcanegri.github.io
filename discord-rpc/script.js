setInterval(() => {
    fetch("https://api.lanyard.rest/v1/users/1174607470321225738")
      .then((response) => response.json())
      .then((data) => {
       
        var text = document.querySelector(".text");
        var username = data["data"]["discord_user"]["username"];
        text.innerHTML = username;
        var avatar = document.querySelector(".avatar");
        var imageUrl = data["data"]["discord_user"]["avatar"];
        avatar.src = `https://cdn.discordapp.com/avatars/${data["data"]["discord_user"]["id"]}/${imageUrl}.png`;
        var active_on_desktop = data["data"]["active_on_discord_desktop"];
        var active_on_mobile = data["data"]["active_on_discord_mobile"];
        var active_on_web = data["data"]["active_on_discord_web"];
        var circle = document.querySelector(".circle");
        var text = document.querySelector(".status");
        if (active_on_desktop || active_on_mobile || active_on_web) {
          circle.style.backgroundColor = "green";
        } else {
          circle.style.backgroundColor = "gray";
        }
      });
  }, 500);