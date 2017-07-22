function create_student(first_name, last_name, is110, is201, is303, fin201, acc200, busm241){
			return {
					first_name:  first_name, 
					last_name: last_name,
					final_GPA: getGPA(is110, is201, is303, fin201, acc200, busm241), 
					status_class: status(final_GPA) 
			};
			
		}

function getGPA(is110, is201, is303, fin201, acc200, busm241)
{
	var is110_GPA = getGPA_Value(is110);
	var is201_GPA= getGPA_Value(is201);
	var is303_GPA = getGPA_Value(is303);
	var fin201_GPA = getGPA_Value(fin201);
	var acc200_GPA = getGPA_Value(acc200);
	var busm241_GPA = getGPA_Value(busm241);

	var final_GPA = (((is110_GPA*1)+(is201_GPA*3)+(is303_GPA*3)+(fin201_GPA*3)+(acc200_GPA*3)+(busm241_GPA*3))/16);
	final_GPA=parseFloat(final_GPA).toFixed(2);
	return final_GPA;
}

function status(GPA)
{
	if(GPA>=3.7)
	{
		status = "HIGH PROBABILITY";
	}
	else if (GPA >=3.5)
	{		
		status = "MEDIUM PROBABILITY";
	}
	else if(GPA>=3.3)
	{
		status = "LOW PROBABILITY";
	}
	else
	{
		status = "SLIGHT CHANCE";
	}
}
function getGPA_Value(grade)
{
	var GPA;
	switch(grade.toLowerCase()) 
	{
		case 'a':
		{
			GPA=4.0;
			return GPA; 
			break;
		}
		case 'a-':
		{
			GPA = 3.7;
			return GPA;
			break;
		}
		case 'b+':
		{
			GPA = 3.4;
			return GPA;
			break;
		}
		case 'b':
		{
			GPA = 3.0;
			return GPA;
			break;
		}
		case 'b-':
		{
			GPA = 2.7;
			return GPA;
			break;
		}
		case 'c+':
		{
			GPA = 2.4;
			return GPA;
			break;
		}
		case 'c':
		{
			GPA = 2.0;
			return GPA;
			break;
		}
		case 'c-':
		{
			GPA = 1.7;
			return GPA;
			break;
		}	
		case 'd+':
		{
			GPA = 1.4;
			return GPA;
			break;
		}
		case 'd':
		{
			GPA = 1.0;
			return GPA;
			break;
		}
		case 'd-':
		{
			GPA = 0.7;
			return GPA;
			break;
		}
		case 'e':
		{
			GPA = 0;
			return GPA;
			break;
		}


	}
}