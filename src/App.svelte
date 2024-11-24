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

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  .section-title {
    @apply text-4xl font-bold mb-8 text-center;
    position: relative;
    padding-bottom: 15px;
    color: var(--secondary-color);
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }

  .card {
    @apply bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .btn {
    @apply font-bold py-2 px-4 rounded transition duration-300 ease-in-out;
  }

  .btn-primary {
    @apply bg-primary text-white;  /* Changed from bg-primary-color */
  }

  .btn-primary:hover {
    @apply bg-pink-700;
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

  .fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
</style>

