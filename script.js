<script>
  document.querySelector('.appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your appointment has been scheduled! We'll contact you soon.");
    this.reset();
  });
</script>
