import Link from 'next/link';
import { ArrowRight, Brain, ShoppingBag, Sparkles, Users, Zap, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Revolutioniere dein Shopping-Erlebnis mit KI
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              SmartMatch Marketplace
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Die KI versteht nicht nur <span className="font-semibold text-purple-600">was</span> du suchst,
              sondern auch <span className="font-semibold text-purple-600">warum</span> du es brauchst
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-shopping"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Brain className="w-5 h-5" />
                SmartMatch AI starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <ShoppingBag className="w-5 h-5" />
                Marketplace erkunden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Einzigartige Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Mehr als nur ein Marktplatz - eine intelligente Shopping-Revolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SmartMatch AI */}
            <div className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 dark:border-purple-900">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">SmartMatch AI Shopping</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                KI versteht deine Emotionen, Bedürfnisse und dein Budget. Finde Produkte basierend auf deinem Gefühl, nicht nur Keywords.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Emotionale Produktsuche
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Bedarfsanalyse
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Budget-Optimierung
                </div>
              </div>
            </div>

            {/* Live Shopping */}
            <div className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 dark:border-red-900">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Live Shopping Sessions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Verkäufer präsentieren Produkte live. Stelle Fragen, erhalte Demos und profitiere von exklusiven Live-Angeboten.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Echtzeit-Interaktion
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Flash-Sales
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Produkt-Demos
                </div>
              </div>
            </div>

            {/* Seller Stories */}
            <div className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-900">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Seller Storytelling</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Jedes Produkt hat eine Geschichte. Verkäufer teilen ihre Passion und die Entstehung ihrer Produkte.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Authentische Geschichten
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Vertrauensbildung
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Community-Aufbau
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">0+</div>
              <div className="text-purple-100">Aktive Verkäufer</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0+</div>
              <div className="text-purple-100">Produkte</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="text-purple-100">KI-Trefferquote</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Live Shopping</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-12 border border-purple-200 dark:border-purple-800">
            <h2 className="text-4xl font-bold mb-4">
              Bereit für die Zukunft des E-Commerce?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Werde Teil der SmartMatch Revolution - als Käufer oder Verkäufer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Jetzt kostenlos starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/seller/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <TrendingUp className="w-5 h-5" />
                Als Verkäufer registrieren
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
