<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let isMenuOpen = false;
  let y;
  let activeSection = '';
  let isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const toggleMenu = () => isMenuOpen = !isMenuOpen;

  const checkScreenSize = () => {
    if (typeof window !== 'undefined') {
      isMobile = window.innerWidth < 768;
    }
  };

  const checkActiveSection = () => {
    if (typeof window === 'undefined') return;
    
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection = section.id;
      }
    });
  };

  onMount(() => {
    checkScreenSize();
    checkActiveSection();
    
    // Tambahkan timeout untuk memastikan DOM sudah ter-render
    setTimeout(() => {
      checkActiveSection();
    }, 100);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', checkActiveSection);
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('scroll', checkActiveSection);
      window.removeEventListener('resize', checkScreenSize);
    };
  });

  $: isScrolled = y > 50;
  $: headerVisible = !(isMobile && activeSection === 'about');
</script>

<svelte:window bind:scrollY={y}/>

<header 
  class="fixed w-full z-50 transition-all duration-500 transform"
  class:bg-white={isScrolled} 
  class:shadow-md={isScrolled}
  class:translate-y-0={headerVisible}
  class:opacity-100={headerVisible}
  class:-translate-y-full={!headerVisible}
  class:opacity-0={!headerVisible}
>
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div in:fade="{{ duration: 1000, delay: 200 }}">
      <h1 class="text-2xl font-bold">Alvinnanda Dary</h1>
      <p class="text-sm text-secondary-color">Software Engineer</p>
    </div>
    <nav class="hidden md:block">
      <ul class="flex space-x-6">
        {#each ['About', 'Skills', 'Projects', 'Experience','contact'] as item, i}
          <li in:fly="{{ y: -20, duration: 500, delay: 300 + i * 100 }}">
            <a 
              href="#{item.toLowerCase()}" 
              class="text-secondary-color hover:text-primary-color transition duration-300 relative"
              class:active={activeSection === item.toLowerCase()}
            >
              {item}
              {#if activeSection === item.toLowerCase()}
                <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-color"></span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <button class="md:hidden text-secondary-color" on:click={toggleMenu}>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  {#if isMenuOpen}
    <nav class="md:hidden bg-white shadow-md mt-2" transition:fade="{{ duration: 300 }}">
      <ul class="py-2">
        {#each ['About', 'Skills', 'Projects', 'Experience', 'contact'] as item}
          <li>
            <a 
              href="#{item.toLowerCase()}" 
              class="block px-4 py-2 hover:bg-gray-100 text-secondary-color"
              class:active={activeSection === item.toLowerCase()}
              on:click={toggleMenu}
            >
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</header>

<style>
  header {
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .active {
    color: var(--primary-color);
  }
</style>

