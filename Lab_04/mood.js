let mood = prompt("Enter your mood (happy, sad, angry, tired):");

switch (mood) {
    case "happy":
        console.log("Great! Keep smiling 😊");
        break;

    case "sad":
        console.log("It's okay, things will get better.");
        break;

    case "angry":
        console.log("Take a deep breath and stay calm.");
        break;

    case "tired":
        console.log("Take some rest and relax.");
        break;

    default:
        console.log("Have a great day!");
}