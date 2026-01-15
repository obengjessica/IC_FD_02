import React, { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  Bell,
  CheckCircle,
  Users,
  Zap,
  Award,
  Search,
} from "lucide-react";
import man from "./assets/man.mp4";
import man1 from "./assets/man1.mp4";
import rob from "./assets/rob.mp4";
import wall from "./assets/wall.mp4";
import he from "./assets/he.jpeg";
import him from "./assets/him.jpg";
import she from "./assets/she.jpeg";
import her from "./assets/her.jpg";

// I've added custom animations to my document here
const styles = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.05); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scan {
    0% { top: -10%; }
    100% { top: 110%; }
  }
  
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 20px currentColor, 0 0 40px currentColor; }
    50% { box-shadow: 0 0 30px currentColor, 0 0 60px currentColor; }
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  
  .animate-spin-reverse {
    animation: spin-reverse 6s linear infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animate-scan {
    animation: scan 3s ease-in-out infinite;
  }
  
  .glow-text {
    text-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
  }
  
  .glow-text-blue {
    color: #60a5fa;
    text-shadow: 0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6;
  }
  
  .glow-text-green {
    color: #4ade80;
    text-shadow: 0 0 20px #22c55e, 0 0 40px #22c55e, 0 0 60px #22c55e;
  }
  
  .glow-text-red {
    color: #f87171;
    text-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444;
  }
  
  .glow-effect {
    box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
  }
  
  .glow-border {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(black, black) padding-box,
                linear-gradient(45deg, #3b82f6, #22c55e, #ef4444) border-box;
  }
`;

const HeroSection = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);

  const handleSecurityCheckup = async () => {
    setIsChecking(true);
    setCheckComplete(false);

    // Simulate security checkup process
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsChecking(false);
    setCheckComplete(true);

    // Reset after 5 seconds
    setTimeout(() => setCheckComplete(false), 5000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      {/* Full-screen video background */}
      <video
        src={rob}
        controls={false}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto relative group">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin-slow" />
            <div className="absolute inset-2 rounded-full border-4 border-green-500/30 animate-spin-reverse" />
            <div className="absolute inset-4 rounded-full border-4 border-red-500/30 animate-spin-slow" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                  <Shield className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="inline-block bg-gradient-to-r from-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
            Your Digital Safety,
          </span>
          <br />
          <span
            className="inline-block bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-gradient-x"
            style={{ animationDelay: "0.2s" }}
          >
            Simplified
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Protect yourself from{" "}
          <span className="text-red-400 font-semibold glow-text">
            phishing attacks
          </span>
          ,
          <span className="text-blue-400 font-semibold glow-text">
            {" "}
            online scams
          </span>
          , and
          <span className="text-green-400 font-semibold glow-text">
            {" "}
            data leaks
          </span>{" "}
          with real-time threat detection
        </p>

        <p
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Our advanced AI-powered platform monitors, detects, and blocks
          malicious threats before they reach you.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={handleSecurityCheckup}
            disabled={isChecking}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 disabled:opacity-70"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isChecking ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Scanning...
                </>
              ) : checkComplete ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Checkup Complete!
                </>
              ) : (
                <>
                  Get Protected Now
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                </>
              )}
            </span>
          </button>
          <button 
            onClick={() => window.open('https://www.cisa.gov/secure-our-world', '_blank')}
            className="group relative px-8 py-4 bg-white/5 text-white rounded-lg font-semibold backdrop-blur-sm border-2 border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More
              <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          {["256-bit Encryption", "ISO Certified", "GDPR Compliant"].map(
            (badge, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 animate-fade-in-up hover:border-blue-500/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                style={{ animationDelay: `${1 + i * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

// Live Threat Counter
const ThreatCounter = () => {
  const [threats, setThreats] = useState(847532);
  const [phishing, setPhishing] = useState(12847);
  const [dataLeaks, setDataLeaks] = useState(3421);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats((prev) => prev + Math.floor(Math.random() * 10));
      setPhishing((prev) => prev + Math.floor(Math.random() * 3));
      setDataLeaks((prev) => prev + Math.floor(Math.random() * 2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const counterCards = [
    {
      label: "Threats Blocked",
      value: threats,
      color: "red",
      icon: Shield,
      gradient: "from-red-500 to-red-700",
    },
    {
      label: "Phishing Attempts Detected",
      value: phishing,
      color: "blue",
      icon: Eye,
      gradient: "from-blue-500 to-blue-700",
    },
    {
      label: "Data Leaks Prevented",
      value: dataLeaks,
      color: "green",
      icon: Lock,
      gradient: "from-green-500 to-green-700",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm font-semibold animate-pulse">
              🔴 LIVE
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in-up glow-text-blue">
            Live Threat Protection
          </h2>
          <p
            className="text-gray-400 text-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Real-time monitoring across our global network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counterCards.map((card, index) => {
            const Icon = card.icon;
            const colorMap = {
              red: {
                text: "text-red-400",
                bg: "bg-red-500/20",
                border: "border-red-500/50",
                shadow: "shadow-red-500/50",
              },
              blue: {
                text: "text-blue-400",
                bg: "bg-blue-500/20",
                border: "border-blue-500/50",
                shadow: "shadow-blue-500/50",
              },
              green: {
                text: "text-green-400",
                bg: "bg-green-500/20",
                border: "border-green-500/50",
                shadow: "shadow-green-500/50",
              },
            };
            const colors = colorMap[card.color];

            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/10 hover:${colors.border} transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className={`absolute w-full h-1 bg-gradient-to-r ${card.gradient} opacity-50 animate-scan`}
                  />
                </div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-8 h-8 ${colors.text} group-hover:animate-pulse`}
                    />
                  </div>
                  <div
                    className={`text-5xl font-bold text-white mb-2 font-mono transition-all duration-300 group-hover:${colors.text}`}
                  >
                    {card.value.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">
                    {card.label}
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <div
                      className={`w-2 h-2 ${colors.bg} rounded-full animate-ping`}
                    />
                    <span className="text-xs text-gray-500">Updated now</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: "Real-Time Protection",
      description:
        "AI-powered threat detection monitors your digital activity 24/7, blocking malicious content instantly.",
      color: "blue",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Phishing Detection",
      description:
        "Advanced algorithms identify and block phishing attempts across email, SMS, and web platforms.",
      color: "red",
      icon: Eye,
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Data Encryption",
      description:
        "Military-grade encryption keeps your sensitive information secure from unauthorized access.",
      color: "green",
      icon: Lock,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Instant Alerts",
      description:
        "Get notified immediately when suspicious activity is detected on any of your accounts.",
      color: "blue",
      icon: Bell,
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Powerful <span className="glow-text-green">Security Features</span>
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Comprehensive protection powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorMap = {
              red: { text: "text-red-400", hover: "hover:text-red-400" },
              blue: { text: "text-blue-400", hover: "hover:text-blue-400" },
              green: { text: "text-green-400", hover: "hover:text-green-400" },
            };
            const colors = colorMap[feature.color];

            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                />

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <video src={wall} controls={false} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-xl`}
                      />
                      <Icon
                        className={`w-8 h-8 ${colors.text} relative z-10 group-hover:animate-pulse`}
                      />
                    </div>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-white mb-3 ${colors.hover} transition-colors duration-300`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-4 flex items-center text-sm text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                    <span className="mr-2">Learn more</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Connect",
      description:
        "Create your account in under 2 minutes and connect your devices for instant protection.",
      icon: Users,
      color: "blue",
    },
    {
      number: "02",
      title: "AI Monitors Threats",
      description:
        "Our advanced AI continuously scans for phishing, malware, and suspicious activities in real-time.",
      icon: Zap,
      color: "green",
    },
    {
      number: "03",
      title: "Stay Protected",
      description:
        "Receive instant alerts and automatic threat blocking. Browse, shop, and communicate safely.",
      icon: Award,
      color: "red",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            How It <span className="glow-text-blue">Works</span>
          </h2>
          <p
            className="text-gray-400 text-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Simple setup, powerful protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorMap = {
              red: {
                text: "text-red-400",
                bg: "bg-red-500/20",
                border: "border-red-500/30",
                borderHover: "group-hover:border-red-500/50",
                gradient: "from-red-600 to-red-700",
                shadow: "shadow-red-500/50",
                hover: "hover:text-red-400",
              },
              blue: {
                text: "text-blue-400",
                bg: "bg-blue-500/20",
                border: "border-blue-500/30",
                borderHover: "group-hover:border-blue-500/50",
                gradient: "from-blue-600 to-blue-700",
                shadow: "shadow-blue-500/50",
                hover: "hover:text-blue-400",
              },
              green: {
                text: "text-green-400",
                bg: "bg-green-500/20",
                border: "border-green-500/30",
                borderHover: "group-hover:border-green-500/50",
                gradient: "from-green-600 to-green-700",
                shadow: "shadow-green-500/50",
                hover: "hover:text-green-400",
              },
            };
            const colors = colorMap[step.color];

            return (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 -z-10">
                    <div className="w-full h-full bg-gradient-to-r from-blue-500/50 via-green-500/50 to-transparent animate-pulse" />
                  </div>
                )}

                <div className="text-center group">
                  <div className="mb-6 relative inline-block">
                    <div
                      className={`absolute inset-0 rounded-full border-2 ${colors.border} animate-spin-slow`}
                    />
                    <div
                      className={`absolute inset-2 rounded-full border-2 ${colors.bg} animate-spin-reverse`}
                    />

                    <div
                      className={`w-32 h-32 mx-auto bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 relative group-hover:scale-110 ${colors.borderHover} transition-all duration-500`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`}
                      />

                      <video src={man} controls={false} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      <Icon
                        className={`w-12 h-12 ${colors.text} relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      />
                    </div>

                    <div
                      className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-black shadow-lg ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold text-white mb-3 ${colors.hover} transition-colors duration-300`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>

                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => {
                      const isActive = i === index;
                      return (
                        <div
                          key={i}
                          className={`w-8 h-1 rounded-full transition-all duration-300 ${
                            isActive
                              ? `${colors.bg} glow-effect`
                              : "bg-white/10"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Obeng Jessica",
      role: "Small Business Owner",
      content:
        "This platform saved my business from a major phishing attack. The real-time alerts caught the threat before any damage was done. Highly recommended!",
      rating: 5,
      color: "blue",
      profileImage: she,
    },
    {
      name: "Henry Armah",
      role: "Security Analyst",
      content:
        "IT solutions have been depending on this site for good. The AI detection came at the right time, moment and hour for our safety.",
      rating: 4,
      color: "red",
      profileImage: her,
    },
    {
      name: "Afriyie Armscarder",
      role: "IT Manager",
      content:
        "We've deployed this across our entire organization. The AI detection is incredibly accurate, and our employees feel much safer online.",
      rating: 5,
      color: "green",
      profileImage: he,
    },
    {
      name: "Derrick Smith",
      role: "Freelance Designer",
      content:
        "As someone who handles sensitive client data, this tool gives me peace of mind. The interface is intuitive and the protection is top-notch.",
      rating: 3,
      color: "red",
      profileImage: him,
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Trusted by <span className="glow-text-green">Thousands</span>
          </h2>
          <p
            className="text-gray-400 text-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            See what our users have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => {
            const colorMap = {
              red: {
                border: "hover:border-red-500/50",
                gradient: "from-red-500 to-red-700",
              },
              blue: {
                border: "hover:border-blue-500/50",
                gradient: "from-blue-500 to-blue-700",
              },
              green: {
                border: "hover:border-green-500/50",
                gradient: "from-green-500 to-green-700",
              },
            };
            const colors = colorMap[testimonial.color];

            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/10 ${colors.border} transition-all duration-500 animate-fade-in-up hover:transform hover:-translate-y-2 overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="absolute top-4 right-4 text-6xl text-white/5 font-serif">
                  "
                </div>

                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-xl animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    {testimonial.profileImage ? (
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white/20 group-hover:border-white/50 group-hover:scale-110 transition-all duration-300"
                      />
                      ) : (
                        <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 rounded-full`}/>
                        </div>
                      )}
                    <div>
                      <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 border-2 border-black"
                />
              ))}
            </div>
            <span className="text-gray-300">
              <span className="text-white font-bold">50,000+</span> Protected
              Users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Email Subscription Section
const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      setIsSuccess(false);
      return;
    }

    setMessage("🎉 Success! Check your inbox for your security guide.");
    setIsSuccess(true);
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-blue-600/20 to-green-600/20 backdrop-blur-lg rounded-3xl p-12 border-2 border-white/20 text-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text-blue">
              Stay Informed
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly cybersecurity tips, threat alerts, and exclusive
              insights delivered to your inbox
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300"
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
                />
                <button
                  onClick={handleSubmit}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-green-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative z-10">Subscribe</span>
                </button>
              </div>

              {message && (
                <div
                  className={`mt-4 p-4 rounded-lg animate-fade-in-up ${
                    isSuccess
                      ? "bg-green-500/20 text-green-400 border-2 border-green-500/50"
                      : "bg-red-500/20 text-red-400 border-2 border-red-500/50"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm mt-6 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              No spam, unsubscribe anytime. Your data is protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full" />
                <Shield className="w-8 h-8 text-blue-400 mr-2 relative z-10 group-hover:animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                SecureGuard
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Protecting your digital life with advanced AI-powered security
              solutions. Stay safe, stay secure.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>
            © 2026 SecureGuard. All rights reserved. | Built for Interncred
            Frontend Development Internship
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-red-900/20 -z-10" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10" />

        {/* Floating particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <HeroSection />
        <ThreatCounter />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <SubscriptionSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
