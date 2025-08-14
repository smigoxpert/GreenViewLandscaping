import { test, expect } from '@playwright/test'

test.describe('Landscaping Website', () => {
  test('should navigate through main pages', async ({ page }) => {
    // Navigate to home page
    await page.goto('/')

    // Check if navbar is visible
    await expect(page.locator('nav')).toBeVisible()

    // Check if hero section is visible
    await expect(page.locator('h1')).toContainText('Transform Your')

    // Navigate to services page
    await page.click('text=Services')
    await expect(page).toHaveURL('/services')
    await expect(page.locator('h1')).toContainText('Our Services')

    // Navigate to contact page
    await page.click('text=Contact')
    await expect(page).toHaveURL('/contact')
    await expect(page.locator('h1')).toContainText("Let's Connect")

    // Navigate back to home
    await page.click('text=Green View')
    await expect(page).toHaveURL('/')
  })

  test('should display services grid on home page', async ({ page }) => {
    await page.goto('/')

    // Check if services section is visible
    await expect(page.locator('text=Our Services')).toBeVisible()

    // Check if all 6 service cards are displayed
    const serviceCards = page.locator('[data-testid="service-card"]')
    await expect(serviceCards).toHaveCount(6)
  })

  test('should handle contact form submission', async ({ page }) => {
    await page.goto('/contact')

    // Fill out the contact form
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="phone"]', '555-0123')
    await page.selectOption('select[name="service"]', 'lawn-maintenance')
    await page.fill(
      'textarea[name="message"]',
      'I need help with my lawn maintenance.'
    )

    // Submit the form
    await page.click('button[type="submit"]')

    // Check for success message
    await expect(page.locator('text=Thank You!')).toBeVisible()
  })

  test('should be responsive on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    await page.goto('/')

    // Check if mobile menu button is visible
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible()

    // Open mobile menu
    await page.click('button[aria-label="Toggle menu"]')

    // Check if mobile menu items are visible
    await expect(page.locator('text=Home')).toBeVisible()
    await expect(page.locator('text=Services')).toBeVisible()
    await expect(page.locator('text=Contact')).toBeVisible()
  })

  test('should have proper accessibility features', async ({ page }) => {
    await page.goto('/')

    // Check if main heading has proper hierarchy
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()

    // Check if images have alt text
    const images = page.locator('img')
    for (const img of await images.all()) {
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }

    // Check if buttons have proper labels
    const buttons = page.locator('button')
    for (const button of await buttons.all()) {
      const ariaLabel = await button.getAttribute('aria-label')
      const text = await button.textContent()
      expect(ariaLabel || text).toBeTruthy()
    }
  })
})
