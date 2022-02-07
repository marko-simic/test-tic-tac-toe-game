const { test, expect } = require("@playwright/test");

test.describe("Tic Tac Toe", () => {
  test("Cross should win", async ({ page, browser }) => {
    // Opens a game board as the Cross player
    await Promise.all([page.waitForEvent("websocket"), page.goto("/", { waitUntil: "commit" })]);

    const circlePage = await browser.newPage(); // Creates a new page in a new browser context.
    // Opens a game board as the Circle player
    circlePage.goto("/", { waitUntil: "commit" });

    // Move No. 1
    await page.locator("#a0").click();
    await circlePage.locator("#a1").click();
    // Move No. 2
    await page.locator("#b1").click();
    await circlePage.locator("#a2").click();
    // Move No. 3
    await page.locator("#c2").click();

    await expect(page.locator("#turn")).toHaveText("Game over. You won!");
    await expect(circlePage.locator("#turn")).toHaveText("Game over. You lost.");

    await circlePage.close();
  });

  test("Circle should win", async ({ page, browser }) => {
    // Opens a game board as the Cross player
    await Promise.all([page.waitForEvent("websocket"), page.goto("/", { waitUntil: "commit" })]);

    const circlePage = await browser.newPage(); // Creates a new page in a new browser context.
    // Opens a game board as the Circle player
    circlePage.goto("/", { waitUntil: "commit" });

    // Move No. 1
    await page.locator("#a1").click();
    await circlePage.locator("#a0").click();
    // Move No. 2
    await page.locator("#a2").click();
    await circlePage.locator("#b1").click();
    // Move No. 3
    await page.locator("#c1").click();
    await circlePage.locator("#c2").click();

    await expect(page.locator("#turn")).toHaveText("Game over. You lost.");
    await expect(circlePage.locator("#turn")).toHaveText("Game over. You won!");

    await circlePage.close();
  });

  test("The game should be drawn", async ({ page, browser }) => {
    // Opens a game board as the Cross player
    await Promise.all([page.waitForEvent("websocket"), page.goto("/", { waitUntil: "commit" })]);

    const circlePage = await browser.newPage(); // Creates a new page in a new browser context.
    // Opens a game board as the Circle player
    circlePage.goto("/", { waitUntil: "commit" });

    // Move No. 1
    await page.locator("#a0").click();
    await circlePage.locator("#a1").click();
    // Move No. 2
    await page.locator("#a2").click();
    await circlePage.locator("#b0").click();
    // Move No. 3
    await page.locator("#b1").click();
    await circlePage.locator("#b2").click();
    // Move No. 4
    await page.locator("#c1").click();
    await circlePage.locator("#c0").click();
    // Move No. 5
    await page.locator("#c2").click();

    await expect(page.locator("#turn")).toHaveText("Game Over.  It was a draw!");
    await expect(circlePage.locator("#turn")).toHaveText("Game Over.  It was a draw!");

    await circlePage.close();
  });
});
