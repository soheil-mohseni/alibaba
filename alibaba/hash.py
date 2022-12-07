from hashlib import sha256
import base64
from Crypto import Random
from Crypto.Cipher import AES
from binascii import hexlify, unhexlify

BS = 24
pad = lambda s: bytes(s + (BS - len(s) % BS) * chr(BS - len(s) % BS), 'utf-8')
unpad = lambda s: s[0:-ord(s[-1:])]


class AESCipher:

    def __init__(self, key,ivs):
        self.key = bytes(key, 'utf-8')
        self.ivs = bytes(ivs, 'utf-8')
   #     self.iv = bytes(iv, 'utf-8')

    def encrypt(self, raw):
        raw = pad(raw)
        ll = 'WHAyczV2OHkvQj9FKEcrSw=='
        iv = bytes('WHAyczV2OHkvQj9FKEcrSw==', 'utf-8')
        print("12345678",iv)
        cipher = AES.new(self.key, AES.MODE_CBC, self.ivs )
        return base64.b64encode( iv + cipher.encrypt( raw ) )

    def decrypt( self, enc ):
        enc = base64.b64decode(enc)
        iv = enc[:16]
        cipher = AES.new(self.key, AES.MODE_CBC, iv )
        return unpad(cipher.decrypt( enc[16:] )).decode('utf8')

cipher = AESCipher('M3M2djl5JEImRSlIQE1jUQ==','WHAyczV2OHkvQj9FKEcrSw==')
encrypted = cipher.encrypt('002123435234sdas')
decrypted = cipher.decrypt(encrypted)

print(encrypted)
print(decrypted)