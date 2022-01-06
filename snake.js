class Snake {
    constructor() {
        this.xDir=0;
        this.yDir=0;
        this.body=[]
        this.body[0]=createVector(floor(w/2),floor(h/2))
        this.len=0

    }
    setDir(x,y) {
        this.xDir=x
        this.yDir=y
    }
    update() {
        var head;
        head=this.body[this.body.length-1].copy()
        this.body.shift()
        head.x=head.x+this.xDir
        head.y=head.y+this.yDir
        this.body.push(head)
      
    }
    grow() {
        var head;
        head=this.body[this.body.length-1].copy()
        this.len++
        this.body.push(head)
        
    }
    eat(pos) {
        var x,y;
        x=this.body[this.body.length-1].x
        y=this.body[this.body.length-1].y
        
        if(pos.x-x<20 && x-pos.x<20 && pos.y-y<20 && y-pos.y<20) {
            this.grow()
           // console.log("touching")
                return true
        }
        else
        return false
            
        
        /*if(pos.x===x && pos.y===y) {
            this.grow()
            
            return true
        }
        else 
        return false*/

    }
    show() {
        
        for(var i=0;i<this.body.length;i++) {
            fill(0)
            noStroke()
        rect(this.body[i].x,this.body[i].y,20,20)
        console.log(i)

        }
    }
    endGame() {
        var x=this.body[this.body.length-1].x
        var y=this.body[this.body.length-1].y
        if(x>w-1 || x<0 || y<h-1 || y<0 ) {
            return true
        }
        for(var i=0;i<this.body.length-1;i++) {
            var p=this.body[i]
            if(p.x==x && p.y==y) {
                return true
            }
            else
            return false
        }

    }
        
      
}
/*if(fobj.x-mobj.x<(fobj.width+mobj.width)/2  &&
     mobj.x-fobj.x<(fobj.width+mobj.width)/2  &&
     fobj.y-mobj.y<(fobj.height+mobj.height)/2 &&
     mobj.y-fobj.y<(fobj.height+mobj.height)/2  )*/