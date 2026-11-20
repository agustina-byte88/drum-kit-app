// Find every drum button on the page
const drumButtons = document.querySelectorAll(".drum");

// Go through each drum button one by one
drumButtons.forEach(function (button) {

    // When this button is clicked, play its sound
    button.addEventListener("click", function () {

        // Read which sound this button uses (for example "kick")
        const soundName = button.dataset.sound;

        // Play that sound
        playSound(soundName);
    });
});

// This function plays a sound and briefly shows the button as "pressed"
function playSound(soundName) {

    // Find the audio element whose id matches the sound name
    const audio = document.getElementById(soundName);

    // Rewind the sound to the start so fast clicks replay it every time
    audio.currentTime = 0;

    // Play the sound
    audio.play();

    // Find the button that belongs to this sound
    const button = document.querySelector('.drum[data-sound="' + soundName + '"]');

    // Add the "playing" style so the button looks pressed
    button.classList.add("playing");

    // Remove the "playing" style after 120 milliseconds
    setTimeout(function () {

        // Take the pressed look away again
        button.classList.remove("playing");
    }, 120);
}
