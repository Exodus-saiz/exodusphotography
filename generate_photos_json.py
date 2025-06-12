
import os
import json

photos_folder = 'photos'
valid_extensions = ('.jpg', '.jpeg', '.png', '.gif')

photos = [f for f in os.listdir(photos_folder)
          if f.lower().endswith(valid_extensions) and os.path.isfile(os.path.join(photos_folder, f))]

photos.sort()

json_path = os.path.join(photos_folder, 'photos.json')
with open(json_path, 'w', encoding='utf-8') as json_file:
    json.dump(photos, json_file, indent=2)

print(f"Le fichier '{json_path}' a été mis à jour avec {len(photos)} photos.")
