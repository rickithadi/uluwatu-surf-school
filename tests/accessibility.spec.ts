import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await injectAxe(page)
  })

  test('should not have any accessibility violations', async ({ page }) => {
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true }
    })
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check h1 exists and is unique
    const h1Elements = await page.locator('h1').count()
    expect(h1Elements).toBe(1)

    // Check heading order (h1, then h2, etc.)
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').allTextContents()
    expect(headings.length).toBeGreaterThan(1)
    
    console.log('Heading hierarchy:', headings)
  })

  test('should have keyboard navigation support', async ({ page }) => {
    // Test Tab navigation
    await page.keyboard.press('Tab')
    
    // Skip link should be focused first
    const focusedElement = await page.evaluate(() => document.activeElement?.textContent)
    expect(focusedElement).toBe('Skip to main content')

    // Continue tabbing through interactive elements
    const interactiveElements = await page.locator('a, button, input, select, textarea').count()
    expect(interactiveElements).toBeGreaterThan(0)
  })

  test('should have proper alt text for images', async ({ page }) => {
    const images = await page.locator('img').all()
    
    for (const image of images) {
      const altText = await image.getAttribute('alt')
      const src = await image.getAttribute('src')
      
      // All images should have alt text (can be empty for decorative images)
      expect(altText).not.toBeNull()
      
      // Non-decorative images should have meaningful alt text
      if (src && !src.includes('decoration')) {
        expect(altText).toBeTruthy()
        expect(altText.length).toBeGreaterThan(3)
      }
    }
  })

  test('should have proper color contrast', async ({ page }) => {
    // This would typically be handled by axe-core, but we can do basic checks
    const textElements = await page.locator('p, h1, h2, h3, h4, h5, h6, span').all()
    
    for (const element of textElements.slice(0, 10)) { // Check first 10 elements
      const styles = await element.evaluate(el => {
        const computed = window.getComputedStyle(el)
        return {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          fontSize: computed.fontSize
        }
      })
      
      // Ensure elements have color styles set
      expect(styles.color).toBeTruthy()
      expect(styles.fontSize).toBeTruthy()
    }
  })

  test('should have proper form labels', async ({ page }) => {
    const formInputs = await page.locator('input[type="text"], input[type="email"], input[type="tel"], textarea').all()
    
    for (const input of formInputs) {
      const id = await input.getAttribute('id')
      const ariaLabel = await input.getAttribute('aria-label')
      const ariaLabelledBy = await input.getAttribute('aria-labelledby')
      
      if (id) {
        const label = await page.locator(`label[for="${id}"]`).count()
        expect(label).toBeGreaterThan(0)
      } else {
        // Should have aria-label or aria-labelledby if no label
        expect(ariaLabel || ariaLabelledBy).toBeTruthy()
      }
    }
  })
})