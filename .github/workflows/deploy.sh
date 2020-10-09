cp -r tmp/.git build/
cd build
git config user.name "github-actions"
git config user.email "github-actions@github.com"
git status
git add -A
if [ $? -eq 0 ]
then
  git commit -m "Deploy by Github Actions"
  git push
fi
