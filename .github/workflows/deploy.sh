git clone "https://Tarocch1:${TOKEN}@github.com/Tarocch1/2FA.git" -b gh-pages tmp
cp -r tmp/.git build/
cd build
git config user.name "Tarocch1"
git config user.email "huiben.fang@gmail.com"
git status
git add -A
if [ $? -eq 0 ]
then
  git commit -m "Deploy by Github Actions"
  git push
fi