function position(search, animals){
    var i;
        
        for (i = 0; i<animals.length; i=i+1) {
        
            if (animals[i] === search) {
                return [i];
            }
        }
        
        return -1;
    }
    
    position(99, [55, 98, 22, 6, 53, 5]);
    