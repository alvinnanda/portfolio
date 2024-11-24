<script>
  const skillCategories = [
    {
      name: "Frontend",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Svelte", "Vue.js"]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [ "PHP", "Laravel", "CodeIgniter", "Node.js", "Nest", "Rust", "Python"]
    },
    {
      name: "Mobile",
      icon: "📱",
      skills: ["Ionic", "Flutter", "Kotlin"]
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"]
    },
    {
      name: "Tools",
      icon: "🛠️",
      skills: ["VSCode", "Figma", "Postman", "Jira", "GitHub"]
    }
  ];
</script>

<section id="skills" class="py-24">
  <h2 class="section-title text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
    Skills & Technologies
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each skillCategories as category}
      <div class="card backdrop-blur-sm bg-white/10 p-8 hover:transform hover:scale-105 
                  hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div class="flex items-center mb-6">
          <span class="text-5xl mr-4">{category.icon}</span>
          <h3 class="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 
                     bg-clip-text text-transparent">{category.name}</h3>
        </div>
        <div class="flex flex-wrap gap-3">
          {#each category.skills as skill}
            <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 
                       text-gray-700 rounded-lg text-sm font-medium border border-gray-200
                       hover:from-blue-100 hover:to-purple-100 hover:shadow-md 
                       transition-all duration-200 cursor-default">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>


