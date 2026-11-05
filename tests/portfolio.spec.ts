import { expect, test } from "@playwright/test";

test("mobile introduces the designer and brings work forward without loading 3D", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const requests: string[] = [];
  const errors: string[] = [];
  page.on("request", (request) =>
    requests.push(decodeURIComponent(request.url())),
  );
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Fadilah",
  );
  await expect(
    page.getByRole("link", { name: "Jelajahi karya" }),
  ).toHaveAttribute("href", "#projects");
  expect(
    await page
      .locator("#projects")
      .evaluate((element) => element.getBoundingClientRect().top + scrollY),
  ).toBeLessThan(844 * 1.7);
  await page.waitForTimeout(2500);
  await expect(page.locator("canvas")).toHaveCount(0);
  expect(
    requests.some((url) =>
      /card\.glb|lanyard\.png|fonts\.googleapis|fonts\.gstatic/.test(url),
    ),
  ).toBe(false);
  expect(response?.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response?.headers()["x-powered-by"]).toBeUndefined();
  await page.screenshot({ path: "artifacts/redesign-mobile.png" });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { name: "Nusafin", exact: true }),
  ).toBeVisible();
  const image = page.getByAltText("Pratinjau Nusafin");
  await expect
    .poll(() =>
      image.evaluate((element: HTMLImageElement) => element.naturalWidth),
    )
    .toBeGreaterThan(0);
  await page.screenshot({ path: "artifacts/redesign-mobile-projects.png" });
  expect(errors).toEqual([]);
});

test("project filters expose readable titles and all six project details work", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const filter = page.getByRole("group", { name: "Filter karya" });
  await filter.getByRole("button", { name: /UI\/UX Design/ }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "Nusafin", exact: true }),
  ).toBeVisible();
  await filter.getByRole("button", { name: /Development/ }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "AbsenKuy", exact: true }),
  ).toBeVisible();
  await filter.getByRole("button", { name: /Semua karya/ }).click();
  await expect(page.locator(".project-card")).toHaveCount(6);
  const titles = [
    "Web App Nusafin",
    "Mobile App Nita",
    "Mobile App Otto Parking",
    "Aplikasi AbsenKuy",
    "Undangan Pernikahan Digital",
    "Portfolio V2",
  ];
  for (const [index, title] of titles.entries()) {
    const opener = page.getByRole("button", {
      name: `Lihat proyek ${title}`,
      exact: true,
    });
    await opener.click();
    const dialog = page.getByRole("dialog", { name: title, exact: true });
    await expect(dialog).toBeVisible();
    const image = dialog.getByAltText(`${title} - image 1`, { exact: true });
    await expect
      .poll(() =>
        image.evaluate((element: HTMLImageElement) => element.naturalWidth),
      )
      .toBeGreaterThan(0);
    await dialog
      .getByRole("button", { name: "Gambar berikutnya", exact: true })
      .click();
    await expect(
      dialog.getByAltText(`${title} - image 2`, { exact: true }),
    ).toBeVisible();
    await page.keyboard.press("ArrowLeft");
    await expect(
      dialog.getByAltText(`${title} - image 1`, { exact: true }),
    ).toBeVisible();
    await expect(
      dialog.getByText("KONTEKS PROYEK", { exact: true }),
    ).toBeVisible();
    await dialog.getByRole("button", { name: "Tutup detail proyek" }).focus();
    await page.keyboard.press("Shift+Tab");
    expect(
      await dialog.evaluate((element) =>
        element.contains(document.activeElement),
      ),
    ).toBe(true);
    if (index === 0)
      await page.screenshot({ path: "artifacts/redesign-modal.png" });
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(opener).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
      "hidden",
    );
  }
});

test("mobile navigation, contact destination and responsive layouts remain usable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Buka menu" });
  await toggle.click();
  await expect(
    page.getByRole("navigation", { name: "Navigasi utama" }),
  ).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Tentang", exact: true })
    .click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#about$/);
  await toggle.click();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await expect(
    page.getByRole("link", { name: "Terhubung di LinkedIn" }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/fadilah-aprianto-6a651b322",
  );
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect
      .poll(
        () =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        { message: `overflow at ${width}px` },
      )
      .toBe(true);
  }
});

test("desktop loads the optional lanyard, pauses offscreen and respects reduced motion", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("canvas")).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('[data-scene="lanyard"] > div').first()).toHaveCSS(
    "opacity",
    "0",
    { timeout: 30_000 },
  );
  await page.screenshot({ path: "artifacts/redesign-desktop.png" });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await expect(page.locator("canvas")).toBeHidden();
  expect(errors).toEqual([]);
  await context.close();
  const reduced = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const staticPage = await reduced.newPage();
  await staticPage.goto("/");
  await staticPage.waitForTimeout(2000);
  await expect(staticPage.locator("canvas")).toHaveCount(0);
  for (const id of [
    "projects",
    "about",
    "approach",
    "certificates",
    "contact",
  ]) {
    const section = staticPage.locator(`#${id}`);
    await section.scrollIntoViewIfNeeded();
    await expect(section.getByRole("heading", { level: 2 })).toBeVisible();
    await staticPage.screenshot({ path: `artifacts/redesign-${id}.png` });
  }
  await reduced.close();
});
