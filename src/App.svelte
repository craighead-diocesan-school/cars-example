<script>
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'

  import { getCars } from './db.js'

  let cars = getCars()
</script>

<Header />

<main class="content section">
  <h2> Check out our cars! </h2>

  {#await cars}
    <p>Loading...</p>
  {:then cars}
    {#each cars as car}
      <article class="box">
        <b>{car.Make}</b>
        {car.Model}
        {car.Rego}
      </article>
    {/each}
  {/await}

</main>

<Footer />
