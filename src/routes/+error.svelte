<script>
  import { page } from "$app/stores";
 
</script>

<main class="flex flex-col items-center justify-center h-screen">
  <img
    src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=740&t=st=1697595133~exp=1697595733~hmac=7eadcd4520dab2bffad00cfc1ca708364744a5f87919b4afeeacb2bba153c1f8"
    alt=" error"
  />

  <img src="" alt="" />
  <h1>{$page.status}: {$page.error.message}</h1>
 
</main>
