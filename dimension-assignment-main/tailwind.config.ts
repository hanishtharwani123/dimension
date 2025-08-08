import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "gradient-x": "gradient-x 3s ease infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slow-reverse": "float-slow-reverse 10s ease-in-out infinite",
        "float-medium": "float-medium 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "blob": "blob 7s ease-in-out infinite",
        "blob-reverse": "blob-reverse 9s ease-in-out infinite",
        "connection-flow": "connection-flow 2s ease-in-out infinite",
        "float-particle": "float-particle 4s ease-in-out infinite"
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)"
          },
          "33%": {
            transform: "translateY(-20px) translateX(10px)"
          },
          "66%": {
            transform: "translateY(10px) translateX(-10px)"
          }
        },
        "float-slow-reverse": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)"
          },
          "33%": {
            transform: "translateY(15px) translateX(-15px)"
          },
          "66%": {
            transform: "translateY(-10px) translateX(15px)"
          }
        },
        "float-medium": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)"
          },
          "50%": {
            transform: "translateY(-15px) translateX(8px)"
          }
        },
        "twinkle": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)"
          }
        },
        "blob": {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          }
        },
        "blob-reverse": {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(-30px, 50px) scale(0.8)"
          },
          "66%": {
            transform: "translate(20px, -20px) scale(1.2)"
          }
        },
        "connection-flow": {
          "0%": {
            transform: "scaleX(0)",
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            transform: "scaleX(1)",
            opacity: "0.7"
          }
        },
        "float-particle": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.3"
          },
          "25%": {
            transform: "translateY(-10px) translateX(5px)",
            opacity: "1"
          },
          "50%": {
            transform: "translateY(-5px) translateX(-8px)",
            opacity: "0.7"
          },
          "75%": {
            transform: "translateY(-15px) translateX(3px)",
            opacity: "0.9"
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
