import { Star, TrendingUp, Users, Zap } from "lucide-react"

const Home = () => {
  const features = [
    {
      icon: Star,
      title: "Interactive Components",
      description: "Explore various React components with modern UI patterns"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimized",
      description: "Built with Vite for lightning-fast development and builds"
    },
    {
      icon: Users,
      title: "Responsive Design",
      description: "Fully responsive layout that works on all devices"
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Using React 19, Tailwind CSS, and latest web technologies"
    }
  ]

  return (
    <div className="w-full space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl hover-lift">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Welcome to My Dashboard
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            A modern, responsive React application showcasing various components and features.
            Navigate through the sidebar to explore different functionalities.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 animate-slide-in">
              <span className="text-sm font-medium">React 19</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 animate-slide-in" style={{animationDelay: '0.9s'}}>
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 animate-slide-in" style={{animationDelay: '0.9s'}}>
              <span className="text-sm font-medium">Vite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <feature.icon size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover-lift animate-fade-in" style={{animationDelay: '0.6s'}}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600">Components</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">Responsive</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">Fast</div>
            <div className="text-sm text-gray-600">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">Modern</div>
            <div className="text-sm text-gray-600">Design</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
