
<html>
   <body>
   
      <script type = "text/javascript">
        <!--
            var Input = prompt("Enter 5 homework scores separated by a space");
            var grade = [];
            length = Input.length;
            Input.split(" ");
            
            var totalScore;
 
            for (var i=0; i < length; i++) {
				grade.push(parseInt(Input[i]));
				totalScore += grade[i];
				var avg = (totalScore/grade.length);
            }
 
            console.log("Average grade: " + (totalScore)/grade.length);
 
            
                
            
            
                 if( avg < 60 ) {
                 alert("Current grade is F. Please review or seek help.");
                 } else if( avg < 70 ){
                 alert("Cuurent grade is D. Try setting a study reminder or find a study partner.");
                 } else if( avg < 80 ) {
                 alert("Current grade is C. Your almost there keep up the studies.");
                 } else if( avg < 90 ) {
                 alert("Current grade is B. Doing great! Keep it up!");
                 } else if( avg >=90) {
                 alert("Current grade is A! Excellent Job!") 
                 } else 
                    alert("invalid input please try again")
 
 
                 
        //-->
        </script>
        
   </body>
</html>
 

     