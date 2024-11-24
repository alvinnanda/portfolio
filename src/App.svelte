<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Header from './components/Header.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Skills from './components/Skills.svelte';
  import Projects from './components/Projects.svelte';
  import Experience from './components/Experience.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  let loaded = false;
  onMount(() => {
    loaded = true;
  });
</script>

<main class="font-sans bg-white min-h-screen">
  <Header />
  {#if loaded}
    <div in:fade="{{ duration: 1000 }}">
      <AboutMe />
      <div class="container mx-auto px-4 py-12">
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  {/if}
  <Footer />
</main>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  :root {
    --primary-color: #db2777;
    --secondary-color: #1f2937;
    --accent-color: #9d174d;
  }

  :global(body) {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  :global(.section-title::after) {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 1rem auto 0;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

