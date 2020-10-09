cp -r tmp/.git build/
cd build
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git status
git add -A
if [ $? -eq 0 ]
then
  git commit -m "Deploy by Github Actions"
  git push
fi
