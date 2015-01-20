# testc
another one

=======
Ok, got the project going
    git clone https://github.com/halbertstone/testc.git
    cd ./testc
    npm init
    npm install hapi --save
    git status
        untracked
            package.json    from npm init
            node_modules/   from npm install hapi --save
    git branch
        *master
    git add package.json
    git commit -m "commit the package.json"
    git push --porcelain origin master      [remote] [local]
    
    mkdir ./lib
    vi ./lib/routes.js  code a route
    vi ./index.js       code a server 
    node ./index.js     Start the server

    NAVIGATE Browser to http://localhost:8080  for reply "Hello World"
ok, server is working

Installed mongodb
    brew update
    brew mkdir -p /data/db      for default data store location
Start the Database
    sudo mongod &       did not redirect stdout
Start mongo Shell
    mongo
    >db
        test
    >show dbs
        admin (empty)
        local 0.078GB
    >use mydb        To switch to a new db
    >db
        mydb
    >show dbs
        Same as before, mydb NOT listed??  mongod does not actually create it
until data actually inserted.
Add Data
    >use mydb
Make some data
    >j={ name : "mongo"}
    >k={ x : 3 }
Insert the data
    >db.testData.insert (j)  Note testData is a new Collection being created
        Bunch of stuff, while the mydb item is being created
        WriteResult({"nTnserted":1})
    >db.testData.insert(k)    
        WriteResult({"nTnserted":1})
    >show dbs
        admin (empty)
        local 0.078GB
        mydb  0.078GB
    >show collections
        system.indexes
        testData
    >db.testData.find()
        { "_id" : ObjectId("....."), "name" : "mongo" }
        { "_id" : ObjectId("....."), "x" : 3 }

OK, server is working, and now so is the mongo DB

Installed hapi-mongodb
npm install hapi-mongodb --save

C~/MEAN_STUFF/testc/$ npm install hapi-mongodb --save
\
> kerberos@0.0.7 install
> /Users/halbertstone/MEAN_STUFF/testc/node_modules/hapi-mongodb/node_modules/mongodb/node_modules/kerberos
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/kerberos/lib/kerberos.o
  CXX(target) Release/obj.target/kerberos/lib/worker.o
  CC(target) Release/obj.target/kerberos/lib/kerberosgss.o
  CC(target) Release/obj.target/kerberos/lib/base64.o
  CXX(target) Release/obj.target/kerberos/lib/kerberos_context.o
  SOLINK_MODULE(target) Release/kerberos.node
  SOLINK_MODULE(target) Release/kerberos.node: Finished

> bson@0.2.17 install
> /Users/halbertstone/MEAN_STUFF/testc/node_modules/hapi-mongodb/node_modules/mongodb/node_modules/bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/bson/ext/bson.o
  SOLINK_MODULE(target) Release/bson.node
  SOLINK_MODULE(target) Release/bson.node: Finished
hapi-mongodb@2.3.0 node_modules/hapi-mongodb
├── async@0.9.0
├── joi@5.1.0 (topo@1.0.2, hoek@2.11.0, isemail@1.1.1, moment@2.9.0)
└── mongodb@1.4.28 (readable-stream@1.0.33, kerberos@0.0.7, bson@0.2.17)
~/MEAN_STUFF/testc/$ 

NOW following along with Mr. Geek
http://www.mrgeek.me/technology/tutorials/node-js/building-a-rest-api-using-hapi-js-and-mongodb/

