##### GitHub check name for calculating contributions
```sh
$ git config user.name=Jian-Min-Huang
$ git config user.email=yfr.huang@hotmail.com
```

##### revert to previous commit
local
```sh
$ git reset
$ git reset --hard SHA
$ git reset --soft SHA
```
remote
```sh
$ git push -f
```

##### modify commit message
```sh
$ git reset --soft SHA
$ git commit -m "message"
```