


/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

<script>
      // Get the img object using its Id
      img = document.getElementById("img1");
      // Function to increase image size
      function enlargeImg() {
          // Set image size to 1.5 times original
          img.style.transform = "scale(1.5)";
          // Animation effect
          img.style.transition = "transform 0.25s ease";
      }
      // Function to reset image size
      function resetImg() {
          // Set image size to original
          img.style.transform = "scale(1)";
          img.style.transition = "transform 0.25s ease";
      }
  </script>
