import { test, expect } from '@playwright/test';

test.describe('Club de Economía UA - Home', () => {
  test('carga la home sin error 500', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Club de Economia UA/i);
  });

  test('muestra hero con título y CTAs', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Club de Economía UA/i })).toBeVisible();
    await expect(page.getByText(/Universidad de Alicante/i).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Únete Ahora/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Más Información/i })).toBeVisible();
  });

  test('navegación header visible y funcional', async ({ page }) => {
    await page.goto('/');
    // Desktop nav
    await expect(page.getByRole('link', { name: /Club de Economía UA/i }).first()).toBeVisible();
    // CosmicNavigation items (desktop)
    await expect(page.locator('header')).toBeVisible();
  });

  test('secciones principales renderizan', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Nuestra Misión/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Nuestra Visión/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Sobre Nosotros/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Featured Articles/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Directorio de Miembros/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Recursos$/i })).toBeVisible();
  });

  test('artículos tienen links y navegan a detalle', async ({ page, context }) => {
    await page.goto('/');
    const firstArticleLink = page.locator('a[href^="/articles/"]').first();
    await expect(firstArticleLink).toBeVisible();
    // Los links tienen target="_blank", capturamos el popup
    const [articlePage] = await Promise.all([
      context.waitForEvent('page'),
      firstArticleLink.click(),
    ]);
    await articlePage.waitForLoadState();
    await expect(articlePage).toHaveURL(/\/articles\//);
    await expect(articlePage.locator('body')).not.toContainText('Article not found');
    await articlePage.close();
  });

  test('artículo inexistente muestra fallback', async ({ page }) => {
    await page.goto('/articles/no-existe-xyz');
    await expect(page.getByText(/Article not found/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Return Home/i })).toBeVisible();
  });

  test('footer visible con contacto', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText(/info@clubeconomiaua\.es/i)).toBeVisible();
  });

  test('no hay errores de consola críticos (useContent)', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const critical = errors.filter((e) => e.includes('useContent') || e.includes('Attempted to call'));
    expect(critical, `Errores críticos: ${critical.join('\n')}`).toEqual([]);
  });

  test('responsive: menú móvil abre', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const menuBtn = page.getByRole('button', { name: /Toggle menu/i });
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    // SheetContent usa Radix Dialog, esperamos a que sea visible
    const sheet = page.locator('[role="dialog"]');
    await expect(sheet).toBeVisible({ timeout: 5000 });
    await expect(sheet.getByRole('link', { name: 'Home' })).toBeVisible();
  });
});
