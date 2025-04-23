import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Test each number", () => {
  test("All numbers", async ({ page }) => {
    await page.locator("#i0").click();
    await page.locator("#i1").click();
    await page.locator("#i2").click();
    await page.locator("#i3").click();
    await page.locator("#i4").click();
    await page.locator("#i5").click();
    await page.locator("#i6").click();
    await page.locator("#i7").click();
    await page.locator("#i8").click();
    await page.locator("#i9").click();
    const screenText = await page.locator(".screen").innerText();
    expect(screenText).toContain("123456789");
  });
  test.describe("boutons chiffres", () => {
    for (let i = 0; i <= 9; i++) {
      test(`affiche ${i} quand on clique sur ${i}`, async ({ page }) => {
        await page.locator(`#i${i}`).click();
        const screenText = await page.locator(".screen").innerText();
        expect(screenText).toContain(`${i}`);
      });
    }
  });
});

test.describe("Test operators", () => {
  test.describe("plus", () => {
    test("affiche sum quand on clique sur sum", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#sum").click();
      await page.locator("#i1").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("1 + 1");
    });
  });

  test.describe("minus", () => {
    test("affiche soustraction quand on clique sur soustraction", async ({
      page,
    }) => {
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i1").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("1 - 1");
    });
  });

  test.describe("multiplication", () => {
    test("affiche multiplication quand on clique sur multiplication", async ({
      page,
    }) => {
      await page.locator("#i1").click();
      await page.locator("#multiplication").click();
      await page.locator("#i1").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("1 X 1");
    });
  });
});

test.describe("Test operations", () => {
  test.describe("plus", () => {
    test("affiche 2 quand on clique sur 1 + 1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#sum").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("2");
    });
  });

  test.describe("minus", () => {
    test("affiche 0 quand on clique sur 1 - 1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("0");
    });
  });

  test.describe("multiplication", () => {
    test("affiche 1 quand on clique sur 1 X 1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#multiplication").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("1");
    });
  });
});

test.describe("Test operations with negative", () => {
  test.describe("plus", () => {
    test("affiche 0 quand on clique sur 1 - 2 + 1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i2").click();
      await page.locator(".btnEqual").click();
      await page.locator("#sum").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("0");
    });
  });

  test.describe("minus", () => {
    test("affiche -2 quand on enlève 1 à -1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i2").click();
      await page.locator(".btnEqual").click();
      await page.locator("#soustraction").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("-2");
    });
  });

  test.describe("multiplication", () => {
    test("Affiche -4 quand on fait -3 * 2", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i3").click();
      await page.locator(".btnEqual").click();
      await page.locator("#multiplication").click();
      await page.locator("#i2").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("-4");
    });
  });
});

test.describe("Test operations multiple", () => {
  test.describe("plus", () => {
    test("affiche 3 quand on clique sur 1 + 1 + 1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#sum").click();
      await page.locator("#i1").click();
      await page.locator("#sum").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("3");
    });
  });

  test.describe("minus", () => {
    test("affiche -1 quand on clique sur 1 - 1 - 1", async ({ page }) => {
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i1").click();
      await page.locator("#soustraction").click();
      await page.locator("#i1").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("-1");
    });
  });

  test.describe("multiplication", () => {
    test("Affiche 8 quand on fait 2 * 2 * 2", async ({ page }) => {
      await page.locator("#i2").click();
      await page.locator("#multiplication").click();
      await page.locator("#i2").click();
      await page.locator("#multiplication").click();
      await page.locator("#i2").click();
      await page.locator(".btnEqual").click();
      const screenText = await page.locator(".screen").innerText();
      expect(screenText).toContain("8");
    });
  });
});
