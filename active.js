var home = document.getElementById("home");
        var profile = document.getElementById("profile");
        var testimonials = document.getElementById("testimonials");
        var about = document.getElementById("about");
        var homebtn = document.getElementById("homebtn");
        var profilebtn = document.getElementById("profilebtn");
        var testimonialsbtn = document.getElementById("testimonialsbtn");
        var aboutbtn = document.getElementById("aboutbtn");

        function openHome() {
          home.style.transform = "translateX(0)";
          profile.style.transform = "translateX(100%)";
          testimonials.style.transform = "translateX(100%)";
          about.style.transform = "translateX(100%)";

          homebtn.style.color = "#0e8a1e";
          profilebtn.style.color = "#000";
          testimonialsbtn.style.color = "#000";
          aboutbtn.style.color = "#000";

          home.style.transitionDelay = "0.2s";
          profile.style.transitionDelay = "0s";
          testimonials.style.transitionDelay = "0s";
          about.style.transitionDelay = "0s";


        }

        function openProfile() {
          home.style.transform = "translateX(100%)";
          profile.style.transform = "translateX(0)";
          testimonials.style.transform = "translateX(100%)";
          about.style.transform = "translateX(100%)";

          homebtn.style.color = "#000";
          profilebtn.style.color = "#0e8a1e";
          testimonialsbtn.style.color = "#000";
          aboutbtn.style.color = "#000";

          home.style.transitionDelay = "0s";
          profile.style.transitionDelay = "0.2s";
          testimonials.style.transitionDelay = "0s";
          about.style.transitionDelay = "0s";

        }

        function openTestimonials() {
          home.style.transform = "translateX(100%)";
          profile.style.transform = "translateX(100%)";
          testimonials.style.transform = "translateX(0)";
          about.style.transform = "translateX(100%)";

          homebtn.style.color = "#000";
          profilebtn.style.color = "#000";
          testimonialsbtn.style.color = "#0e8a1e";
          aboutbtn.style.color = "#000";

          home.style.transitionDelay = "0s";
          profile.style.transitionDelay = "0s";
          testimonials.style.transitionDelay = "0.2s";
          about.style.transitionDelay = "0s";
        }

        function openAbout() {
          home.style.transform = "translateX(100%)";
          profile.style.transform = "translateX(100%)";
          testimonials.style.transform = "translateX(100%)";
          about.style.transform = "translateX(0)";

          homebtn.style.color = "#000";
          profilebtn.style.color = "#000";
          testimonialsbtn.style.color = "#000";
          aboutbtn.style.color = "#0e8a1e";

          home.style.transitionDelay = "0s";
          profile.style.transitionDelay = "0s";
          testimonials.style.transitionDelay = "0s";
          about.style.transitionDelay = "0.2s";
        }