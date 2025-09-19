module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['warn', { minScore: 0.5 }],
        
        // Core Web Vitals
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // Performance budgets
        'resource-summary:script:size': ['error', { maxNumericValue: 200000 }], // 200KB JS
        'resource-summary:image:size': ['warn', { maxNumericValue: 500000 }], // 500KB images
        'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 50000 }], // 50KB CSS
        'resource-summary:total:size': ['warn', { maxNumericValue: 1000000 }], // 1MB total
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      command: 'npm start',
      port: 3000,
      wait: 5000,
    },
  },
}