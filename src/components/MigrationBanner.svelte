<script>
  import { onMount } from 'svelte';
  
  let showBanner = true;
  
  // Hide banner when clicking the close button
  function closeBanner() {
    showBanner = false;
    // Store in localStorage to prevent showing again
    if (typeof window !== 'undefined') {
      localStorage.setItem('hideMigrationBanner', 'true');
    }
  }
  
  onMount(() => {
    // Check if user has previously closed the banner
    if (typeof window !== 'undefined' && localStorage.getItem('hideMigrationBanner') === 'true') {
      showBanner = false;
    }
  });
</script>

{#if showBanner}
  <div class="bg-blue-600 text-white text-center py-2 px-4 relative">
    <div class="container mx-auto flex items-center justify-center">
      <span class="mr-2">🚀 I've moved from Vercel to <a href="https://alvinnanda.onrender.com/" class="font-semibold underline hover:no-underline" target="_blank" rel="noopener noreferrer">Render</a> for hosting my portfolio. Check out the <a href="https://alvinnanda.onrender.com/" class="font-semibold underline hover:no-underline" target="_blank" rel="noopener noreferrer">new site!</a></span>
      <button 
        on:click={closeBanner}
        class="ml-2 text-white hover:text-gray-200 focus:outline-none"
        aria-label="Close migration banner"
      >
        &times;
      </button>
    </div>
  </div>
{/if}
