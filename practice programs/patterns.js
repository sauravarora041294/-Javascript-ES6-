/*
          #
         ###
        #####
       #######
      #########

*/

function display(){
     var x=19;
     var y=x/2; // spaces
     var z=1; // *`s
     for(var i=0;i<10;i++)
    {
         for(var j=0;j<y;j++)
        {
             process.stdout.write(" ");
        }
        for(var k=0;k<z;k++)
        {
                process.stdout.write('#');
        }
        
        y=y-1;
        z=z+2;
        process.stdout.write('\n');  
    }
}
display();

/*

          *
         * *
        *   *
       *     *
      *       *
     *         *
    *           *
   *             *
  *               *
 *                 *

*/

function pattern(h){
    var ele = 2*h+1;
    sp = ele/2;
    var y =1;
    for(var i = 0;i<h;i++){
        for(var j=1;j<=sp; j++){
            process.stdout.write(" ");
        }
        for( var k=1;k<=y;k++){

            if(i!=h && (k==1 || k==y)){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
        }
        y =y+2;
        sp= sp-1;
        process.stdout.write("\n");
    }
}
pattern(10);
display();


























