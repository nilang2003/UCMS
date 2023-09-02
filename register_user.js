document.addEventListener("DOMContentLoaded", () => {
  registrationForm.addEventListener("submit", async (event) => {
    const registrationForm = document.getElementById("registrationForm");
    const formData = new FormData();

    // const uname = document.getElementById("username").value;
    // const email = document.getElementById("email").value;
    // formData.append("username", uname);
    // formData.append("email", email);
    console.log(formData.entries());
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/register/registeration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data); // You can handle the response data here

      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error("Error:", error);
      // Display an error message to the user
    }
  });
});

function institute_change(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";

  var optionArray;

  if (s1.value === "CSPIT") {
    optionArray = [
      "|",
      "ce|CE",
      "cse|CSE",
      "it|IT",
      "ai/ml|AI/ML",
      "mechanical|MECHANICAL",
      "civil|CIVIL",
    ];
  } else if (s1.value === "DEPSTAR") {
    optionArray = ["|", "ce|CE", "cse|CSE", "it|IT"];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

function enable_disable() {
  var selectedOption = document.querySelector(".select_user_input").value;

  if (
    selectedOption === "faculty" ||
    selectedOption === "Core-member" ||
    selectedOption === "User"
  ) {
    document.getElementById("club_name").style.display = "none";
    document.getElementById("club_logo_input").style.display = "none";
    document.getElementById("club_description").style.display = "none";
  } else {
    document.getElementById("club_name").style.display = "block";
    document.getElementById("club_logo_input").style.display = "block";
    document.getElementById("club_description").style.display = "block";
  }

  if (selectedOption === "Core-member" || selectedOption === "Admin") {
    document.getElementById("faculty_id").style.display = "block";
  } else {
    document.getElementById("faculty_id").style.display = "none";
  }
}
