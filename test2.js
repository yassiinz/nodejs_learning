const fs = require('fs');

try {
    const data = fs.readFileSync('test1.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
}
console.log('done');