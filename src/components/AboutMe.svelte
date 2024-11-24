<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    let visible = false;
    let y = 0;
    // Start from next section position (100vh)
    let sectionStyle = 'transform: translateY(100vh); transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);';

    // Handle scroll event
    function handleScroll() {
        y = window.scrollY;
        const translateY = Math.min(y * 0.2, 100); // Limit the movement
        sectionStyle = `transform: translateY(-${translateY}px); transition: transform 0.1s ease-out;`;
    }

    function scrollToNextSection() {
        const nextSection = document.querySelector('#skills');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
  
    onMount(() => {
        visible = true;
        // const aboutSection = document.getElementById('about');
        // window.addEventListener('scroll', handleScroll);
        
        // Simulate scroll up from next section
        setTimeout(() => {
            sectionStyle = 'transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);';
        }, 10);

        // setTimeout(() => {
        //         if (!isElementInViewport(aboutSection)) return; // Double check we're still in view
                
        //         window.scrollTo({ 
        //             top: window.innerHeight * 0.1, 
        //             behavior: 'smooth' 
        //         });
                
        //         setTimeout(() => {
        //             if (!isElementInViewport(aboutSection)) return;
                    
        //             setTimeout(() => {
        //                 if (!isElementInViewport(aboutSection)) return;
        //                 aboutSection.scrollIntoView({ 
        //                     behavior: 'smooth',
        //                 });
        //             }, 800);
        //         }, 600);
        //     }, 10000);
        return () => {
            // window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<section 
    id="about" 
    class="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
    
    {#if visible}
        <div class="container mx-auto px-6 py-12" 
        style={sectionStyle}>
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div class="lg:w-1/2 space-y-8" in:fly="{{ x: -50, duration: 1000 }}">
                    <h1 class="text-5xl lg:text-6xl font-bold text-gray-800">
                        Hi, I'm <span class="text-pink-600">Alvinnanda</span>
                    </h1>
                    <p class="text-xl text-gray-600 leading-relaxed">
                        Passionate software engineer specializing in full-stack development, 
                        creating innovative solutions through elegant code.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        {#each ['Full-stack Development', 'Mobile App Development', 'API Integration'] as skill, i}
                            <div in:fly="{{ y: 20, duration: 500, delay: 300 + i * 100 }}" 
                                 class="px-4 py-2 rounded-full bg-white border border-gray-200 
                                        shadow-sm hover:shadow-md transition-all duration-300">
                                <span class="text-gray-700">{skill}</span>
                            </div>
                        {/each}
                    </div>
                </div>

                <div class="lg:w-1/2 flex justify-center" in:fly="{{ x: 50, duration: 1000 }}">
                    <div class="relative">
                        <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-2xl opacity-30"></div>
                        <div class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img src="/alvinnanda.jpg?height=400&width=400" 
                                 alt="Alvinnanda Dary" 
                                 class="object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modified scroll indicator -->
        <button 
            class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer
                   hover:opacity-100 focus:outline-none transition-opacity duration-300"
            on:click={scrollToNextSection}
            in:fade="{{ duration: 1000, delay: 2000 }}"
            aria-label="Scroll to next section">
            <div class="flex flex-col items-center gap-2 hover:text-blue-500">
                <svg class="w-8 h-8 text-gray-400 animate-bounce transition-colors duration-300" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3">
                    </path>
                </svg>
            </div>
        </button>
    {/if}
</section>

<style>
    .bg-grid-pattern {
        background-image: radial-gradient(rgb(0 0 0 / 0.1) 1px, transparent 1px);
        background-size: 24px 24px;
    }

    /* Add new animations */
    @keyframes bounce-soft {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .scroll-indicator {
        animation: fade-in-out 2s infinite ease-in-out;
        transition: transform 0.3s ease;
    }

    .scroll-indicator:hover {
        transform: translate(-50%, -5px);
    }

    @keyframes fade-in-out {
        0%, 100% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
    }

    /* Add smooth transition for transform */
    section {
        will-change: transform, opacity;
        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Add smooth transition for content */
    .container {
        will-change: transform, opacity;
    }
</style>


