
import os

FOLDER = "."
BASE_NAME = ""
START_NUMBER = 1
EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")

files = [f for f in os.listdir(FOLDER) if f.lower().endswith(EXTENSIONS)]
files.sort()

for i, filename in enumerate(files, START_NUMBER):
    ext = os.path.splitext(filename)[1]
    new_name = f"{BASE_NAME}{i:03d}{ext}"  # 001, 002, 003...
    os.rename(filename, new_name)
    print(f"{filename} -> {new_name}")

print("✅ Renombrado completo")
