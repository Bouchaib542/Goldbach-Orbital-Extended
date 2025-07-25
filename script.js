function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n || n % 3n === 0n) return false;
  for (let i = 5n; i * i <= n; i += 6n) {
    if (n % i === 0n || n % (i + 2n) === 0n) return false;
  }
  return true;
}

function predict() {
  const input = document.getElementById("evenInput").value.trim();
  const output = document.getElementById("result");
  output.textContent = "";

  if (!/^\d+$/.test(input)) {
    output.textContent = "Veuillez entrer un entier pair valide.";
    return;
  }

  const E = BigInt(input);
  if (E % 2n !== 0n || E < 4n) {
    output.textContent = "E doit être un nombre pair ≥ 4.";
    return;
  }

  const log = Math.log(Number(E));
  const loglog = Math.log(log);
  const sqrtE = Math.sqrt(Number(E));
  const delta = sqrtE * (loglog / log);
  const corrected = delta * 0.99;

  const δ = Math.round(corrected);
  const half = E / 2n;
  const minP = half - BigInt(Math.ceil(δ));
  const maxP = half + BigInt(Math.ceil(δ));

  let results = `**δ(E) prédit :** ${sqrtE * (loglog / log)}\n`;
  results += `**δ(E) corrigé :** ${corrected}\n`;
  results += `**Paires de Goldbach les plus proches (p, q) :**\n`;

  let found = false;
  for (let p = maxP; p >= minP; p--) {
    const q = E - p;
    if (isPrime(p) && isPrime(q)) {
      results += `- p = ${p}, q = ${q}\n`;
      found = true;
    }
  }

  if (!found) {
    results += "- Aucun (p, q) valide n'a été trouvé dans la plage orbitale prédite.";
  }

  output.textContent = results;
}
