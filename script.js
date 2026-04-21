<!doctype html>
<html lang="en" class="h-full">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IROS - Intelligent Resource Optimization System</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="/_sdk/element_sdk.js"></script>
  <script src="/_sdk/data_sdk.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=DM+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
  <style>
    * { font-family: 'DM Sans', sans-serif; }
    h1, h2, h3, .logo { font-family: 'Space Grotesk', sans-serif; }
    
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); } 50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); } }
    @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes slide-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    
    .float-animation { animation: float 3s ease-in-out infinite; }
    .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
    .slide-in { animation: slide-in 0.6s ease-out; }
    .fade-in { animation: fade-in 0.6s ease-out; }
    
    .gradient-bg { background: linear-gradient(-45deg, #0f0f23, #1a1a3e, #0d1b2a, #1b263b); background-size: 400% 400%; animation: gradient-shift 15s ease infinite; }
    .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .feature-card:hover { transform: translateY(-8px); border-color: rgba(99, 102, 241, 0.5); }
    .nav-link:hover { color: #818cf8; }
    .glow-text { text-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
    .grid-pattern { background-image: linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px); background-size: 50px 50px; }
    .modal-overlay { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(4px); }
    .toast-notification { animation: slide-in 0.3s ease-out; }
    
    input::-webkit-calendar-picker-indicator { filter: invert(1); }
    select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.7rem center; background-size: 1.2em auto; padding-right: 2.5rem; appearance: none; }
    
    body { box-sizing: border-box; }
  </style>
 </head>
 <body class="h-full gradient-bg text-white overflow-auto">
  <div class="h-full w-full grid-pattern"><!-- Authentication Page -->
   <div id="authPage" class="h-full w-full flex items-center justify-center px-4">
    <div class="w-full max-w-md"><!-- Sign Up Form (Default) -->
     <div id="signUpContainer" class="slide-in">
      <div class="text-center mb-8">
       <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center pulse-glow mx-auto mb-4">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
       </div>
       <h1 class="text-4xl font-bold mb-2">IROS</h1>
       <p class="text-gray-400">Create your account to get started</p>
      </div>
      <form class="glass-card rounded-2xl p-8 space-y-4" onsubmit="handleSignUp(event)">
       <div><label for="signUpName" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label> <input type="text" id="signUpName" placeholder="Your Name" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
       </div>
       <div><label for="signUpEmail" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label> <input type="email" id="signUpEmail" placeholder="you@example.com" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
       </div>
       <div><label for="signUpPassword" class="block text-sm font-medium text-gray-300 mb-2">Password</label> <input type="password" id="signUpPassword" placeholder="Minimum 6 characters" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
       </div>
       <div><label for="signUpConfirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label> <input type="password" id="signUpConfirmPassword" placeholder="Re-enter password" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
       </div><button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all mt-6">Create Account</button>
      </form>
      <p class="text-center text-gray-400 mt-6">Already have an account? <button onclick="switchToSignIn()" class="text-indigo-400 hover:text-indigo-300 font-semibold">Sign In</button></p>
     </div><!-- Sign In Form (Hidden) -->
     <div id="signInContainer" class="hidden slide-in">
      <div class="text-center mb-8">
       <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center pulse-glow mx-auto mb-4">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
       </div>
       <h1 class="text-4xl font-bold mb-2">IROS</h1>
       <p class="text-gray-400">Welcome back to your dashboard</p>
      </div>
      <form class="glass-card rounded-2xl p-8 space-y-4" onsubmit="handleSignIn(event)">
       <div><label for="signInEmail" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label> <input type="email" id="signInEmail" placeholder="you@example.com" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
       </div>
       <div><label for="signInPassword" class="block text-sm font-medium text-gray-300 mb-2">Password</label> <input type="password" id="signInPassword" placeholder="Enter your password" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
       </div><button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all mt-6">Sign In</button>
      </form>
      <p class="text-center text-gray-400 mt-6">Don't have an account? <button onclick="switchToSignUp()" class="text-indigo-400 hover:text-indigo-300 font-semibold">Create one</button></p>
      <p class="text-center text-gray-500 text-sm mt-4">Demo: Use existing registered emails or create a new account</p>
     </div>
    </div>
   </div><!-- Main Application (Hidden until login) -->
   <div id="mainApp" class="min-h-screen flex flex-col"><!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-card">
     <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
       <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center pulse-glow">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
         </svg>
        </div><span class="logo text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">IROS</span>
       </div>
       <div class="hidden md:flex items-center gap-8"><a href="#dashboardSection" class="nav-link text-gray-300 transition-colors">Dashboard</a> <a href="#workflow" class="nav-link text-gray-300 transition-colors">Workflow</a> <a href="#contact" class="nav-link text-gray-300 transition-colors">Contact</a>
       </div>
       <div class="flex items-center gap-4">
        <div class="hidden md:block text-right">
         <p class="text-sm text-gray-300">Welcome, <span id="userNameDisplay" class="font-semibold text-indigo-400">User</span></p>
        </div><button onclick="logout()" class="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all font-semibold text-sm flex items-center gap-2"> <i data-lucide="log-out" style="width: 16px; height: 16px;"></i> Logout </button> <button class="md:hidden text-white" onclick="toggleMobileMenu()">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
         </svg></button>
       </div>
      </div>
     </div>
     <div id="mobileMenu" class="hidden md:hidden glass-card border-t border-white/10">
      <div class="px-6 py-4 space-y-4"><a href="#dashboardSection" class="block text-gray-300 hover:text-indigo-400">Dashboard</a> <a href="#workflow" class="block text-gray-300 hover:text-indigo-400">Workflow</a> <a href="#contact" class="block text-gray-300 hover:text-indigo-400">Contact</a>
      </div>
     </div>
    </nav><!-- Hero Section -->
    <section class="pt-40 pb-20 px-6">
     <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-4xl mx-auto">
       <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-indigo-300 mb-8 slide-in"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> <span id="heroTag">Next-Gen Resource Management</span>
       </div>
       <h1 id="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 leading-tight glow-text slide-in">Intelligent Resource<br><span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Optimization System</span></h1>
       <p id="heroSubtitle" class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed slide-in">Streamline event management with AI-powered venue suggestions, centralized booking, dignitary scheduling, and seamless sponsor coordination.</p>
       <div class="flex flex-col sm:flex-row gap-4 justify-center slide-in"><button onclick="document.getElementById('dashboardSection').scrollIntoView({ behavior: 'smooth' })" class="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2"> <span>Launch Demo</span>
         <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
         </svg></button> <button class="px-8 py-4 glass-card rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"> <i data-lucide="play" style="width: 20px; height: 20px;"></i> <span>Watch Video</span> </button>
       </div>
      </div><!-- Stats Cards -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
       <div class="glass-card rounded-2xl p-6 text-center float-animation" style="animation-delay: 0s;">
        <div class="text-3xl font-bold text-indigo-400 mb-1">
         98%
        </div>
        <div class="text-sm text-gray-400">
         Optimization Rate
        </div>
       </div>
       <div class="glass-card rounded-2xl p-6 text-center float-animation" style="animation-delay: 0.2s;">
        <div class="text-3xl font-bold text-purple-400 mb-1">
         500+
        </div>
        <div class="text-sm text-gray-400">
         Venues Indexed
        </div>
       </div>
       <div class="glass-card rounded-2xl p-6 text-center float-animation" style="animation-delay: 0.4s;">
        <div class="text-3xl font-bold text-pink-400 mb-1">
         24/7
        </div>
        <div class="text-sm text-gray-400">
         System Uptime
        </div>
       </div>
       <div class="glass-card rounded-2xl p-6 text-center float-animation" style="animation-delay: 0.6s;">
        <div class="text-3xl font-bold text-cyan-400 mb-1">
         3x
        </div>
        <div class="text-sm text-gray-400">
         Faster Booking
        </div>
       </div>
      </div>
     </div>
    </section><!-- Features Section -->
    <section id="features" class="py-20 px-6">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 id="featuresTitle" class="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
       <p id="featuresSubtitle" class="text-gray-400 text-lg max-w-2xl mx-auto">Five integrated modules working together to revolutionize your event management experience.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       <div class="feature-card glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><i data-lucide="map-pin" class="text-indigo-400" style="width: 28px; height: 28px;"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-white">Venue Suggestion Engine</h3>
        <p class="text-gray-400 mb-4 leading-relaxed">AI-powered optimization algorithm analyzes capacity, location, amenities, and cost to recommend the perfect venue.</p>
        <div class="flex flex-wrap gap-2"><span class="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300">AI-Driven</span> <span class="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300">Multi-criteria</span>
        </div>
       </div>
       <div class="feature-card glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><i data-lucide="calendar" class="text-purple-400" style="width: 28px; height: 28px;"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-white">Centralized Resource Booking</h3>
        <p class="text-gray-400 mb-4 leading-relaxed">Unified dashboard for managing all resources with real-time availability tracking and smart recommendations.</p>
        <div class="flex flex-wrap gap-2"><span class="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Real-time</span> <span class="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Unified</span>
        </div>
       </div>
       <div class="feature-card glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><i data-lucide="users" class="text-pink-400" style="width: 28px; height: 28px;"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-white">Digital Dignitary Scheduling</h3>
        <p class="text-gray-400 mb-4 leading-relaxed">Sophisticated calendar system for VIP guests with protocol management and automated reminders.</p>
        <div class="flex flex-wrap gap-2"><span class="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">VIP Focus</span> <span class="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Protocol</span>
        </div>
       </div>
       <div class="feature-card glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><i data-lucide="link-2" class="text-cyan-400" style="width: 28px; height: 28px;"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-white">Sponsor-Organizer Bridge</h3>
        <p class="text-gray-400 mb-4 leading-relaxed">Seamless communication portal connecting sponsors with organizers, featuring proposal tracking and analytics.</p>
        <div class="flex flex-wrap gap-2"><span class="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">Collaborative</span> <span class="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">Analytics</span>
        </div>
       </div>
       <div class="feature-card glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><i data-lucide="check-circle-2" class="text-emerald-400" style="width: 28px; height: 28px;"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-white">Approval Workflow System</h3>
        <p class="text-gray-400 mb-4 leading-relaxed">Configurable multi-tier approval chains with escalation rules and audit trails.</p>
        <div class="flex flex-wrap gap-2"><span class="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300">Automated</span> <span class="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300">Auditable</span>
        </div>
       </div>
       <div class="feature-card glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer group bg-gradient-to-br from-indigo-600/10 to-purple-600/10">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><i data-lucide="zap" class="text-amber-400" style="width: 28px; height: 28px;"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-white">Seamless Integrations</h3>
        <p class="text-gray-400 mb-4 leading-relaxed">Connect with existing tools—Google Calendar, Outlook, Slack, payment gateways—for unified workflow.</p>
        <div class="flex flex-wrap gap-2"><span class="px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300">API-Ready</span> <span class="px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300">Extensible</span>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Dashboard Section -->
    <section id="dashboardSection" class="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Feature Dashboard</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Access all IROS tools in one integrated platform</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><button onclick="document.getElementById('venueOptimization').scrollIntoView({ behavior: 'smooth' })" class="glass-card rounded-2xl p-8 text-left hover:border-indigo-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="map-pin" class="text-indigo-400" style="width: 24px; height: 24px;"></i>
        </div><h3 class="text-xl font-bold mb-2 text-white">Venue Suggestions</h3><p class="text-gray-400 text-sm mb-4">AI-powered venue recommendations optimized for your event</p>
        <div class="inline-flex items-center gap-2 text-indigo-400 group-hover:gap-3 transition-all"><span class="text-sm font-semibold">Launch</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div></button> <button onclick="document.getElementById('resourceBooking').scrollIntoView({ behavior: 'smooth' })" class="glass-card rounded-2xl p-8 text-left hover:border-purple-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="package" class="text-purple-400" style="width: 24px; height: 24px;"></i>
        </div><h3 class="text-xl font-bold mb-2 text-white">Resource Booking</h3><p class="text-gray-400 text-sm mb-4">Centralized booking for catering, AV, décor &amp; transport</p>
        <div class="inline-flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all"><span class="text-sm font-semibold">Launch</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div></button> <button onclick="document.getElementById('dignitarySchedule').scrollIntoView({ behavior: 'smooth' })" class="glass-card rounded-2xl p-8 text-left hover:border-pink-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="calendar" class="text-pink-400" style="width: 24px; height: 24px;"></i>
        </div><h3 class="text-xl font-bold mb-2 text-white">Dignitary Scheduling</h3><p class="text-gray-400 text-sm mb-4">VIP calendar management with protocol alerts</p>
        <div class="inline-flex items-center gap-2 text-pink-400 group-hover:gap-3 transition-all"><span class="text-sm font-semibold">Launch</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div></button> <button onclick="document.getElementById('sponsorBridge').scrollIntoView({ behavior: 'smooth' })" class="glass-card rounded-2xl p-8 text-left hover:border-cyan-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="link-2" class="text-cyan-400" style="width: 24px; height: 24px;"></i>
        </div><h3 class="text-xl font-bold mb-2 text-white">Sponsor Bridge</h3><p class="text-gray-400 text-sm mb-4">Sponsor-organizer collaboration &amp; ROI tracking</p>
        <div class="inline-flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all"><span class="text-sm font-semibold">Launch</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div></button> <button onclick="document.getElementById('approvalFlow').scrollIntoView({ behavior: 'smooth' })" class="glass-card rounded-2xl p-8 text-left hover:border-emerald-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="check-circle-2" class="text-emerald-400" style="width: 24px; height: 24px;"></i>
        </div><h3 class="text-xl font-bold mb-2 text-white">Approval Workflow</h3><p class="text-gray-400 text-sm mb-4">Multi-tier approval chains with audit trails</p>
        <div class="inline-flex items-center gap-2 text-emerald-400 group-hover:gap-3 transition-all"><span class="text-sm font-semibold">Launch</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div></button> <button onclick="document.getElementById('venueCatalog').scrollIntoView({ behavior: 'smooth' })" class="glass-card rounded-2xl p-8 text-left hover:border-amber-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="building-2" class="text-amber-400" style="width: 24px; height: 24px;"></i>
        </div><h3 class="text-xl font-bold mb-2 text-white">Venue Catalog</h3><p class="text-gray-400 text-sm mb-4">Browse &amp; filter 500+ premium venues across India</p>
        <div class="inline-flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all"><span class="text-sm font-semibold">Launch</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div></button>
      </div>
     </div>
    </section><!-- Venue Optimization Section -->
    <section id="venueOptimization" class="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Smart Venue Optimization</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Enter your event details and our AI analyzes thousands of venues to find your perfect match.</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12 items-start">
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">Event Details</h3>
        <form id="eventForm" class="space-y-4" onsubmit="optimizeVenue(event)">
         <div><label for="eventName" class="block text-sm font-medium text-gray-300 mb-2">Event Name</label> <input type="text" id="eventName" placeholder="e.g., Tech Conference 2024" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
         </div>
         <div class="grid grid-cols-2 gap-4">
          <div><label for="attendees" class="block text-sm font-medium text-gray-300 mb-2">Expected Attendees</label> <input type="number" id="attendees" min="10" max="50000" placeholder="500" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
          </div>
          <div><label for="budget" class="block text-sm font-medium text-gray-300 mb-2">Budget (INR)</label> <input type="number" id="budget" min="50000" placeholder="2500000" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors">
          </div>
         </div>
         <div class="grid grid-cols-2 gap-4">
          <div><label for="eventDate" class="block text-sm font-medium text-gray-300 mb-2">Event Date</label> <input type="date" id="eventDate" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors">
          </div>
          <div><label for="city" class="block text-sm font-medium text-gray-300 mb-2">City</label> <select id="city" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"> <option value="">Select City</option> <option value="Mumbai">Mumbai</option> <option value="Delhi">Delhi</option> <option value="Bangalore">Bangalore</option> <option value="Hyderabad">Hyderabad</option> <option value="Chennai">Chennai</option> <option value="Kolkata">Kolkata</option> <option value="Pune">Pune</option> <option value="Jaipur">Jaipur</option> <option value="Ahmedabad">Ahmedabad</option> <option value="Surat">Surat</option> <option value="Lucknow">Lucknow</option> <option value="Kanpur">Kanpur</option> <option value="Nagpur">Nagpur</option> <option value="Indore">Indore</option> <option value="Thane">Thane</option> <option value="Bhopal">Bhopal</option> <option value="Visakhapatnam">Visakhapatnam</option> <option value="Vadodara">Vadodara</option> <option value="Ghaziabad">Ghaziabad</option> <option value="Ludhiana">Ludhiana</option> <option value="Coimbatore">Coimbatore</option> <option value="Kochi">Kochi</option> <option value="Chandigarh">Chandigarh</option> <option value="Gurgaon">Gurgaon</option> <option value="Noida">Noida</option> <option value="Nashik">Nashik</option> <option value="Faridabad">Faridabad</option> <option value="Meerut">Meerut</option> <option value="Agra">Agra</option> <option value="Amritsar">Amritsar</option> <option value="Aurangabad">Aurangabad</option> <option value="Bareilly">Bareilly</option> <option value="Belgaum">Belgaum</option> <option value="Bhavnagar">Bhavnagar</option> <option value="Bhubaneswar">Bhubaneswar</option> <option value="Bikaner">Bikaner</option> <option value="Bilaspur">Bilaspur</option> <option value="Bokaro">Bokaro</option> <option value="Bulandshahr">Bulandshahr</option> <option value="Chhindwara">Chhindwara</option> <option value="Aligarh">Aligarh</option> <option value="Allahabad">Allahabad</option> <option value="Almora">Almora</option> <option value="Ambala">Ambala</option> <option value="Amroha">Amroha</option> <option value="Darjeeling">Darjeeling</option> <option value="Davangere">Davangere</option> <option value="Dehradun">Dehradun</option> <option value="Deoria">Deoria</option> <option value="Dinajpur">Dinajpur</option> <option value="Dombivli">Dombivli</option> <option value="Durgapur">Durgapur</option> <option value="Erode">Erode</option> <option value="Ernakulam">Ernakulam</option> <option value="Fatehpur">Fatehpur</option> <option value="Firozabad">Firozabad</option> <option value="Fremont">Fremont</option> <option value="Gandhinagar">Gandhinagar</option> <option value="Gaya">Gaya</option> <option value="Giridih">Giridih</option> <option value="Gomti Nagar">Gomti Nagar</option> <option value="Gorakhpur">Gorakhpur</option> <option value="Gurgaon">Greater Noida</option> <option value="Guwahati">Guwahati</option> <option value="Hapur">Hapur</option> <option value="Haridwar">Haridwar</option> <option value="Hisar">Hisar</option> <option value="Hoshiarpur">Hoshiarpur</option> <option value="Hubli">Hubli</option> <option value="Inderpuri">Inderpuri</option> <option value="Jabalpur">Jabalpur</option> <option value="Jaipur">Jaipur</option> <option value="Jaisalmer">Jaisalmer</option> <option value="Jalandhar">Jalandhar</option> <option value="Jalgaon">Jalgaon</option> <option value="Jamnagar">Jamnagar</option> <option value="Jammu">Jammu</option> <option value="Jodhpur">Jodhpur</option> <option value="Junagadh">Junagadh</option> <option value="Kakinada">Kakinada</option> <option value="Kalaburagi">Kalaburagi</option> <option value="Kalyan">Kalyan</option> <option value="Kamarhati">Kamarhati</option> <option value="Kamrup">Kamrup</option> <option value="Kandivali">Kandivali</option> <option value="Kankhal">Kankhal</option> <option value="Kannur">Kannur</option> <option value="Karad">Karad</option> <option value="Karchhana">Karchhana</option> <option value="Karnal">Karnal</option> <option value="Karur">Karur</option> <option value="Kasaragod">Kasaragod</option> <option value="Katihar">Katihar</option> <option value="Katni">Katni</option> <option value="Kaundinya">Kaundinya</option> <option value="Kavaratti">Kavaratti</option> </select>
          </div>
         </div>
         <div><label for="venueType" class="block text-sm font-medium text-gray-300 mb-2">Venue Type</label> <select id="venueType" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"> <option value="">Select Type</option> <option value="Hotel Ballroom">Hotel Ballroom</option> <option value="5-Star Hotel">5-Star Hotel</option> <option value="Luxury Resort">Luxury Resort</option> <option value="Boutique Hotel">Boutique Hotel</option> <option value="Convention Center">Convention Center</option> <option value="Theater">Theater</option> <option value="Outdoor Garden">Outdoor Garden</option> <option value="Banquet Hall">Banquet Hall</option> <option value="Corporate Office">Corporate Office</option> <option value="Beach Resort">Beach Resort</option> <option value="Heritage Palace">Heritage Palace</option> <option value="Farm House">Farm House</option> <option value="Club House">Club House</option> <option value="Stadium">Stadium</option> <option value="Museum">Museum</option> <option value="Golf Course">Golf Course</option> <option value="Villa">Villa</option> <option value="Rooftop Venue">Rooftop Venue</option> <option value="Industrial Loft">Industrial Loft</option> <option value="Wine Yard">Wine Yard</option> </select>
         </div><button type="submit" id="optimizeBtn" class="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2"> <i data-lucide="zap" style="width: 20px; height: 20px;"></i> <span id="optimizeText">Optimize with AI</span> </button>
        </form>
       </div>
       <div class="space-y-4">
        <div id="resultsContainer" class="hidden space-y-4">
         <div id="recommendationCard" class="glass-card rounded-2xl p-6 slide-in">
          <div class="flex items-start justify-between mb-4">
           <div>
            <h4 class="text-sm uppercase tracking-wider text-indigo-400 mb-1">Recommended Venue</h4>
            <h3 id="venueName" class="text-2xl font-bold"></h3>
           </div>
           <div id="scoreCircle" class="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center border border-green-500/30"><span id="matchScore" class="text-2xl font-bold text-green-400"></span>
           </div>
          </div>
          <div class="space-y-3 text-sm">
           <div class="flex justify-between"><span class="text-gray-400">Capacity</span> <span id="capacity" class="text-white font-semibold"></span>
           </div>
           <div class="flex justify-between"><span class="text-gray-400">Estimated Cost</span> <span id="cost" class="text-white font-semibold"></span>
           </div>
           <div class="flex justify-between"><span class="text-gray-400">Cost per Attendee</span> <span id="costPerAttendee" class="text-indigo-400 font-semibold"></span>
           </div>
          </div>
         </div><button id="saveOptimization" class="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2"> <i data-lucide="save" style="width: 20px; height: 20px;"></i> <span>Save Event to Sheet</span> </button>
        </div>
        <div id="emptyState" class="glass-card rounded-2xl p-12 text-center"><i data-lucide="zap" style="width: 64px; height: 64px; margin: 0 auto 1rem;" class="text-indigo-400 opacity-50"></i>
         <p class="text-gray-400">Fill in your event details and click "Optimize with AI" to get recommendations</p>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Resource Booking Section -->
    <section id="resourceBooking" class="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Unified Resource Booking</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Manage catering, AV, décor, and transportation with intelligent recommendations</p>
      </div>
      <div class="grid lg:grid-cols-3 gap-6"><!-- Resource Forms -->
       <div class="lg:col-span-2 space-y-6"><!-- Event Context -->
        <div class="glass-card rounded-2xl p-8">
         <h3 class="text-2xl font-bold mb-6">📋 Event Context</h3>
         <div class="space-y-4"><input type="number" id="resourceAttendees" placeholder="Attendees" min="10" max="10000" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"> <input type="date" id="resourceEventDate" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors">
         </div>
        </div><!-- Catering -->
        <div class="glass-card rounded-2xl p-8">
         <h3 class="text-2xl font-bold mb-6">🍽 Catering Services</h3>
         <form class="space-y-4" onsubmit="addResource(event, 'catering')"><select id="cateringType" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"> <option value="">Select Catering Type</option> <option value="Buffet">Buffet Service</option> <option value="Plated">Plated Dinner</option> <option value="Cocktail">Cocktail Reception</option> </select> <button type="submit" class="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all"> <i data-lucide="plus" style="width: 20px; height: 20px; display: inline; margin-right: 8px;"></i> Book Catering </button>
         </form>
        </div><!-- AV & Tech -->
        <div class="glass-card rounded-2xl p-8">
         <h3 class="text-2xl font-bold mb-6">📺 AV &amp; Tech Equipment</h3>
         <form class="space-y-4" onsubmit="addResource(event, 'av')"><select id="avType" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"> <option value="">Select AV Setup</option> <option value="Single 4K">Single 4K Display</option> <option value="Dual HD">Dual HD Displays</option> <option value="LED Wall">LED Wall System</option> </select> <button type="submit" class="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all"> <i data-lucide="plus" style="width: 20px; height: 20px; display: inline; margin-right: 8px;"></i> Book AV Equipment </button>
         </form>
        </div><!-- Décor -->
        <div class="glass-card rounded-2xl p-8">
         <h3 class="text-2xl font-bold mb-6">🎨 Décor &amp; Setup</h3>
         <form class="space-y-4" onsubmit="addResource(event, 'decor')"><select id="decorTheme" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"> <option value="">Select Theme</option> <option value="Modern">Modern Minimalist</option> <option value="Traditional">Traditional Elegant</option> <option value="Festive">Festive Colorful</option> </select> <button type="submit" class="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"> <i data-lucide="plus" style="width: 20px; height: 20px; display: inline; margin-right: 8px;"></i> Book Décor </button>
         </form>
        </div><!-- Transportation -->
        <div class="glass-card rounded-2xl p-8">
         <h3 class="text-2xl font-bold mb-6">🚗 Transportation</h3>
         <form class="space-y-4" onsubmit="addResource(event, 'transport')"><select id="transportType" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"> <option value="">Select Type</option> <option value="Shuttle">Shuttle Service</option> <option value="Valet">Valet Parking</option> <option value="Logistics">Logistics/Delivery</option> </select> <button type="submit" class="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all"> <i data-lucide="plus" style="width: 20px; height: 20px; display: inline; margin-right: 8px;"></i> Book Transportation </button>
         </form>
        </div><!-- Booked Resources -->
        <div class="glass-card rounded-2xl p-8">
         <h3 class="text-2xl font-bold mb-6">📋 Booked Resources</h3>
         <div id="bookedResourcesList" class="space-y-3">
          <div class="text-center text-gray-400 py-8">
           No resources booked yet. Start booking above.
          </div>
         </div>
        </div>
       </div><!-- Budget Analysis -->
       <div class="space-y-6">
        <div class="glass-card rounded-2xl p-6">
         <h3 class="text-xl font-bold mb-4">💰 Budget Analysis</h3>
         <div class="space-y-4">
          <div class="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
           <div class="text-xs text-gray-400 mb-1">
            Catering
           </div>
           <div class="text-2xl font-bold text-cyan-300" id="budgetCatering">
            ₹0
           </div>
          </div>
          <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
           <div class="text-xs text-gray-400 mb-1">
            AV &amp; Tech
           </div>
           <div class="text-2xl font-bold text-blue-300" id="budgetAV">
            ₹0
           </div>
          </div>
          <div class="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
           <div class="text-xs text-gray-400 mb-1">
            Décor
           </div>
           <div class="text-2xl font-bold text-purple-300" id="budgetDecor">
            ₹0
           </div>
          </div>
          <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
           <div class="text-xs text-gray-400 mb-1">
            Transportation
           </div>
           <div class="text-2xl font-bold text-orange-300" id="budgetTransport">
            ₹0
           </div>
          </div>
          <div class="border-t border-white/10 pt-4 mt-4">
           <div class="flex justify-between items-center"><span class="text-gray-300 font-semibold">Total</span> <span class="text-2xl font-bold text-cyan-300" id="totalResourceCost">₹0</span>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Dignitary Scheduling Section -->
    <section id="dignitarySchedule" class="py-20 px-6 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Digital Dignitary Scheduling</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Manage VIP guests and protocol requirements with precision</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12">
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">Add VIP Guest</h3>
        <form class="space-y-4" onsubmit="addVIPGuest(event)"><input type="text" id="vipName" placeholder="Guest Name" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"> <input type="text" id="vipTitle" placeholder="Title/Position" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"> <input type="email" id="vipEmail" placeholder="Email Address" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"> <input type="tel" id="vipPhone" placeholder="Phone Number" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"> <input type="date" id="vipArrivalDate" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500 transition-colors"> <input type="time" id="vipArrivalTime" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500 transition-colors"> <select id="vipProtocol" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500 transition-colors"> <option value="">Select Protocol Level</option> <option value="Standard">Standard Reception</option> <option value="Premium">Premium VIP</option> <option value="Dignitary">Dignitary Level</option> </select> <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-500 transition-all flex items-center justify-center gap-2"> <i data-lucide="user-plus" style="width: 20px; height: 20px;"></i> Add VIP Guest </button>
        </form>
       </div>
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">👥 VIP Schedule</h3>
        <div id="vipScheduleList" class="space-y-3">
         <div class="text-center text-gray-400 py-8">
          No VIP guests scheduled yet.
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Sponsor Bridge Section -->
    <section id="sponsorBridge" class="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Sponsor-Organizer Bridge</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Seamless collaboration between sponsors and event organizers</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12">
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">Create Sponsorship Proposal</h3>
        <form class="space-y-4" onsubmit="addSponsorProposal(event)"><input type="text" id="sponsorName" placeholder="Sponsor Company" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"> <input type="text" id="sponsorContact" placeholder="Contact Person" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"> <input type="number" id="sponsorAmount" placeholder="Sponsorship Amount (₹)" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"> <select id="sponsorLevel" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"> <option value="">Select Sponsorship Level</option> <option value="Platinum">Platinum Sponsor</option> <option value="Gold">Gold Sponsor</option> <option value="Silver">Silver Sponsor</option> <option value="Bronze">Bronze Sponsor</option> </select> <textarea id="sponsorDeliverables" placeholder="Deliverables &amp; Benefits" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors" rows="4"></textarea> <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg font-semibold hover:from-cyan-500 hover:to-teal-500 transition-all flex items-center justify-center gap-2"> <i data-lucide="send" style="width: 20px; height: 20px;"></i> Submit Proposal </button>
        </form>
       </div>
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">🤝 Active Sponsorships</h3>
        <div id="sponsorsList" class="space-y-3">
         <div class="text-center text-gray-400 py-8">
          No sponsorship proposals yet.
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Approval Workflow Section -->
    <section id="approvalFlow" class="py-20 px-6 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Approval Workflow System</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Multi-tier approvals with complete audit trails</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12">
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">Submit for Approval</h3>
        <form class="space-y-4" onsubmit="submitApproval(event)"><input type="text" id="approvalItemName" placeholder="Item/Request Name" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"> <select id="approvalType" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors"> <option value="">Select Request Type</option> <option value="Budget">Budget Request</option> <option value="Resource">Resource Booking</option> <option value="Vendor">Vendor Approval</option> <option value="Schedule">Schedule Change</option> </select> <input type="number" id="approvalBudget" placeholder="Amount (if applicable)" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"> <textarea id="approvalDetails" placeholder="Details &amp; Justification" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors" rows="4"></textarea> <select id="approvalLevel" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors"> <option value="">Route to Approver</option> <option value="Manager">Manager</option> <option value="Director">Director</option> <option value="Executive">Executive</option> </select> <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center justify-center gap-2"> <i data-lucide="send" style="width: 20px; height: 20px;"></i> Submit Request </button>
        </form>
       </div>
       <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6">📋 Approval Queue</h3>
        <div id="approvalsList" class="space-y-3">
         <div class="text-center text-gray-400 py-8">
          No pending approvals.
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Venue Catalog Section -->
    <section id="venueCatalog" class="py-20 px-6 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Premium Venue Catalog</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Browse and filter from 500+ premium venues across India</p>
      </div>
      <div class="glass-card rounded-2xl p-8 mb-8">
       <h3 class="text-2xl font-bold mb-6">Search &amp; Filter</h3>
       <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4"><input type="text" id="venueSearchName" placeholder="Venue Name" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"> <select id="venueSearchCity" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors"> <option value="">All Cities</option> <option value="Mumbai">Mumbai</option> <option value="Delhi">Delhi</option> <option value="Bangalore">Bangalore</option> <option value="Hyderabad">Hyderabad</option> <option value="Chennai">Chennai</option> <option value="Kolkata">Kolkata</option> <option value="Pune">Pune</option> <option value="Jaipur">Jaipur</option> <option value="Ahmedabad">Ahmedabad</option> <option value="Surat">Surat</option> <option value="Lucknow">Lucknow</option> <option value="Kanpur">Kanpur</option> <option value="Nagpur">Nagpur</option> <option value="Indore">Indore</option> <option value="Thane">Thane</option> <option value="Bhopal">Bhopal</option> <option value="Visakhapatnam">Visakhapatnam</option> <option value="Vadodara">Vadodara</option> <option value="Ghaziabad">Ghaziabad</option> <option value="Ludhiana">Ludhiana</option> <option value="Coimbatore">Coimbatore</option> <option value="Kochi">Kochi</option> <option value="Chandigarh">Chandigarh</option> <option value="Gurgaon">Gurgaon</option> <option value="Noida">Noida</option> <option value="Nashik">Nashik</option> <option value="Faridabad">Faridabad</option> <option value="Meerut">Meerut</option> </select> <select id="venueSearchType" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors"> <option value="">All Types</option> <option value="Hotel">Hotel Ballroom</option> <option value="Convention">Convention Center</option> <option value="Garden">Outdoor Garden</option> </select> <input type="number" id="venueSearchCapacity" placeholder="Min Capacity" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors" oninput="filterVenues()">
       </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       <div class="glass-card rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group cursor-pointer">
        <div class="h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center group-hover:scale-105 transition-transform"><i data-lucide="building-2" style="width: 64px; height: 64px;" class="text-amber-400 opacity-50"></i>
        </div>
        <div class="p-6">
         <h4 class="text-xl font-bold mb-2">Grand Ballroom Mumbai</h4>
         <p class="text-gray-400 text-sm mb-4">5-star luxury venue in South Mumbai with premium amenities</p>
         <div class="space-y-2 text-sm mb-4">
          <div class="flex justify-between"><span class="text-gray-400">Capacity</span> <span class="text-white font-semibold">500-1000</span>
          </div>
          <div class="flex justify-between"><span class="text-gray-400">Price</span> <span class="text-amber-300 font-semibold">₹5L - ₹15L</span>
          </div>
         </div><button class="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all text-sm">View Details</button>
        </div>
       </div>
       <div class="glass-card rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group cursor-pointer">
        <div class="h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center group-hover:scale-105 transition-transform"><i data-lucide="building-2" style="width: 64px; height: 64px;" class="text-amber-400 opacity-50"></i>
        </div>
        <div class="p-6">
         <h4 class="text-xl font-bold mb-2">Convention Center Delhi</h4>
         <p class="text-gray-400 text-sm mb-4">State-of-the-art facility with modular spaces</p>
         <div class="space-y-2 text-sm mb-4">
          <div class="flex justify-between"><span class="text-gray-400">Capacity</span> <span class="text-white font-semibold">1000-5000</span>
          </div>
          <div class="flex justify-between"><span class="text-gray-400">Price</span> <span class="text-amber-300 font-semibold">₹8L - ₹25L</span>
          </div>
         </div><button class="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all text-sm">View Details</button>
        </div>
       </div>
       <div class="glass-card rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group cursor-pointer">
        <div class="h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center group-hover:scale-105 transition-transform"><i data-lucide="building-2" style="width: 64px; height: 64px;" class="text-amber-400 opacity-50"></i>
        </div>
        <div class="p-6">
         <h4 class="text-xl font-bold mb-2">Garden Resort Bangalore</h4>
         <p class="text-gray-400 text-sm mb-4">Picturesque outdoor venue with indoor backup</p>
         <div class="space-y-2 text-sm mb-4">
          <div class="flex justify-between"><span class="text-gray-400">Capacity</span> <span class="text-white font-semibold">200-800</span>
          </div>
          <div class="flex justify-between"><span class="text-gray-400">Price</span> <span class="text-amber-300 font-semibold">₹3L - ₹10L</span>
          </div>
         </div><button class="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all text-sm">View Details</button>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Workflow Section -->
    <section id="workflow" class="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">How IROS Works</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">From planning to execution in seamless steps</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
       <div class="relative">
        <div class="glass-card rounded-2xl p-8 text-center">
         <div class="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 pulse-glow"><span class="text-2xl font-bold">1</span>
         </div>
         <h3 class="text-xl font-bold mb-3">Plan Event</h3>
         <p class="text-gray-400">Define your event requirements and objectives</p>
        </div>
        <div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-indigo-500 to-transparent"></div>
       </div>
       <div class="relative">
        <div class="glass-card rounded-2xl p-8 text-center">
         <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 pulse-glow"><span class="text-2xl font-bold">2</span>
         </div>
         <h3 class="text-xl font-bold mb-3">Optimize Venue</h3>
         <p class="text-gray-400">AI finds the perfect venue for your event</p>
        </div>
        <div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
       </div>
       <div class="relative">
        <div class="glass-card rounded-2xl p-8 text-center">
         <div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 pulse-glow"><span class="text-2xl font-bold">3</span>
         </div>
         <h3 class="text-xl font-bold mb-3">Book Resources</h3>
         <p class="text-gray-400">Coordinate all services in one platform</p>
        </div>
        <div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
       </div>
       <div>
        <div class="glass-card rounded-2xl p-8 text-center">
         <div class="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-green-600 flex items-center justify-center mx-auto mb-4 pulse-glow"><span class="text-2xl font-bold">4</span>
         </div>
         <h3 class="text-xl font-bold mb-3">Execute</h3>
         <p class="text-gray-400">Flawless event execution with full visibility</p>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
     <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
       <h2 class="text-4xl md:text-5xl font-bold mb-4">Get Started Today</h2>
       <p class="text-gray-400 text-lg max-w-2xl mx-auto">Join hundreds of event organizers using IROS</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
       <div class="glass-card rounded-2xl p-8 text-center hover:border-indigo-500/50 transition-all"><i data-lucide="mail" style="width: 40px; height: 40px; margin: 0 auto 1rem;" class="text-indigo-400"></i>
        <h3 class="text-xl font-bold mb-2">Email Us</h3>
        <p class="text-gray-400 mb-4">support@iros-system.com</p><button class="text-indigo-400 hover:text-indigo-300 font-semibold text-sm">Send Message</button>
       </div>
       <div class="glass-card rounded-2xl p-8 text-center hover:border-indigo-500/50 transition-all"><i data-lucide="phone" style="width: 40px; height: 40px; margin: 0 auto 1rem;" class="text-indigo-400"></i>
        <h3 class="text-xl font-bold mb-2">Call Us</h3>
        <p class="text-gray-400 mb-4">+91-7779972275 ,+91-8084691622</p><button class="text-indigo-400 hover:text-indigo-300 font-semibold text-sm">Schedule Call</button>
       </div>
       <div class="glass-card rounded-2xl p-8 text-center hover:border-indigo-500/50 transition-all"><i data-lucide="map-pin" style="width: 40px; height: 40px; margin: 0 auto 1rem;" class="text-indigo-400"></i>
        <h3 class="text-xl font-bold mb-2">Visit Us</h3>
        <p class="text-gray-400 mb-4">Patna, Bihar, India</p><button class="text-indigo-400 hover:text-indigo-300 font-semibold text-sm">Get Directions</button>
       </div>
      </div>
     </div>
    </section><!-- Footer -->
    <footer class="border-t border-white/10 py-12 px-6">
     <div class="max-w-7xl mx-auto text-center text-gray-400">
      <p>© 2026 IROS - Intelligent Resource Optimization System. All rights reserved.</p>
     </div>
    </footer>
   </div><!-- Authentication Modals -->
   <div id="signInModal" class="hidden fixed inset-0 modal-overlay z-50 flex items-center justify-center p-4">
    <div class="glass-card rounded-2xl p-8 w-full max-w-md slide-in">
     <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">Sign In</h2><button onclick="hideSignInModal()" class="text-gray-400 hover:text-white"> <i data-lucide="x" style="width: 24px; height: 24px;"></i> </button>
     </div>
     <form onsubmit="handleSignIn(event)" class="space-y-4"><input type="email" id="signInEmail" placeholder="Email Address" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"> <input type="password" id="signInPassword" placeholder="Password" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"> <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all">Sign In</button>
     </form>
     <p class="text-center text-gray-400 mt-4 text-sm">Don't have an account? <button onclick="switchToSignUp()" class="text-indigo-400 hover:text-indigo-300 font-semibold">Sign Up</button></p>
    </div>
   </div>
   <div id="signUpModal" class="hidden fixed inset-0 modal-overlay z-50 flex items-center justify-center p-4">
    <div class="glass-card rounded-2xl p-8 w-full max-w-md slide-in">
     <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">Sign Up</h2><button onclick="hideSignUpModal()" class="text-gray-400 hover:text-white"> <i data-lucide="x" style="width: 24px; height: 24px;"></i> </button>
     </div>
     <form onsubmit="handleSignUp(event)" class="space-y-4"><input type="text" id="signUpName" placeholder="Full Name" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"> <input type="email" id="signUpEmail" placeholder="Email Address" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"> <input type="password" id="signUpPassword" placeholder="Password" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"> <input type="password" id="signUpConfirmPassword" placeholder="Confirm Password" required class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"> <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all">Create Account</button>
     </form>
     <p class="text-center text-gray-400 mt-4 text-sm">Already have an account? <button onclick="switchToSignIn()" class="text-indigo-400 hover:text-indigo-300 font-semibold">Sign In</button></p>
    </div>
   </div><!-- Toast Notification -->
   <div id="toastNotification" class="hidden fixed bottom-4 right-4 glass-card rounded-lg p-4 toast-notification z-50">
    <div class="flex items-center gap-3"><i data-lucide="check-circle" style="width: 20px; height: 20px;" class="text-green-400"></i> <span id="toastMessage" class="text-white font-semibold"></span>
    </div>
   </div>
   <script>
    // Initialize SDKs and state
    let currentUser = null;
    let allUsers = [];
    let eventData = [];
    let resourceBookings = { catering: [], av: [], decor: [], transport: [] };
    let vipGuests = [];
    let sponsorProposals = [];
    let approvalRequests = [];
    let isAuthPage = true;

    // Element SDK Configuration
    const defaultConfig = {
      app_title: "IROS - Intelligent Resource Optimization System",
      tagline: "Next-Gen Resource Management",
      hero_description: "Streamline event management with AI-powered venue suggestions, centralized booking, dignitary scheduling, and seamless sponsor coordination.",
      features_title: "Powerful Features",
      features_subtitle: "Five integrated modules working together to revolutionize your event management experience."
    };

    // Initialize Element SDK for editable features
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        document.getElementById('heroTag').textContent = config.tagline || defaultConfig.tagline;
        document.getElementById('heroTitle').innerHTML = `Intelligent Resource<br><span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Optimization System</span>`;
        document.getElementById('heroSubtitle').textContent = config.hero_description || defaultConfig.hero_description;
        document.getElementById('featuresTitle').textContent = config.features_title || defaultConfig.features_title;
        document.getElementById('featuresSubtitle').textContent = config.features_subtitle || defaultConfig.features_subtitle;
      },
      mapToCapabilities: (config) => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      mapToEditPanelValues: (config) => new Map([
        ["app_title", config.app_title || defaultConfig.app_title],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["hero_description", config.hero_description || defaultConfig.hero_description],
        ["features_title", config.features_title || defaultConfig.features_title],
        ["features_subtitle", config.features_subtitle || defaultConfig.features_subtitle]
      ])
    });

    // Data SDK Handler
    const dataHandler = {
      onDataChanged(data) {
        // Filter users and events
        allUsers = data.filter(d => d.user_email && d.user_password);
        eventData = data.filter(d => d.event_id);
        updateEventsList();
      }
    };

    // Initialize Data SDK
    async function initDataSDK() {
      const result = await window.dataSdk.init(dataHandler);
      if (result.isError) {
        console.error("Data SDK init failed:", result.error);
      }
    }

    initDataSDK();

    function switchToSignUp() {
      document.getElementById('signInContainer').classList.add('hidden');
      document.getElementById('signUpContainer').classList.remove('hidden');
    }

    function switchToSignIn() {
      document.getElementById('signUpContainer').classList.add('hidden');
      document.getElementById('signInContainer').classList.remove('hidden');
    }

    // UI Functions
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    function showToast(message) {
      const toast = document.getElementById('toastNotification');
      document.getElementById('toastMessage').textContent = message;
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }

    // Authentication Handlers
    async function handleSignIn(event) {
      event.preventDefault();
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;

      if (!email || !password) {
        showToast('Please enter both email and password.');
        return;
      }

      // Check if user exists with matching credentials
      const user = allUsers.find(u => u.user_email === email && u.user_password === password);
      
      if (user) {
        currentUser = { email: user.user_email, name: user.user_name };
        showMainApp();
        showToast(`Welcome back, ${currentUser.name}!`);
        document.getElementById('signInEmail').value = '';
        document.getElementById('signInPassword').value = '';
        // Scroll to hero section
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        showToast('Invalid email or password. Please try again.');
      }
    }

    async function handleSignUp(event) {
      event.preventDefault();
      const name = document.getElementById('signUpName').value;
      const email = document.getElementById('signUpEmail').value;
      const password = document.getElementById('signUpPassword').value;
      const confirmPassword = document.getElementById('signUpConfirmPassword').value;

      if (password !== confirmPassword) {
        showToast('Passwords do not match!');
        return;
      }

      if (password.length < 6) {
        showToast('Password must be at least 6 characters long!');
        return;
      }

      // Check if email already exists
      const existingUser = allUsers.find(u => u.user_email === email);
      if (existingUser) {
        showToast('Email already registered. Please sign in instead.');
        return;
      }

      // Save user to sheet
      if (allUsers.length >= 999) {
        showToast('Maximum users reached. Please contact support.');
        return;
      }

      const result = await window.dataSdk.create({
        user_email: email,
        user_password: password,
        user_name: name,
        user_created_at: new Date().toISOString(),
        event_id: null,
        event_name: null,
        attendees: null,
        budget: null,
        event_date: null,
        city: null,
        venue_type: null,
        venue_name: null,
        match_score: null,
        estimated_cost: null,
        booking_status: null,
        created_at: null
      });

      if (result.isOk) {
        currentUser = { name, email };
        document.getElementById('signUpName').value = '';
        document.getElementById('signUpEmail').value = '';
        document.getElementById('signUpPassword').value = '';
        document.getElementById('signUpConfirmPassword').value = '';
        
        // Show main app and display welcome message
        showMainApp();
        showToast(`Welcome, ${name}! Your account has been created.`);
        
        // Scroll to top to see the hero section
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        showToast('Failed to create account. Please try again.');
      }
    }

    function showMainApp() {
      isAuthPage = false;
      document.getElementById('authPage').classList.add('hidden');
      document.getElementById('mainApp').classList.remove('hidden');
      document.getElementById('userNameDisplay').textContent = currentUser.name;
    }

    function logout() {
      currentUser = null;
      isAuthPage = true;
      document.getElementById('authPage').classList.remove('hidden');
      document.getElementById('mainApp').classList.add('hidden');
      showToast('Logged out successfully.');
    }

    // Venue Optimization
    async function optimizeVenue(event) {
      event.preventDefault();
      
      const eventName = document.getElementById('eventName').value;
      const attendees = parseInt(document.getElementById('attendees').value);
      const budget = parseInt(document.getElementById('budget').value);
      const eventDate = document.getElementById('eventDate').value;
      const city = document.getElementById('city').value;
      const venueType = document.getElementById('venueType').value;

      // Simulate AI optimization
      const venues = {
        'Hotel Ballroom': { capacity: 500, cost: Math.floor(budget * 0.7) },
        'Convention Center': { capacity: 2000, cost: Math.floor(budget * 0.8) },
        'Theater': { capacity: 1000, cost: Math.floor(budget * 0.75) },
        'Outdoor Garden': { capacity: 300, cost: Math.floor(budget * 0.6) },
        'Corporate Office': { capacity: 200, cost: Math.floor(budget * 0.5) }
      };

      const selected = venues[venueType] || venues['Hotel Ballroom'];
      const matchScore = Math.min(98, Math.round((Math.min(attendees, selected.capacity) / attendees) * 100));
      const costPerAttendee = Math.floor(selected.cost / attendees);

      document.getElementById('venueName').textContent = `${venueType} - ${city}`;
      document.getElementById('matchScore').textContent = matchScore + '%';
      document.getElementById('capacity').textContent = selected.capacity + ' seats';
      document.getElementById('cost').textContent = '₹' + selected.cost.toLocaleString();
      document.getElementById('costPerAttendee').textContent = '₹' + costPerAttendee;

      document.getElementById('resultsContainer').classList.remove('hidden');
      document.getElementById('emptyState').classList.add('hidden');

      // Save event for later
      document.getElementById('saveOptimization').onclick = async () => {
        if (eventData.length >= 999) {
          showToast('Maximum events reached (999). Please delete some events.');
          return;
        }

        const result = await window.dataSdk.create({
          event_id: 'evt_' + Date.now(),
          event_name: eventName,
          attendees: attendees,
          budget: budget,
          event_date: eventDate,
          city: city,
          venue_type: venueType,
          venue_name: `${venueType} - ${city}`,
          match_score: matchScore,
          estimated_cost: selected.cost,
          booking_status: 'Pending',
          created_at: new Date().toISOString()
        });

        if (result.isOk) {
          showToast('Event saved successfully!');
        } else {
          showToast('Failed to save event. Please try again.');
        }
      };

      lucide.createIcons();
    }

    // Resource Booking
    function addResource(event, type) {
      event.preventDefault();
      
      const budgets = {
        catering: { name: 'Catering', amount: 50000, element: 'budgetCatering', id: 'cateringType' },
        av: { name: 'AV & Tech', amount: 75000, element: 'budgetAV', id: 'avType' },
        decor: { name: 'Décor', amount: 60000, element: 'budgetDecor', id: 'decorTheme' },
        transport: { name: 'Transport', amount: 30000, element: 'budgetTransport', id: 'transportType' }
      };

      const config = budgets[type];
      const selectedValue = document.getElementById(config.id).value;

      if (!selectedValue) return;

      resourceBookings[type].push(selectedValue);

      // Update budget display
      const currentBudget = parseInt(document.getElementById(config.element).textContent.replace('₹', '')) || 0;
      const newBudget = currentBudget + config.amount;
      document.getElementById(config.element).textContent = '₹' + newBudget.toLocaleString();

      // Update total
      updateTotalBudget();

      // Add to booked list
      addBookedResource(config.name, selectedValue);

      // Reset form
      document.getElementById(config.id).value = '';
      showToast(`${config.name} booking confirmed!`);
    }

    function addBookedResource(type, details) {
      const list = document.getElementById('bookedResourcesList');
      
      if (list.querySelector('.text-center')) {
        list.innerHTML = '';
      }

      const item = document.createElement('div');
      item.className = 'glass-card rounded-lg p-4 flex items-center justify-between';
      item.innerHTML = `
        <div>
          <p class="font-semibold">${type}</p>
          <p class="text-sm text-gray-400">${details}</p>
        </div>
        <button onclick="this.parentElement.remove(); updateTotalBudget();" class="text-red-400 hover:text-red-300">
          <i data-lucide="trash-2" style="width: 20px; height: 20px;"></i>
        </button>
      `;
      list.appendChild(item);
      lucide.createIcons();
    }

    function updateTotalBudget() {
      const catering = parseInt(document.getElementById('budgetCatering').textContent.replace('₹', '')) || 0;
      const av = parseInt(document.getElementById('budgetAV').textContent.replace('₹', '')) || 0;
      const decor = parseInt(document.getElementById('budgetDecor').textContent.replace('₹', '')) || 0;
      const transport = parseInt(document.getElementById('budgetTransport').textContent.replace('₹', '')) || 0;
      
      const total = catering + av + decor + transport;
      document.getElementById('totalResourceCost').textContent = '₹' + total.toLocaleString();
    }

    // VIP Guest Management
    function addVIPGuest(event) {
      event.preventDefault();

      const name = document.getElementById('vipName').value;
      const title = document.getElementById('vipTitle').value;
      const email = document.getElementById('vipEmail').value;
      const phone = document.getElementById('vipPhone').value;
      const arrivalDate = document.getElementById('vipArrivalDate').value;
      const arrivalTime = document.getElementById('vipArrivalTime').value;
      const protocol = document.getElementById('vipProtocol').value;

      const guest = { id: Date.now(), name, title, email, phone, arrivalDate, arrivalTime, protocol };
      vipGuests.push(guest);

      const list = document.getElementById('vipScheduleList');
      if (list.querySelector('.text-center')) {
        list.innerHTML = '';
      }

      const item = document.createElement('div');
      item.className = 'glass-card rounded-lg p-4 slide-in';
      item.innerHTML = `
        <div class="flex items-start justify-between mb-2">
          <div>
            <p class="font-semibold">${name}</p>
            <p class="text-sm text-gray-400">${title}</p>
          </div>
          <span class="px-2 py-1 text-xs rounded bg-pink-500/20 text-pink-300">${protocol}</span>
        </div>
        <div class="text-sm text-gray-400 space-y-1">
          <p>${arrivalDate} at ${arrivalTime}</p>
          <p>${email}</p>
          <p>${phone}</p>
        </div>
        <button onclick="removeVIPGuest(${guest.id})" class="mt-2 text-red-400 hover:text-red-300 text-sm">Remove</button>
      `;
      list.appendChild(item);

      // Reset form
      document.getElementById('vipName').value = '';
      document.getElementById('vipTitle').value = '';
      document.getElementById('vipEmail').value = '';
      document.getElementById('vipPhone').value = '';
      document.getElementById('vipArrivalDate').value = '';
      document.getElementById('vipArrivalTime').value = '';
      document.getElementById('vipProtocol').value = '';

      showToast('VIP guest added successfully!');
    }

    function removeVIPGuest(id) {
      vipGuests = vipGuests.filter(g => g.id !== id);
      const list = document.getElementById('vipScheduleList');
      const items = list.querySelectorAll('.glass-card');
      items.forEach((item, index) => {
        if (index >= vipGuests.length) {
          item.remove();
        }
      });
      if (vipGuests.length === 0) {
        list.innerHTML = '<div class="text-center text-gray-400 py-8">No VIP guests scheduled yet.</div>';
      }
    }

    // Sponsor Management
    function addSponsorProposal(event) {
      event.preventDefault();

      const company = document.getElementById('sponsorName').value;
      const contact = document.getElementById('sponsorContact').value;
      const amount = parseInt(document.getElementById('sponsorAmount').value);
      const level = document.getElementById('sponsorLevel').value;
      const deliverables = document.getElementById('sponsorDeliverables').value;

      const proposal = { id: Date.now(), company, contact, amount, level, deliverables, status: 'Pending' };
      sponsorProposals.push(proposal);

      const list = document.getElementById('sponsorsList');
      if (list.querySelector('.text-center')) {
        list.innerHTML = '';
      }

      const item = document.createElement('div');
      item.className = 'glass-card rounded-lg p-4 slide-in';
      item.innerHTML = `
        <div class="flex items-start justify-between mb-2">
          <div>
            <p class="font-semibold">${company}</p>
            <p class="text-sm text-gray-400">${contact}</p>
          </div>
          <span class="px-2 py-1 text-xs rounded bg-cyan-500/20 text-cyan-300">${level}</span>
        </div>
        <div class="text-sm text-gray-400 mb-2">
          <p>₹${amount.toLocaleString()}</p>
          <p class="mt-1">${deliverables}</p>
        </div>
        <div class="flex gap-2">
          <button class="flex-1 px-2 py-1 text-xs rounded bg-green-500/20 text-green-300 hover:bg-green-500/30">Approve</button>
          <button onclick="removeSponsor(${proposal.id})" class="flex-1 px-2 py-1 text-xs rounded bg-red-500/20 text-red-300 hover:bg-red-500/30">Reject</button>
        </div>
      `;
      list.appendChild(item);

      // Reset form
      document.getElementById('sponsorName').value = '';
      document.getElementById('sponsorContact').value = '';
      document.getElementById('sponsorAmount').value = '';
      document.getElementById('sponsorLevel').value = '';
      document.getElementById('sponsorDeliverables').value = '';

      showToast('Sponsorship proposal submitted!');
    }

    function removeSponsor(id) {
      sponsorProposals = sponsorProposals.filter(s => s.id !== id);
      const list = document.getElementById('sponsorsList');
      const items = list.querySelectorAll('.glass-card');
      items.forEach((item, index) => {
        if (index >= sponsorProposals.length) {
          item.remove();
        }
      });
    }

    // Approval Workflow
    function submitApproval(event) {
      event.preventDefault();

      const itemName = document.getElementById('approvalItemName').value;
      const type = document.getElementById('approvalType').value;
      const budget = parseInt(document.getElementById('approvalBudget').value || 0);
      const details = document.getElementById('approvalDetails').value;
      const level = document.getElementById('approvalLevel').value;

      const approval = { 
        id: Date.now(), 
        itemName, 
        type, 
        budget, 
        details, 
        level, 
        status: 'Pending',
        submittedAt: new Date().toLocaleString()
      };
      approvalRequests.push(approval);

      const list = document.getElementById('approvalsList');
      if (list.querySelector('.text-center')) {
        list.innerHTML = '';
      }

      const item = document.createElement('div');
      item.className = 'glass-card rounded-lg p-4 slide-in';
      item.innerHTML = `
        <div class="flex items-start justify-between mb-2">
          <div>
            <p class="font-semibold">${itemName}</p>
            <p class="text-sm text-gray-400">${type}</p>
          </div>
          <span class="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-300">Pending</span>
        </div>
        <div class="text-sm text-gray-400 mb-2">
          <p>Routed to: ${level}</p>
          ${budget ? `<p>Amount: ₹${budget.toLocaleString()}</p>` : ''}
          <p>${approval.submittedAt}</p>
        </div>
        <button onclick="removeApproval(${approval.id})" class="text-red-400 hover:text-red-300 text-sm">Withdraw</button>
      `;
      list.appendChild(item);

      // Reset form
      document.getElementById('approvalItemName').value = '';
      document.getElementById('approvalType').value = '';
      document.getElementById('approvalBudget').value = '';
      document.getElementById('approvalDetails').value = '';
      document.getElementById('approvalLevel').value = '';

      showToast('Approval request submitted!');
    }

    function removeApproval(id) {
      approvalRequests = approvalRequests.filter(a => a.id !== id);
      const list = document.getElementById('approvalsList');
      const items = list.querySelectorAll('.glass-card');
      items.forEach((item, index) => {
        if (index >= approvalRequests.length) {
          item.remove();
        }
      });
    }

    // Utility Functions
    function updateEventsList() {
      // Update any displays that show saved events
    }

    function filterVenues() {
      // Venue filtering logic
    }

    // Initialize Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  </script>
  </div>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ebad2c2c50693cb',t:'MTc3NjA4NzAwNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
// This creates the user in your Supabase database automatically
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
  })
  
  if (error) console.error('Error saving user:', error.message)
  else console.log('User saved successfully:', data.user)
}
