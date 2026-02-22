"""Create placeholder JPGs in website/assets/players/ so the site loads without 404s."""
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install Pillow")
    raise SystemExit(1)

players_dir = Path(__file__).resolve().parent / "players"
players_dir.mkdir(parents=True, exist_ok=True)
img = Image.new("RGB", (200, 200), color=(45, 55, 72))
for i in range(1, 9):
    img.save(players_dir / f"{i:02d}.jpg", "JPEG", quality=85)
print("Created 01.jpg .. 08.jpg in", players_dir)
