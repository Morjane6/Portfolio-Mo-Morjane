# Stegene for å oppdatere og deploye:

# 1-Sjekk status – se hvilke filer du har endret:

git status

# 2- Legg til endringene:

git add .

# 3- Legg til endringene:

git commit -m "Oppdatert tekst/design/prosjekter"

# 4-Trekk ned siste fra GitHub (for sikkerhet):

git pull origin main

# 5-Push endringene til GitHub:

git push origin main

# 6-Bygg prosjektet for deploy (fordi du bruker React med Vite):

npm run build

# 7 Deploy til GitHub Pages (hvis du bruker vite-plugin gh-pages):

npm run deploy
