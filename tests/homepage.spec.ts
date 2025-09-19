import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Uluwatu Surf School/)
  })

  test('should display main navigation', async ({ page }) => {
    // Check if header exists
    await expect(page.locator('header')).toBeVisible()
    
    // Check navigation items
    const navItems = ['Home', 'About', 'Courses', 'Instructors', 'Contact']
    for (const item of navItems) {
      await expect(page.getByRole('link', { name: item })).toBeVisible()
    }
  })

  test('should display hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Master the Waves/ })).toBeVisible()
    await expect(page.getByText(/Experience world-class surf coaching/)).toBeVisible()
    
    // Check CTA buttons
    await expect(page.getByRole('button', { name: /Start Your Journey/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Watch Video/ })).toBeVisible()
  })

  test('should display stats overlay', async ({ page }) => {
    await expect(page.getByText('15+')).toBeVisible()
    await expect(page.getByText('Years Experience')).toBeVisible()
    await expect(page.getByText('2000+')).toBeVisible()
    await expect(page.getByText('Students Taught')).toBeVisible()
  })

  test('should be mobile responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Hero section should still be visible
    await expect(page.getByRole('heading', { name: /Master the Waves/ })).toBeVisible()
    
    // Mobile menu button should be visible
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible()
  })

  test('should have accessible navigation', async ({ page }) => {
    // Check skip link
    await expect(page.getByText('Skip to main content')).toBeInViewport()
    
    // Check heading hierarchy
    const h1 = page.locator('h1')
    await expect(h1).toHaveCount(1)
    await expect(h1).toContainText('Master the Waves')
  })
})