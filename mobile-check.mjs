import { chromium } from '@playwright/test';
import fs from 'fs';

const url = 'http://localhost:5173';
const dir = './mobile-screenshots';
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 375, height: 812 });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

await page.screenshot({ path: `${dir}/01-nav.png`, clip: {x:0,y:0,width:375,height:80} });

await page.evaluate(() => window.scrollTo(0,0));
await page.screenshot({ path: `${dir}/02-hero.png` });

await page.evaluate(() => document.getElementById('story')?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}/03-story.png` });

await page.evaluate(() => document.getElementById('products')?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}/04-products.png` });

await page.evaluate(() => document.getElementById('groupbuy')?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}/05-groupbuy.png` });

await page.evaluate(() => document.getElementById('promise')?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}/06-promise.png` });

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}/07-cta-footer.png` });

await page.screenshot({ path: `${dir}/00-full.png`, fullPage: true });

await browser.close();
console.log('Done');
