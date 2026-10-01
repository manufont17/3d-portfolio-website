import os

# Chiave di cifratura semplice
KEY = 0x42

def obfuscate_file(input_file, output_file):
    if not os.path.exists(input_file):
        print(f"File non trovato: {input_file}")
        return
    
    with open(input_file, 'rb') as f:
        data = bytearray(f.read())
    
    # Inverte i byte usando la chiave XOR
    for i in range(len(data)):
        data[i] ^= KEY
        
    with open(output_file, 'wb') as f:
        f.write(data)
    print(f"Convertito con successo: {output_file}")

# Convertiamo i 3 modelli
obfuscate_file("assets/3dModels/golem_export.glb", "assets/3dModels/golem.dat")
obfuscate_file("assets/3dModels/giru_export_v2.glb", "assets/3dModels/giru.dat")
obfuscate_file("assets/3dModels/Axe.glb", "assets/3dModels/axe.dat")