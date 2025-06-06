export const config = {
  runtime: 'edge',
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Metode tidak diizinkan" });
  }

  const { username, password } = req.body;

  // Ganti kredensial admin di sini
  const ADMIN_USER = "Fizzx";
  const ADMIN_PASS = "Fizzx1321";

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: "Username atau password salah" });
  }
}
