import { expect, test } from "@playwright/test";

test("mobile shows content immediately without loading 3D or full project galleries", async ({
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
  await expect(
    page.getByRole("heading", { name: "Fadilah Aprianto" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Lihat Portofolio Saya" }),
  ).toBeVisible();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  // Stay on the hero longer than the optional 3D loading delay.
  await page.waitForTimeout(3000);
  await expect(page.locator("canvas")).toHaveCount(0);
  expect(
    requests.some((url) => /card\.glb|lanyard\.png|Cover\d|Thumb\d/.test(url)),
  ).toBe(false);
  expect(
    requests.some((url) => /fonts\.googleapis|fonts\.gstatic/.test(url)),
  ).toBe(false);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(response?.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response?.headers()["x-powered-by"]).toBeUndefined();
  await page.screenshot({ path: "artifacts/mobile.png" });
  expect(errors).toEqual([]);
});

test("projects open on demand, navigate images, trap focus and restore it on close", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const projects = [
    "Undangan Pernikahan Digital",
    "Aplikasi AbsenKuy",
    "Portfolio V2",
    "Mobile App Nita",
    "Web App Nusafin",
    "Mobile App Otto Parking",
  ];
  for (const [index, title] of projects.entries()) {
    const opener = page.getByRole("button", {
      name: `Lihat proyek ${title}`,
      exact: true,
    });
    await opener.click();
    const dialog = page.getByRole("dialog", { name: title, exact: true });
    await expect(dialog).toBeVisible();
    const image = dialog.getByAltText(`${title} - image 1`, { exact: true });
    await expect(image).toBeVisible();
    await expect
      .poll(() =>
        image.evaluate((element: HTMLImageElement) => element.naturalWidth),
      )
      .toBeGreaterThan(0);
    await dialog.getByRole("button", { name: "Next", exact: true }).click();
    await expect(
      dialog.getByAltText(`${title} - image 2`, { exact: true }),
    ).toBeVisible();
    await page.keyboard.press("ArrowLeft");
    await expect(
      dialog.getByAltText(`${title} - image 1`, { exact: true }),
    ).toBeVisible();
    await dialog.getByRole("button", { name: "Close", exact: true }).focus();
    await page.keyboard.press("Shift+Tab");
    expect(
      await dialog.evaluate((element) =>
        element.contains(document.activeElement),
      ),
    ).toBe(true);
    if (index === 0)
      await page.screenshot({ path: "artifacts/project-modal.png" });
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(opener).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
      "hidden",
    );
  }
});

test("reduced motion keeps desktop static and all content accessible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.waitForTimeout(2500);
  await expect(page.locator("canvas")).toHaveCount(0);
  for (const heading of [
    "About Me",
    "Tools & Stack",
    "Projects",
    "Certificates",
    "Find Me",
  ]) {
    const element = page.getByRole("heading", { name: heading, exact: true });
    await element.scrollIntoViewIfNeeded();
    await expect(element).toBeVisible();
  }
});

test("desktop loads the optional lanyard and renders without runtime errors", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("canvas")).toBeVisible({ timeout: 30_000 });
  await expect(
    page
      .locator('main img[alt="Fadilah Aprianto"]')
      .first()
      .locator("xpath=../.."),
  ).toHaveCSS("opacity", "0", { timeout: 30_000 });
  await page.screenshot({ path: "artifacts/desktop.png" });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await expect(page.locator("canvas")).toBeHidden();
  expect(errors).toEqual([]);
});
