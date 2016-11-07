//first create an index

db.youCollection.createIndex({loc:"2dsphere"});//2dspehre locations on eard , 2d for locations in flat plan as in games

//it will return a list ordered from the nearsty
//you can also set the max distance and limit
db.yourCollection.find({
    loc: 
    {
        $near: 
        {
            $geometry : 
            {
                type : "Point",
                coordinates : [2, 2.01]
            } ,
            spherical : true
        }
    }    
});