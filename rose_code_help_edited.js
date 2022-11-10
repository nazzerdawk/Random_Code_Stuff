/*
	An edited version of rose_code_help_original.js. See original for conext. 

*/



<html>
   <body>
   
      <script type = "text/javascript">
        <!--
		
		
		
		/*
			Your issues are all in this block here:
		
		
	    var Input = prompt("Enter 5 homework scores separated by a space");
            var grade = [];
            length = Input.length;   
								Two things: 
									-First, this should also start with "var". This won't make it not work in your case, but it will be an issue if you make certain changes in the future. 

									
									-Second, in this statement "length" is getting the length of the string of characters stored in "Input" from the user input from the function "prompt". 
													So if they put in "50 50 50 50 50", this statement will store "14" in "length", because "50 50 50 50 50" is 14 characters long.
													Keep in mind that at this point in the code, you have only used Input to store the string but have not done the next operation, where 
													you separated the string into an array. So, the solution is to run this same statement (though adding "var" at the front) AFTER your next 
													statement. That way it's using the "length" function on an array of 5 substrings instead of on a string.                  	
													
            Input.split(" ");   <---- This is the second point where your code breaks. You do the "split" function to "Input" but don't assign it to anything. In this case, you can simply 
										write "Input = Input.split(" ");". This way you're putting the results of splitting up "Input" back into the "Input" variable. This changes the type 
										of data stored in Input from a String to an Array, but in JS that's okay... for now. later on things like that can cause serious headaches. 
		
            var totalScore;
 
            for (var i=0; i < length; i++) {		         Last thing:
				grade.push(parseInt(Input[i])); <---This needs the radix for the parseInt() function. "parseInt(Input[i]))" should be "parseInt(Input[i],10))". This lets it know which number system you are parsing by.
				totalScore += grade[i];
				var avg = (totalScore/grade.length);
            }
		
		
		
			Finally, below is the corrected version of the block. 
		*/


			var Input = prompt("Enter 5 homework scores separated by a space");
			var grade = [];
			Input = Input.split(" ");
			var length = Input.length
			
			var totalScore;
			
			for (var i=0; i < length; i++) {
				grade.push(parseInt(Input[i],10));
				
				
				
				
				

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
 

     
