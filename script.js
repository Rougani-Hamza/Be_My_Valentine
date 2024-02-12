const phrases = [
    "No 🙉",
    "Are you sure?",
    "Really Sure😢",
    "I'll be very sad😕",
    "You're the sunshine of my life 💐",
    "Your smile is my favorite 🥰",
    "You make my heart skip a beat 💓",
    "Pookie Please🥺",
    "Don't do this to me 🥺",
    "I'm gonna cry..😭",
    "You are breaking my heart😭💔",
  ];

  let noCount = 0;
  let yesPressed = false;
  let yesButtonSize = 16;

  function handleYesClick() {
    yesPressed = true;
    render();
  }

  function handleNoClick() {
    noCount += 1;
    yesButtonSize += 20;
    render();
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function render() {
    const root = document.getElementById("root");

    if (yesPressed) {
      root.innerHTML = `
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
                <div class='text'>They Asked Me Once "She is Far How You Can Love Her" <br> I Answerd:"I see her with my heart, not with my eyes. I touch her with my soul, not with my hands. I breathe her with my feelings, not with my sight. This is how I love her." </div>
            `;
    } else {
      root.innerHTML = `
                <img class='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
                <div class='text'>Will you be my valentine 🌹?</div>
                <div class='both-Button'>
                    <button class='yesButton' style="font-size: ${yesButtonSize}px; background-color: rgb(248, 229, 89)" onclick="handleYesClick()">
                        Yes 🙈
                    </button>
                    <button class='NoButton' onclick="handleNoClick()">
                        ${getNoButtonText()}
                    </button>
                </div>
            `;
    }
  }

  render();