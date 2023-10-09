<footer class="bg-zinc-200 text-black ">
  <div class="container mx-auto flex justify-between items-start  flex-col lg:flex-row lg:items-center">
    <!-- Legal Column -->
    <div class="text-lg lg:text-base bg-red-50   ">
      <h3 class="text-xl font-semibold mb-2">Legal</h3>
      <ul class="list-none">
        <li><a href="#" class="hover:underline">Terms of Service</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        <li><a href="#" class="hover:underline">Cookie Policy</a></li>
      </ul>
    </div>

    <!-- Contact Info Column -->
    <div class="text-lg lg:text-base mt-4 lg:mt-0 ">
      <h3 class="text-xl font-semibold mb-2">Contact Info</h3>
      <address>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </address>
    </div>

    <!-- Nav Links Column -->
    <div class="text-lg lg:text-base mt-4 lg:mt-0">
      <h3 class="text-xl font-semibold mb-2">Nav Links</h3>
      <ul class="list-none">
      
        <li><a href="/about" class="hover:underline">About</a></li>
        <li><a href="/contact" class="hover:underline">Contact</a></li>
      </ul>
    </div>
  </div>

  <!-- Made by Tung Le Section -->
  <section class="bg-zinc-900 text-center py-2">
    <p class="text-lg text-white">Made by Tung Le</p>
  </section>
</footer>



<style lang="scss">
 
  /* Style your navbar as needed */
 a {
  position: relative;
  transition: transform 0.3s;
  text-decoration: none;
  font-weight: 600;


  &:hover {
    transform: scaleX(1);
     text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: orange;
    transform-origin: 0 100%;
    transform: scaleX(0);
    transition: transform 0.3s, width 0.3s;
    
  }

  &:hover::after {
    transform: scaleX(1);
    width: 100%;
  }
}


.icon-img-1 {
  width: 60px;
  transition: opacity 0.3s ease-in-out; /* Define the transition property */
}
.icon-img-2 {
 

   opacity: 0;
   width: 0;
}
.icon-container:hover .icon-img-1 {
  opacity: 0; 
  width: 0;
}

.icon-container:hover .icon-img-2 {
  opacity: 1; width: 60px; 
}
</style>
