#!/bin/bash
echo "Registriamo alcune identità in Fabric"
node register.js dottore1 dottore ortopedico
node register.js dottore2 dottore cardiologo
node register.js paziente1 paziente
node register.js paziente2 paziente
echo "FINE"

