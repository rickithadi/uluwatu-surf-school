import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  test('should meet Core Web Vitals thresholds', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/')

    // Wait for page to fully load
    await page.waitForLoadState('networkidle')

    // Get Web Vitals metrics
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        const vitals = {}
        
        // LCP (Largest Contentful Paint)
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          vitals.lcp = lastEntry.startTime
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // FID would be measured with real user interaction
        // CLS (Cumulative Layout Shift)
        new PerformanceObserver((list) => {
          let cls = 0
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              cls += entry.value
            }
          }
          vitals.cls = cls
        }).observe({ entryTypes: ['layout-shift'] })

        // Give time to collect metrics
        setTimeout(() => resolve(vitals), 3000)
      })
    })

    console.log('Web Vitals:', metrics)

    // Assert LCP is under 2.5 seconds (good threshold)
    expect(metrics.lcp).toBeLessThan(2500)
    
    // Assert CLS is under 0.1 (good threshold)
    expect(metrics.cls).toBeLessThan(0.1)
  })

  test('should load images efficiently', async ({ page }) => {
    // Monitor network requests
    const imageRequests = []
    
    page.on('request', request => {
      if (request.resourceType() === 'image') {
        imageRequests.push({
          url: request.url(),
          size: 0
        })
      }
    })

    page.on('response', response => {
      if (response.request().resourceType() === 'image') {
        const request = imageRequests.find(req => req.url === response.url())
        if (request) {
          request.size = parseInt(response.headers()['content-length'] || '0')
        }
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check that images are reasonably sized
    for (const request of imageRequests) {
      if (request.size > 0) {
        // Images should be under 1MB for web optimization
        expect(request.size).toBeLessThan(1024 * 1024)
        console.log(`Image: ${request.url.split('/').pop()} - ${Math.round(request.size / 1024)}KB`)
      }
    }
  })

  test('should have fast page load times', async ({ page }) => {
    const startTime = Date.now()
    
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    
    const domLoadTime = Date.now() - startTime
    
    await page.waitForLoadState('networkidle')
    const fullLoadTime = Date.now() - startTime

    console.log(`DOM Load Time: ${domLoadTime}ms`)
    console.log(`Full Load Time: ${fullLoadTime}ms`)

    // DOM should load within 1.5 seconds
    expect(domLoadTime).toBeLessThan(1500)
    
    // Full page should load within 3 seconds
    expect(fullLoadTime).toBeLessThan(3000)
  })
})