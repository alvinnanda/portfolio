<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "bosCOD.com",
      period: "2021 - Present",
      description: "At Boscod, I ensured smooth integration with various courier APIs, enabling real-time tracking and automatic status updates for deliveries. I developed an intuitive and optimized Android application tailored to the needs of a large user base, while also selecting and testing software tools to ensure development efficiency and quality. Additionally, I integrated and managed PPOB systems for seamless payment processing, resolved technical issues during API integration and application development, and actively collaborated with cross-functional teams to analyze user needs, design technical solutions, and ensure the application's usability. I also utilized Agile/Scrum methodologies and tools like Jira to manage project workflows effectively and maintain development efficiency.",
      technologies: ["Ionic", "React", "Vue.js",  "Firebase", "CodeIgniter", "Laravel", "PostgreSQL", "Redis"]
    },{
      id: 2,
      role: "Training Program",
      company: "DTS Kominfo - Intro to Full Stack Developer",
      period: "Mei 2021 - Jul 2021",
      description: "I completed a training program in Full Stack Development, covering web technologies such as HTML & CSS, JavaScript, SQL, Node.js, and Python, gaining a solid foundation in building web applications.",
      technologies: ["Hr", "CSS", "JavaScript", "SQL", "Node.js", "Python"]
    },{
      id: 3,
      role: "Internship",
      company: "PT. Kereta Api Indonesia (Persero) Upt. Pengusahaan Aset Madura",
      period: "Apr 2019 - Mei 2019",
      description: "Developed an Android application for internal company asset management in the Madura region.",
      technologies: ["Android Studio", "Java", "Firebase"]
    }
  ];

  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        visible = true;
      }
    });

    observer.observe(document.querySelector('#experience'));
  });
</script>

<section id="experience" class="py-16 px-4 md:py-24">
  <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
  {#if visible}
    <div class="relative">
      <!-- Timeline line only for desktop -->
      <div class="hidden md:block absolute md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
      
      <div class="space-y-8 md:space-y-12">
        {#each experiences as exp, i}
          <div in:fly="{{ y: 50, duration: 500, delay: i * 200 }}" class="relative flex items-start md:items-center">
            <!-- Timeline dot only for desktop -->
            <div class="hidden md:block absolute md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10"></div>
            
            <div class="w-full md:w-[45%] {i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}">
              <div class="card p-4 md:p-8 hover:transform hover:scale-105 transition-all duration-300">
                <h3 class="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {exp.role}
                </h3>
                <p class="text-lg md:text-xl font-semibold mb-1 text-gray-700">{exp.company}</p>
                <p class="text-gray-500 text-xs md:text-sm mb-3 md:mb-4">{exp.period}</p>
                <p class="text-gray-700 text-sm md:text-base mb-4 md:mb-6">{exp.description}</p>
                <div class="flex flex-wrap gap-1.5 md:gap-2">
                  {#each exp.technologies as tech}
                    <span class="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-50 to-purple-50 
                               text-gray-700 rounded-lg text-xs md:text-sm font-medium border border-gray-200
                               hover:from-blue-100 hover:to-purple-100 transition-all duration-200">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style>
  .section-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: var(--secondary-color);
    margin: 1rem auto 0;
  }
</style>

