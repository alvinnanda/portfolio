<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  const projects = [
    {
      name: "bosCOD",
      description: "Boscod is a multi-platform application (Android, iOS, and WebApp) that provides delivery and payment services with integrated courier APIs and a PPOB system. It is designed to meet the needs of a large user base. The app enables real-time delivery tracking and efficient payment processing, supporting various courier services, including IDExpress, JNE, JNT, SiCepat, SAPExpress, Anteraja, and Ninja Xpress.",
      technologies: ["Ionic", "React", "Codeigniter", "Laravel", "Microservices"],
      image: "/presen_boscod.png?height=300&width=400",
      link: "https://boscod.com"
    },{
      name: "bosAgen",
      description: "Bosagen is an Android application similar to Boscod, but designed with agents as partners to facilitate delivery and payment services. It aims to address the needs of users who may not be able to place orders online, allowing agents to act as intermediaries. The application integrates courier APIs and a PPOB system, serving as a bridge between agents and customers.",
      technologies: ["Ionic", "React", "Codeigniter", "Laravel", "Microservices"],
      image: "/presen_bosagen.png?height=300&width=400",
      link: "https://play.google.com/store/apps/details?id=com.boscod.agen&hl=id&pli=1"
    },{
      name: "TakonAI",
      description: "TakonAI is an AI chat app that delivers intelligent, real-time conversations powered by OpenAI and Anthropic technologies. It offers personalized responses, adapting to user context, while ensuring a seamless experience with secure authentication and the ability to view chat history.",
      technologies: ["Next.js", "Nest.js", "OpenAI", "Anthropic"],
      image: "/presen_takonai.png?height=300&width=400",
      link: "https://takonai-zeta.vercel.app"
    },
    {
      name: "Online Attendance and Workload Analysis System",
      description: "Developed a web-based attendance system for DKP Kabupaten Bangkalan with GPS technology and workload analysis features.",
      technologies: ["Web", "GPS", "Google Maps API"],
      image: "/presen_dkp.png?height=300&width=400",
      link: "#"
    },
    {
      name: "Soybean Plant Pest Diagnosis System",
      description: "Created a web and Android application to help soybean farmers diagnose plant pests.",
      technologies: ["Web", "Android", "Machine Learning"],
      image: "/presen_sipakde.png?height=300&width=400",
      link: "#"
    },
    // {
    //   name: "Asset Management System for PT. Kereta Api Indonesia",
    //   description: "Developed an Android application for internal company asset management in the Madura region.",
    //   technologies: ["Android Studio", "Java", "Firebase"],
    //   image: "/placeholder.svg?height=300&width=400",
    //   link: "#"
    // }
  ];

  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        visible = true;
      }
    });

    observer.observe(document.querySelector('#projects'));
  });
</script>

<section id="projects" class="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
  <h2 class="section-title text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
    Projects
  </h2>
  {#if visible}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"> <!-- Changed to 2 columns -->
      {#each projects as project, i}
        <div in:fly="{{ y: 50, duration: 500, delay: i * 200 }}" 
             class="group backdrop-blur-sm bg-white/50 rounded-xl shadow-xl hover:shadow-2xl 
                    transform hover:-translate-y-2 transition-all duration-300">
          <div class="relative overflow-hidden rounded-t-xl">
            <img src={project.image} alt={project.name} 
                 class="w-full h-[300px] object-cover transform group-hover:scale-110 transition-all duration-700"> <!-- Height increased -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 
                        flex items-center justify-center">
              <a href={project.link} 
                 class="px-8 py-4 bg-white/95 text-gray-800 rounded-full font-medium 
                        hover:bg-pink-600 hover:text-white transition-all duration-300 
                        transform translate-y-8 group-hover:translate-y-0
                        hover:scale-110 backdrop-blur-sm shadow-lg text-lg"
                 target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       bg-clip-text text-transparent tracking-tight">
              {project.name}
            </h3>
            <div class="relative group/desc">
              <p class="text-gray-600 mb-6 h-[6em] group-hover/desc:h-auto overflow-hidden transition-all duration-500 ease-in-out">
                {project.description}
                <span class="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent 
                           group-hover/desc:opacity-0 transition-opacity duration-300"></span>
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 text-blue-500 opacity-50
                           group-hover/desc:opacity-0 transition-opacity duration-300">
                  <!-- <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg> -->
                </span>
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each project.technologies as tech}
                <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 
                           text-gray-600 rounded-full text-sm font-medium
                           border border-gray-100 hover:border-blue-200
                           hover:from-blue-100 hover:to-purple-100 
                           transition-all duration-200 cursor-default">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

