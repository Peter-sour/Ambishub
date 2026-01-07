import pywhatkit as kit
import pyautogui as pg
import time

nomor_test = "+6285784703356"
pesan = "Halo Mas Kabir, ini testing pake jurus paksa! 🚀"

print("🚀 Memulai... Jangan sentuh mouse/keyboard!")

try:
    # 1. Buka WA Web (kita kasih wait_time agak lama biar loading beres)
    kit.sendwhatmsg_instantly(nomor_test, pesan, wait_time=35, tab_close=False)
    
    # 2. Tambahan Jeda biar bener-bener mantap
    time.sleep(5)
    
    # 3. TRIK KUNCI: Klik layar sekali di area tengah browser 
    # biar fokus jendela pindah ke browser.
    # (Opsional, tapi manjur di Ubuntu)
    # pg.click(x=500, y=500) 
    
    # 4. Paksa Enter
    pg.press('enter')
    print("✅ Enter ditekan!")

    # 5. Jeda bentar biar pesan terkirim sebelum tab ditutup
    time.sleep(5)
    
    # 6. Paksa tutup tab (Ctrl + W)
    pg.hotkey('ctrl', 'w')
    print("✅ Tab ditutup!")

except Exception as e:
    print(f"❌ Error: {e}")