// Select all buttons
const buttons = document.querySelectorAll("button");

// Select the message area
const messageArea = document.getElementById("message-area");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Clear the existing content in the message area
    messageArea.innerHTML = "";

    // Declare the messageText variable
    let messageText = ""; // Initialize with a default empty string

    // The text to display based on the button's class
    if (button.classList.contains("faq1")) {
      messageText =
        "DataQuest is a week-long hackathon where students apply technical skills to solve real-world, data-centric challenges using tools like Excel or Python. The event includes workshops and talks from industry professionals, a case competition with presentations, and networking opportunities through booths and coffee chats with company representatives. It’s an exciting platform for exploring data science, connecting with industry leaders, and building innovative solutions.";
    } else if (button.classList.contains("faq2")) {
      messageText =
        "The event is open to students from all across North America, regardless of experience level.";
    } else if (button.classList.contains("faq3")) {
      messageText =
        "No, you don’t! Teams can be formed during the event (teams of 4 are recommended), and prior experience isn’t required. This is an excellent opportunity to learn, collaborate, and grow alongside others! ";
    } else if (button.classList.contains("faq4")) {
      messageText =
        "Attendees will have access to keynote speakers, workshops, fireside chats, networking booths, coffee chats, and, of course, a week-long hackathon focused on technology!";
    } else if (button.classList.contains("faq5")) {
      messageText =
        "DataQuest will take place at the University of Western Ontario campus. The event will combine online and in-person activities. Day 0 (lead-up) and Day 4 (judging and closing ceremony) will be online, while Days 1–3 will be held in person at Western University, featuring workshops, networking booths, and the project showcase.";
    }

    // Create a new paragraph element
    const newMessage = document.createElement("p");
    newMessage.style.color = "white"; // Optional styling
    newMessage.style.fontFamily = "Montserrat";
    newMessage.style.fontWeight = "300";

    // Append the empty paragraph to the message area
    messageArea.appendChild(newMessage);

    // Initialize typewriter variables
    let index = 0;

    // Typewriter effect function
    function typeWriter() {
      if (index < messageText.length) {
        newMessage.textContent += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 30); // Adjust typing speed (in milliseconds)
      }
    }

    // Start the typewriter effect
    typeWriter();
  });
});
