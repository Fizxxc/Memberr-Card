export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }

    // Validasi akun admin (contoh sederhana)
    if (username === "Fizzx" && password === "Fizzx1321") {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

  } catch (err) {
    console.error("Login API error:", err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
