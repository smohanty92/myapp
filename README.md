Issue occurs when you try to update a parent and then switch to another one.
Play around with it and you'll notice the wierdness. It's even clearing the children

//Insert test Records
db.Parents.insert([ {name:'John', children:[{name:'Sally'}]}, {name:'Peter', children:[{name:'Nancy'}]}    ])

//Remove to cleanup
db.Parents.remove({})