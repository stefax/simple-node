function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const name = process.env.NAME;
  while(true) {
    console.log(`Hello ${name} Containers rule!`);
    await sleep(5000);
  }
}

main();
