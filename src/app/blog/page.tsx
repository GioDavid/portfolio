"use client";

import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Article = {
  title: string;
  content: string;
  code?: string;
};

const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      name: 'JavaScript',
      articles: [
        {
          title: 'Understanding React Hooks',
          content: 'React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 to allow functional components to have state and side effects. \n\n    **Detailed Explanation**:\n    - Motivation: Hooks solve problems with class components, such as complex lifecycle methods and state logic.\n    - Lifecycle Comparison: Hooks like `useEffect` replace lifecycle methods like `componentDidMount`.\n    - Common Patterns: Use hooks for data fetching, subscriptions, and more.\n\n    **Advanced Examples**:\n    - Custom Hooks: Create reusable logic for forms, authentication, etc.\n    - Complex State Management: Use `useReducer` for managing complex state.\n\n    **Example**:',
          code: `const [count, setCount] = useState(0);`
        },
        {
          title: 'JavaScript ES6 Features',
          content: 'ES6 introduced many new features to JavaScript, making it more powerful and easier to write.\n\n    **Detailed Explanation**:\n    - Generators: Functions that can be paused and resumed, useful for async tasks.\n    - Proxies: Intercept and redefine operations on objects.\n    - Async/Await: Simplifies working with promises.\n\n    **Examples**:\n    - Use generators for lazy evaluation.\n    - Implement proxies for validation and logging.\n    - Async/await for cleaner asynchronous code.\n\n    **Example**:',
          code: `const add = (a, b) => a + b;`
        },
        {
          title: 'TypeScript Basics',
          content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static typing, classes, and interfaces to help developers build robust applications.\n\n    **Detailed Explanation**:\n    - Advanced Types: Explore union, intersection, and mapped types.\n    - Generics: Create reusable components and functions.\n    - Decorators: Add metadata to classes and methods.\n\n    **Examples**:\n    - Use generics for type-safe collections.\n    - Decorators for dependency injection.\n\n    **Example**:',
          code: `
    interface User {
      name: string;
      age: number;
    }
    const user: User = { name: 'Alice', age: 25 };
    `
        }
      ]
    },
    {
      name: 'Web Development',
      articles: [
        {
          title: 'Getting Started with Next.js',
          content: 'Next.js is a powerful framework for building server-side rendered applications with React. It provides features like automatic code splitting, server-side rendering, and static site generation.\n\n    **Detailed Explanation**:\n    - API Routes: Create serverless functions for backend logic.\n    - Dynamic Routing: Implement dynamic routes with file-based routing.\n    - Deployment: Deploy to platforms like Vercel and Netlify.\n\n    **Examples**:\n    - Integrate with databases using API routes.\n    - Implement authentication with NextAuth.js.\n\n    **Example**:',
          code: `npx create-next-app my-next-app`
        },
        {
          title: 'Responsive Web Design',
          content: 'Responsive web design ensures that web applications look good on all devices, from desktops to mobile phones. It involves using flexible layouts, images, and CSS media queries.\n\n    **Detailed Explanation**:\n    - Mobile-First Design: Start with mobile styles and enhance for larger screens.\n    - Breakpoints: Define breakpoints for different device sizes.\n    - Performance: Optimize images and resources for faster loading.\n\n    **Examples**:\n    - Responsive navigation with flexbox.\n    - Adaptive images with `srcset`.\n\n    **Example**:',
          code: `
    @media (max-width: 600px) {
      .container {
        flex-direction: column;
      }
    }
    `
        },
        {
          title: 'CSS Grid Layout',
          content: 'CSS Grid Layout is a two-dimensional layout system for the web. It allows developers to create complex layouts with ease.\n\n    **Detailed Explanation**:\n    - Grid Properties: Use `grid-template-areas`, `grid-auto-flow`, and more.\n    - Responsive Design: Create responsive grids with media queries.\n\n    **Examples**:\n    - Complex layouts with named grid areas.\n    - Responsive grids with fractional units.\n\n    **Example**:',
          code: `
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 10px;
    }
    .grid-item {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 20px;
      font-size: 30px;
      text-align: center;
    }
    `
        }
      ]
    },
    {
      name: 'Accessibility',
      articles: [
        {
          title: 'Web Accessibility Basics',
          content: 'Web accessibility ensures that websites are usable by people with disabilities. It involves designing and developing websites that can be navigated and understood by everyone.\n\n    **Detailed Explanation**:\n    - WCAG Guidelines: Follow WCAG 2.1 for accessibility standards.\n    - Testing Tools: Use tools like Axe and Lighthouse for testing.\n    - Common Pitfalls: Avoid common accessibility issues like missing alt text.\n\n    **Examples**:\n    - Accessible forms with labels and error messages.\n    - Keyboard navigation for interactive elements.\n\n    **Example**:',
          code: `
    <button aria-label="Close dialog" class="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      Close
    </button>
    `
        },
        {
          title: 'ARIA Roles and Properties',
          content: 'ARIA (Accessible Rich Internet Applications) roles and properties enhance the accessibility of web content. They provide additional information to assistive technologies.\n\n    **Key Concepts**:\n    - Roles: Define the purpose of an element, such as `button` or `navigation`.\n    - Properties: Provide additional information, like `aria-label` for labeling elements.\n    - States: Indicate dynamic changes, such as `aria-expanded` for collapsible sections.\n\n    **Examples**:\n    - Use `role="alert"` for important messages.\n    - `aria-live="polite"` for non-intrusive updates.\n\n    **Example**:',
          code: `
    <div role="alert" aria-live="polite">
      New updates available!
    </div>
    `
        },
        {
          title: 'Color Contrast and Readability',
          content: 'Ensuring sufficient color contrast is crucial for readability, especially for users with visual impairments.\n\n    **Guidelines**:\n    - Contrast Ratio: Maintain a minimum contrast ratio of 4.5:1 for normal text.\n    - Tools: Use contrast checkers like WebAIM to evaluate color combinations.\n    - Design: Choose colors that enhance readability and avoid color reliance for conveying information.\n\n    **Examples**:\n    - High contrast text for better visibility.\n    - Avoid using color alone to indicate status.\n\n    **Example**:',
          code: `
    <style>
      .high-contrast {
        color: #000;
        background-color: #fff;
      }
    </style>
    <div class="high-contrast">
      This text has high contrast.
    </div>
    `
        },
        {
          title: 'Accessible Forms',
          content: 'Forms should be accessible to all users, including those using screen readers.\n\n    **Best Practices**:\n    - Labels: Ensure every form element has a label.\n    - Instructions: Provide clear instructions and error messages.\n    - Keyboard Navigation: Ensure forms can be navigated using a keyboard.\n\n    **Examples**:\n    - Use `label` elements for form controls.\n    - Provide `aria-describedby` for additional instructions.\n\n    **Example**:',
          code: `
    <label for="email">Email:</label>
    <input type="email" id="email" aria-describedby="emailHelp">
    <small id="emailHelp">We'll never share your email.</small>
    `
        },
        {
          title: 'Keyboard Accessibility',
          content: 'Ensuring that all functionality is accessible via keyboard is essential for users who cannot use a mouse.\n\n    **Techniques**:\n    - Focus Management: Ensure focus is visible and logical.\n    - Skip Links: Provide skip links to bypass repetitive content.\n    - Interactive Elements: Ensure all interactive elements are keyboard accessible.\n\n    **Examples**:\n    - Use `tabindex` to manage focus order.\n    - Provide `:focus` styles for interactive elements.\n\n    **Example**:',
          code: `
    <a href="#maincontent" class="skip-link">Skip to main content</a>
    <style>
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px;
        z-index: 100;
      }
      .skip-link:focus {
        top: 0;
      }
    </style>
    `
        },
        {
          title: 'Accessible Multimedia',
          content: 'Multimedia content should be accessible to all users, including those with hearing or visual impairments.\n\n    **Strategies**:\n    - Captions: Provide captions for all video content.\n    - Transcripts: Offer transcripts for audio content.\n    - Descriptions: Include audio descriptions for visual content.\n\n    **Examples**:\n    - Use `track` elements for video captions.\n    - Provide downloadable transcripts for podcasts.\n\n    **Example**:',
          code: `
    <video controls>
      <source src="movie.mp4" type="video/mp4">
      <track kind="captions" src="captions_en.vtt" srclang="en" label="English">
    </video>
    `
        }
      ]
    }
  ];

  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax') as HTMLElement;
      if (parallax) {
        const offset = window.pageYOffset;
        parallax.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen" role="main">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 mb-10" role="banner">
        <h1 className="text-5xl font-extrabold text-center" tabIndex={0}>Welcome to the Development Blog</h1>
        <p className="text-center mt-4 text-lg" tabIndex={0}>Insights and tutorials on modern web development</p>
      </div>
      <div className="max-w-4xl mx-auto p-6" role="region" aria-label="Articles">
        {categories.map((category, catIndex) => (
          <section key={catIndex} className="mb-10">
            <h2 className="text-4xl font-bold text-indigo-700 mb-6">{category.name}</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {category.articles.map((article, index) => (
                <article key={index} className="p-6 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer text-blue-700" onClick={() => openModal(article)} tabIndex={0} role="button" aria-pressed="false">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{article.title}</h3>
                  <div className="text-gray-700">
                    <p className="mb-2">{article.content.split('\n\n')[0]}</p>
                    {article.content.split('\n\n').slice(1).map((section, i) => (
                      <div key={i} className="mb-4">
                        <h4 className="text-xl font-semibold mb-2 text-blue-950">{section.split(':')[0].replace(/\*\*/g, '')}</h4>
                        <p>{section.split(':').slice(1).join(':')}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 id="dialog-title" className="text-3xl font-bold mb-4 text-indigo-700">{selectedArticle.title}</h2>
            <p className="text-gray-700 mb-6">{selectedArticle.content.split('\n\n')[0]}</p>
            {selectedArticle.content.split('\n\n').slice(1).map((section, i) => (
              <div key={i} className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-blue-950">{section.split(':')[0].replace(/\*\*/g, '')}</h4>
                <p className="text-gray-600">{section.split(':').slice(1).join(':')}</p>
              </div>
            ))}
            <SyntaxHighlighter language="javascript" style={solarizedlight} className="rounded-lg">
              {selectedArticle.code ?? ''}
            </SyntaxHighlighter>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={closeModal} aria-label="Close dialog">Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .parallax {
          background-image: url('/path/to/your/image.jpg');
          min-height: 400px;
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      <div className="parallax"></div>
    </div>
  );
};

export default BlogPage; 