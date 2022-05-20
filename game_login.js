function addUser()
{
    player_1_name = document.getElementById("player1_name_input").value;
    player_2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player-1-name",player_1_name);
    localStorage.setItem("player-2-name",player_2_name);

    window.location.replace("game_page.html");
}