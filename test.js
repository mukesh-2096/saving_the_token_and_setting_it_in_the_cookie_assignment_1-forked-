const { encrypt, decrypt } = require('./script');

const payload = {
  userId: 1,
  role: 'admin'
};

// Encrypt the payload
const encryptedToken = encrypt(payload);
console.log('Encrypted Token:', encryptedToken);

// Decrypt the token
try {
  const decryptedData = decrypt(encryptedToken);
  console.log('Decrypted Payload:', decryptedData); // Should match original
} catch (err) {
  console.error('Decryption failed:', err.message);
}
